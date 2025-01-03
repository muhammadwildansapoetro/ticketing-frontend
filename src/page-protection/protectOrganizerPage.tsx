"use client";

import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const protectOrganizerPage = (WrappedComponent: React.ComponentType) => {
  const OrganizerGuard: React.FC = (props) => {
    const router = useRouter();
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
      if (!storedToken) {
        router.push("/organizer/sign-in");
      }
    }, [router]);

    useEffect(() => {
      if (token === null) return;

      if (!token) {
        router.push("/organizer/sign-in");
      } else {
        const decodedCustomer = jwtDecode(token) as {
          role: "organizer" | "customer";
        };
        if (decodedCustomer.role !== "organizer") {
          router.push("/");
        }
      }
    }, [router, token]);

    if (token === null) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return OrganizerGuard;
};

export default protectOrganizerPage;
