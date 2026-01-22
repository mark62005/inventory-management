"use client";

import { useGetDashboardMetricsQuery } from "../../dashboardMetrics.api";
import PopularProductItem from "./PopularProductItem";

const CONTAINER_CLASSNAME =
	"row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16" as const;

function PopularProductList() {
	const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

	if (isLoading) {
		return (
			<div className={CONTAINER_CLASSNAME}>
				<div className="m-5">Loading...</div>;
			</div>
		);
	}

	return (
		<div className={CONTAINER_CLASSNAME}>
			{/* TITLE */}
			<h3 className="text-lg font-semibold px-7 pt-5 pb-2">Popular Products</h3>
			<hr />

			<div className="overflow-auto h-full">
				{dashboardMetrics?.popularProducts.map((product) => (
					<PopularProductItem
						key={product.id}
						product={product}
					/>
				))}
			</div>
		</div>
	);
}
export default PopularProductList;
