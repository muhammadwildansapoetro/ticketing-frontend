"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";

const chartConfig = {
  totalTicket: {
    label: "Total Ticket",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface IYear {
  year: string;
  totalTicket: number;
}

export function TicketChart() {
  const [chartData, setChartData] = useState<IYear[] | null>(null);

  const getChartData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_BE!}/dashboard/ticketchart`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        next: { revalidate: 0 },
      },
    );
    const result = await res.json();
    setChartData(result.result);
  };

  useEffect(() => {
    getChartData();
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardDescription>Per Years</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData!}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="totalTicket" hide />
            <YAxis
              dataKey="year"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              // tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar
              dataKey="totalTicket"
              fill="var(--color-totalTicket)"
              radius={5}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last year
        </div>
      </CardFooter>
    </Card>
  );
}
