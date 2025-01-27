"use client";

import Loading from "@/app/loading";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function VerifyPage({ params }: { params: { token: string } }) {
  const router = useRouter();
  const onVerify = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_BE!}/auth/organizer/verify/${params.token}`,
        {
          method: "PATCH",
        },
      );
      const result = await res.json();
      if (!res.ok) throw result;
      toast.success(result.message);
      router.push("/organizer/sign-in");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onVerify();
  }, []);

  return <Loading />;
}
