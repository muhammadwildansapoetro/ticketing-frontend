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
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_BE!}/dashboard/transactionGrafik`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        next: { revalidate: 0 },
      });
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
    <Card className="w-full max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Transaction Chart</CardTitle>
        <CardDescription className="text-sm text-gray-500">
          Showing total transactions for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="relative">
        {isLoading ? (
          <div className="flex justify-center items-center h-56">
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
              className="w-full h-64"
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="createdAt"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { month: "short" })}
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
      <CardFooter className="flex items-center justify-between text-sm mt-4">
        <div className="text-gray-600">
          Showing data for the last 6 months
        </div>
        <div className="flex items-center gap-2 text-green-600 font-medium">
          <TrendingUp className="w-4 h-4" />
          Trending up by 5.2% this month
        </div>
      </CardFooter>
    </Card>
  );
}
