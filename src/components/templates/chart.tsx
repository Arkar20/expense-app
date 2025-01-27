import {
    Bar,
    BarChart as RechartBarChart,
    CartesianGrid,
    LabelList,
    XAxis,
} from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { useExpenseStorage } from "@/store";

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig;

export function BarChart() {
    const { expenses } = useExpenseStorage();

    console.log(expenses);

    const chartData = expenses.reduce((acc, expense) => {
        const existingCategory = acc.find(
            (item) => item.category === expense.category
        );

        if (existingCategory) {
            existingCategory.total_amount += expense.amount;
        } else {
            acc.push({
                category: expense.category,
                total_amount: expense.amount,
            });
        }

        return acc;
    }, [] as { category: string; total_amount: number }[]);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Bar Chart - Label</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <RechartBarChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            top: 20,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar
                            dataKey="total_amount"
                            fill="var(--color-desktop)"
                            radius={8}
                        >
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Bar>
                    </RechartBarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
