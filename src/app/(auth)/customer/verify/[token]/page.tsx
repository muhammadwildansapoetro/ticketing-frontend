"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function VerifyPage({ params }: { params: { token: string } }) {
  const router = useRouter();
  const onVerify = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_BE!}/auth/customer/verify/${params.token}`,
        {
          method: "PATCH",
        },
      );
      const result = await res.json();
      if (!res.ok) throw result;
      toast.success(result.message);
      router.push("/customer/sign-in");
    } catch (error) {
      console.log(error);
      router.push("/");
    }
  };

  useEffect(() => {
    onVerify();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <button
        onClick={onVerify}
        className="inline-flex items-center rounded-lg bg-orange-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-orange-800"
      >
        Verifikasi
      </button>
    </div>
  );
}
