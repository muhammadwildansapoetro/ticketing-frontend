import React from "react";

interface StatsCardProps {
  title: string;
  value: number | string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-gray-700 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
  );
};

export default StatsCard;
