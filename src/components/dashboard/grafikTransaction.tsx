"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";

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

const chartConfig = {
  finalPrice: {
    label: "Final Price",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface IDataOrder {
  finalPrice: number;
  createdAt: string;
}

export function TransactionChart() {
  const [chartData, setChartData] = useState<IDataOrder[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getChartData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_BE!}/dashboard/transactionGrafik`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          next: { revalidate: 0 },
        },
      );
      const result = await res.json();
      setChartData(result);
    } catch (error) {
      console.error("Failed to fetch transaction chart data:", error);
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
          Per Day
        </CardDescription>
      </CardHeader>
      <CardContent className="relative">
        {isLoading ? (
          <div className="flex h-56 items-center justify-center">
            <span className="text-gray-500">Loading...</span>
          </div>
        ) : (
          <ChartContainer config={chartConfig}>
            <AreaChart
              data={chartData}
              margin={{
                left: 12,
                right: 12,
                top: 20,
                bottom: 10,
              }}
              className="h-64 w-full"
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="createdAt"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                tickFormatter={(value) =>
                  new Date(value).toLocaleDateString("en-US", {
                    month: "short",
                  })
                }
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                width={50}
              />
              <ChartTooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Area
                dataKey="finalPrice"
                type="monotone"
                fill="var(--color-finalPrice)"
                fillOpacity={0.3}
                stroke="var(--color-finalPrice)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        )}
      </CardContent>
      <CardFooter className="mt-4 flex items-center justify-between text-sm">
        <div className="text-gray-600">Showing data for the day</div>
      </CardFooter>
    </Card>
  );
}
