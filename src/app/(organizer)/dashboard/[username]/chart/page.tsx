"use client";

import { EventChart } from "@/components/dashboard/grafikevent";
import { TransactionChart } from "@/components/dashboard/grafikTransaction";
import { TicketChart } from "@/components/dashboard/ticketChart";
import Statistics from "../statistic/page";

export default function Chartdata() {
  return (
    <div className="flex-1 bg-gray-50 p-6 md:p-12">
      {/* Header Section */}
      <header className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <h2 className="text-2xl font-bold text-gray-800">Charts Data</h2>
        <p className="text-gray-500">Visual representation of key metrics</p>
      </header>

      {/* Statistics Section */}
      <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
        <Statistics />
      </div>

      {/* Chart Section */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Bar Chart */}
        <div className="col-span-1 rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-4 text-lg font-semibold text-gray-700">
            Event Chart
          </h3>
          <EventChart />
        </div>

        {/* Area Chart */}
        <div className="col-span-1 rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-4 text-lg font-semibold text-gray-700">
            Transaction Chart
          </h3>
          <TransactionChart />
        </div>

        {/* Ticket Chart */}
        <div className="col-span-1 rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-4 text-lg font-semibold text-gray-700">
            Ticket Chart
          </h3>
          <TicketChart />
        </div>
      </div>
    </div>
  );
}
