"use client";

import Loading from "@/app/loading";
import { useSession } from "@/context/useSession";
// import { useState } from "react";

function ReferralCode() {
  const { customer } = useSession();

  if (!customer) {
    return <Loading />;
  }
  console.log("customer coupon", customer.CustomerCoupon);
  //   const [referralCode, setReferralCode] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  //   useEffect(() => {
  //     // Fetch referral code from API
  //     const fetchReferralCode = async () => {
  //       try {
  //         const response = await fetch("/api/referral-code"); // API route
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch referral code");
  //         }
  //         const data = await response.json();
  //         setReferralCode(data.code);
  //       } catch (error) {
  //         console.log(error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchReferralCode();
  //   }, []);

  return (
    <div className="flex-1 bg-white p-8">
      <header className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-semibold">My Coupon</h2>
      </header>
      <div className="rounded-lg bg-gray-100 p-8 text-center">
        {customer?.isVerified ? (
          <p>Loading your referral code...</p>
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-gray-600">Your unique referral code:</p>
            <div className="text-lg">{customer?.email}</div>
            <div className="mt-4 rounded-lg bg-blue-100 px-6 py-3 text-xl font-bold text-blue-900">
              Referral Code:{" "}
              <span className="font-bold">{customer?.referralCode}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReferralCode;
