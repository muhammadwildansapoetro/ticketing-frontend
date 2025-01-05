"use client";

import { EventChart } from "@/components/dashboard/grafikevent";
import { TransactionChart } from "@/components/dashboard/grafikTransaction";
import { TicketChart } from "@/components/dashboard/ticketChart";

export default function Chartdata() {
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
      <div className="col-span-1">
        <TicketChart />
      </div>
    </div>
  );
}

// export default protectOrganizerPage(Chartdata);
