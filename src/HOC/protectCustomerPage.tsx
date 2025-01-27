"use client";

import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

interface PageProps {
  params: {
    eventId: string;
  };
}

const protectCustomerPage = <P extends object>(
  WrappedComponent: React.ComponentType<P & PageProps>,
) => {
  const CustomerGuard: React.FC<P> = (props) => {
    const router = useRouter();
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
      if (!storedToken) {
        router.push("/customer/sign-in");
      }
    }, [router]);

    useEffect(() => {
      if (token === null) return;

      if (!token) {
        router.push("/customer/sign-in");
      } else {
        const decodedCustomer = jwtDecode(token) as {
          role: "organizer" | "customer";
        };
        if (decodedCustomer.role !== "customer") {
          router.push("/");
        }
      }
    }, [router, token]);

    if (token === null) {
      return null;
    }

    return <WrappedComponent {...(props as P & PageProps)} />;
  };

  return CustomerGuard;
};

export default protectCustomerPage;
