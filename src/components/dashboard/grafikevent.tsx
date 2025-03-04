"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";

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

const chartConfig = {
  event_active: {
    label: "Active Events",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface IDataEvent {
  month: string;
  event_active: number;
}

export function EventChart() {
  const [chartData, setChartData] = useState<IDataEvent[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getChartData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_BE!}/dashboard/eventGrafik`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          next: { revalidate: 0 },
        },
      );
      const result = await res.json();
      setChartData(result.result);
    } catch (error) {
      console.error("Failed to fetch chart data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getChartData();
  }, []);

  return (
    <Card className="mx-auto w-full max-w-4xl rounded-lg bg-white p-4 shadow-md">
      <CardHeader>
        <CardDescription className="text-sm text-gray-500">
          Per Month
        </CardDescription>
      </CardHeader>
      <CardContent className="relative">
        {isLoading ? (
          <div className="flex h-56 items-center justify-center">
            <span className="text-gray-500">Loading...</span>
          </div>
        ) : (
          <ChartContainer config={chartConfig}>
            <BarChart
              data={chartData!}
              layout="vertical"
              margin={{
                left: -20,
              }}
              className="h-64 w-full"
            >
              <XAxis type="number" dataKey="event_active" />
              <YAxis
                dataKey="month"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Bar
                dataKey="event_active"
                fill="var(--color-event_active)"
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-gray-600">
          Showing total events for the last 4 months.
        </div>
      </CardFooter>
    </Card>
  );
}
