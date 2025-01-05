"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
// const chartData = [
//   { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//   { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
//   { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//   { browser: "other", visitors: 90, fill: "var(--color-other)" },
// ]

const chartConfig = {
  totalTicket: {
    label: "Total Ticket",
    color: "hsl(var(--chart-1))",
  },
  totalTicket2: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface IYear {
  year: string;
  totalTicket: number;
}

export function TicketChart() {
  const [chartData, setChartData] = useState<IYear[] | null>(null);
  // console.log(chartData);

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
    // console.log(result);
    setChartData(result.result);
  };

  useEffect(() => {
    getChartData();
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ticket Chart</CardTitle>
        <CardDescription>January - June</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData!}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="year"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="totalTicket" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="totalTicket" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
