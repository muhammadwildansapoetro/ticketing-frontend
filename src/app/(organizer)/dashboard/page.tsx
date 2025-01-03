"use client";
import { DashboarChart } from "@/components/dashboard/grafikevent";
import organizerGuard from "@/hoc/organizerGuard";

function Dashboard() {
  return (
    <div>
      <DashboarChart />
    </div>
  );
}

export default organizerGuard(Dashboard);
