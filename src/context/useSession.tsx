"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { ICustomerProfile, IOrganizerProfile } from "@/types/user";

interface SessionContextProps {
  isAuth: boolean;
  customer: ICustomerProfile | null;
  organizer: IOrganizerProfile | null;
  setIsAuth: (isAuth: boolean) => void;
  setCustomer: (customer: ICustomerProfile | null) => void;
  setOrganizer: (organizer: IOrganizerProfile | null) => void;
}

const SessionContext = createContext<SessionContextProps | undefined>(
  undefined,
);

export const SessionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [customer, setCustomer] = useState<ICustomerProfile | null>(null);
  const [organizer, setOrganizer] = useState<IOrganizerProfile | null>(null);

  const checkSession = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("You must sign in first");
        return;
      }

      const { exp } = JSON.parse(atob(token.split(".")[1]));
      const now = Math.floor(Date.now() / 1000);
      console.log("exp:", exp);
      console.log("now:", now);

      if (now > exp) {
        console.log("Token is expired");
        localStorage.removeItem("token");
        setIsAuth(false);
        setCustomer(null);
        setOrganizer(null);
        return;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_BE}/auth/session`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const result = await res.json();
      if (!res.ok) throw result;

      console.log("user session:", result);

      if (result.user.role === "customer") {
        setCustomer(result.user);
      } else {
        setOrganizer(result.user);
      }

      setIsAuth(true);
    } catch (error) {
      console.log("Session check error:", error);
    } finally {
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <SessionContext.Provider
      value={{
        isAuth,
        customer,
        organizer,
        setOrganizer,
        setIsAuth,
        setCustomer,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = (): SessionContextProps => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};
