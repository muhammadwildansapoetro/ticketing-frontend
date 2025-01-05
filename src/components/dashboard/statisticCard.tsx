import React from "react";

interface StatsCardProps {
  title: string;
  value: number | string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <h3 className="text-sm font-medium text-gray-700">{title}</h3>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
  );
};

export default StatsCard;
