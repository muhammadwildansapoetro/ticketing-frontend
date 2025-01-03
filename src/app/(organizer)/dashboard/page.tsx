"use client";

import { DashboarChart } from "@/components/dashboard/grafikevent";
import protectOrganizerPage from "@/page-protection/protectOrganizerPage";

function Dashboard() {
  return (
    <div>
      <DashboarChart />
    </div>
  );
}

export default protectOrganizerPage(Dashboard);
