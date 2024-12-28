"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { FormValuesCustomer } from "@/types/user";

interface SessionContextProps {
  isAuth: boolean;
  customer: FormValuesCustomer | null;
  setIsAuth: (isAuth: boolean) => void;
  setCustomer: (customer: FormValuesCustomer | null) => void;
}

const SessionContext = createContext<SessionContextProps | undefined>(
  undefined,
);

export const SessionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [customer, setCustomer] = useState<FormValuesCustomer | null>(null);

  const checkSession = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("You must Login Before");
        return;
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_BE}/api/auth/session`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const result = await res.json();
      if (!res.ok) throw result;
      setCustomer(result.customer);
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <SessionContext.Provider
      value={{ isAuth, customer, setIsAuth, setCustomer }}
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
