"use client";
import { DashboarChart } from "@/components/dashboard/grafikevent";
import organizerGuard from "@/Protection/organizerGuard";

function Dashboard() {
  return (
    <div>
      <DashboarChart />
    </div>
  );
}

export default organizerGuard(Dashboard);
