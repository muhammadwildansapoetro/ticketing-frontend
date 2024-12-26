import { FormValuesCustomer } from "@/types/blog";
import { useEffect, useState } from "react";

const useSession = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [customer, setCustomer] = useState<FormValuesCustomer | null>(null);

  const checkSession = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_BE}/api/auth/session`, {
        method: "GET",
        credentials: "include",
      });
      const result = await res.json();
      if (!res.ok) throw result;
      setCustomer(result.customer);
      setIsAuth(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkSession();
  }, []);

  return {customer, isAuth}
};

export default useSession;
