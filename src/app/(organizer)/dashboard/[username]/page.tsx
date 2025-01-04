"use client";

import { EventChart } from "@/components/dashboard/grafikevent";
import { TransactionChart } from "@/components/dashboard/grafikTransaction";
import protectOrganizerPage from "@/page-protection/protectOrganizerPage";

function Dashboard() {
  return (
    <div className="grid gap-6 p-6 md:grid-cols-3">
      {/* Bar Chart Section */}
      <div className="col-span-1">
        <EventChart />
      </div>
      {/* Area Chart Section */}
      <div className="col-span-1">
        <TransactionChart />
      </div>
    </div>
  );
}

export default protectOrganizerPage(Dashboard);
