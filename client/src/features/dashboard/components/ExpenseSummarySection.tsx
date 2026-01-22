"use client";

import { type IExpenseByCategorySummary } from "@/features/expenses/expenses.type";

import { useGetDashboardMetricsQuery } from "@/features/dashboard/dashboardMetrics.api";

import { TrendingUpIcon } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

interface IExpenseSums {
	[category: string]: number;
}

const colors = ["#00C49F", "#0088FE", "#FFBB28"];

const CONTAINER_CLASSNAME =
	"row-span-3 bg-white shadow-md rounded-2xl flex flex-col justify-between" as const;

function ExpenseSummarySection() {
	const { data, isLoading, isError } = useGetDashboardMetricsQuery();

	if (isLoading) {
		return (
			<div className={CONTAINER_CLASSNAME}>
				<div className="m-5">Loading...</div>;
			</div>
		);
	}

	if (!data || isError) {
		return (
			<div className={CONTAINER_CLASSNAME}>
				<div className="m-5">Error fetching Purchase Summary data.</div>
			</div>
		);
	}

	const expenseSummary = data?.expenseSummary[0];
	const expenseByCategorySummary = data?.expenseByCategorySummary || [];

	const expenseSums = expenseByCategorySummary.reduce(
		(acc: IExpenseSums, item: IExpenseByCategorySummary) => {
			const category = item.category + " Expenses";
			const amount = parseInt(item.amount, 10);

			if (!acc[category]) acc[category] = 0;

			acc[category] += amount;
			return acc;
		},
		{},
	);

	const expenseCategories = Object.entries(expenseSums).map(
		([name, value]) => ({
			name,
			value,
		}),
	);

	const totalExpenses = expenseCategories.reduce(
		(acc, category: { value: number }) => acc + category.value,
		0,
	);
	const formattedTotalExpenses = totalExpenses.toFixed(2);

	return (
		<section className={CONTAINER_CLASSNAME}>
			{/* HEADER */}
			<div>
				<h2 className="text-lg font-semibold mb-2 px-7 pt-5">
					Expense Summary
				</h2>
				<hr />
			</div>

			{/* BODY */}
			<div className="block xl:flex justify-between pr-7">
				{/* CHART */}
				<div className="relative basis-3/5">
					<ResponsiveContainer
						width="100%"
						height={140}
					>
						<PieChart>
							<Pie
								data={expenseCategories}
								innerRadius={50}
								outerRadius={60}
								fill="#8884d8"
								dataKey="value"
								nameKey="name"
								cx="50%"
								cy="50%"
							>
								{expenseCategories.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={colors[index % colors.length]}
									/>
								))}
							</Pie>
						</PieChart>
					</ResponsiveContainer>

					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center basis-2/5">
						<span className="font-bold text-xl">${formattedTotalExpenses}</span>
					</div>
				</div>

				{/* LABELS */}
				<ul className="flex flex-col justify-around items-center xl:items-start py-5 gap-3">
					{expenseCategories.map((entry, index) => (
						<li
							key={`legend-${index}`}
							className="flex items-center text-xs"
						>
							<span
								className="mr-2 size-3 rounded-full"
								style={{ backgroundColor: colors[index % colors.length] }}
							/>

							{entry.name}
						</li>
					))}
				</ul>
			</div>

			{/* FOOTER */}
			<div>
				<hr />
				{expenseSummary && (
					<div className="mt-3 flex justify-between items-center px-7 mb-4">
						<div className="pt-2">
							<p className="text-sm">
								Average:{" "}
								<span className="font-semibold">
									${expenseSummary.totalExpenses.toFixed(2)}
								</span>
							</p>
						</div>

						<span className="flex items-center mt-2">
							<TrendingUpIcon className="mr-2 text-green-500" />
							30%
						</span>
					</div>
				)}
			</div>
		</section>
	);
}
export default ExpenseSummarySection;
