import {
	CheckCircleIcon,
	PackageIcon,
	TagIcon,
	TrendingDownIcon,
	TrendingUpIcon,
} from "lucide-react";
import ExpenseSummarySection from "@/features/dashboard/components/ExpenseSummarySection";
import PopularProductList from "@/features/dashboard/components/PopularProductList";
import PurchaseSummarySection from "@/features/dashboard/components/PurchaseSummarySection";
import SalesSummarySection from "@/features/dashboard/components/SalesSummarySection";
import StatCard from "@/features/dashboard/components/StatCard";

function Dashboard() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 grid-rows-dashboard xl:grid-rows-dashboard">
			<PopularProductList />
			<SalesSummarySection />
			<PurchaseSummarySection />
			<ExpenseSummarySection />
			<StatCard
				title="Customer & Expenses"
				PrimaryIcon={<PackageIcon className="text-blue-600 w-6 h-6" />}
				dateRange="22 - 29 October 2023"
				details={[
					{
						title: "Customer Growth",
						amount: "175.00",
						changePercentage: 131,
						Icon: TrendingUpIcon,
					},
					{
						title: "Expenses",
						amount: "10.00",
						changePercentage: -56,
						Icon: TrendingDownIcon,
					},
				]}
			/>
			<StatCard
				title="Dues & Pending Orders"
				PrimaryIcon={<CheckCircleIcon className="text-blue-600 w-6 h-6" />}
				dateRange="22 - 29 October 2023"
				details={[
					{
						title: "Dues",
						amount: "250.00",
						changePercentage: 131,
						Icon: TrendingUpIcon,
					},
					{
						title: "Pending Orders",
						amount: "147",
						changePercentage: -56,
						Icon: TrendingDownIcon,
					},
				]}
			/>
			<StatCard
				title="Sales & Discount"
				PrimaryIcon={<TagIcon className="text-blue-600 w-6 h-6" />}
				dateRange="22 - 29 October 2023"
				details={[
					{
						title: "Sales",
						amount: "1000.00",
						changePercentage: 20,
						Icon: TrendingUpIcon,
					},
					{
						title: "Discount",
						amount: "200.00",
						changePercentage: -10,
						Icon: TrendingDownIcon,
					},
				]}
			/>
		</div>
	);
}
export default Dashboard;
