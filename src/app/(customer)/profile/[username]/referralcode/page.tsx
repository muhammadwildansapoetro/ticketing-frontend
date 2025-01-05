"use client";

import React, { useEffect, useState } from "react";

interface CustomerPoint {
  id: string;
  point: number;
  expiredAt: string;
}

interface CustomerCoupon {
  id: string;
  percentage: number;
  expiredAt: string;
}

const CustomerDetails: React.FC = () => {
  const [customerPoints, setCustomerPoints] = useState<CustomerPoint[]>([]);
  const [customerCoupons, setCustomerCoupons] = useState<CustomerCoupon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCustomerRewards = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_BE!}/dashboard/customerdetail`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          next: { revalidate: 0 },
        },
      );

      if (!res.ok) {
        throw new Error("Failed to fetch customer rewards.");
      }

      const data = await res.json();
      setCustomerPoints(data.points);
      setCustomerCoupons(data.coupons);
    } catch (err) {
      console.log(err);

      setError("Something went wrong:");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomerRewards();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-2xl font-bold text-gray-800 md:text-4xl">
          Customer Rewards
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid gap-8">
            {/* Customer Points */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-700">
                Customer Points
              </h2>
              {customerPoints.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {customerPoints.map((point) => (
                    <div
                      key={point.id}
                      className="rounded-lg bg-white p-4 shadow-md transition hover:shadow-lg"
                    >
                      <p className="text-lg font-medium text-gray-800">
                        Points:{" "}
                        <span className="text-indigo-500">{point.point}</span>
                      </p>
                      <p className="text-sm text-gray-500">
                        Expired At:{" "}
                        <span className="text-red-500">
                          {new Date(point.expiredAt).toLocaleDateString()}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No points available.</p>
              )}
            </div>

            {/* Customer Coupons */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-700">
                Customer Coupons
              </h2>
              {customerCoupons.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {customerCoupons.map((coupon) => (
                    <div
                      key={coupon.id}
                      className="rounded-lg bg-white p-4 shadow-md transition hover:shadow-lg"
                    >
                      <p className="text-lg font-medium text-gray-800">
                        Discount:{" "}
                        <span className="text-green-500">
                          {coupon.percentage}%
                        </span>
                      </p>
                      <p className="text-sm text-gray-500">
                        Expired At:{" "}
                        <span className="text-red-500">
                          {new Date(coupon.expiredAt).toLocaleDateString()}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No coupons available.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerDetails;
