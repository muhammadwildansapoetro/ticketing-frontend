import React, { useEffect, useState } from "react";
// import axios from "axios";
import StatsCard from "@/components/dashboard/statisticCard";

const Statistic: React.FC = () => {
  const [data, setData] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL_BE!}/dashboard/statistic`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            next: { revalidate: 0 },
          },
        );
        const result = await res.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  const [totalEvents, totalOrders, totalProfit, totalTickets] = data;

  return (
    <div className="">
      <main className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <StatsCard title="Total Events" value={totalEvents} />
          <StatsCard title="Total Orders" value={totalOrders} />
          <StatsCard title="Total Profit" value={`Rp. ${totalProfit.toFixed(2)}`} />
          <StatsCard title="Total Tickets" value={totalTickets} />
        </div>
      </main>
    </div>
  );
};

export default Statistic;
