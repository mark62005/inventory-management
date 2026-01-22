import { type IProduct } from "@/features/products/products.type";

import { ShoppingBagIcon } from "lucide-react";
import Rating from "../Rating";

interface PopularProductItemProps {
	product: IProduct;
}

function PopularProductItem({ product }: PopularProductItemProps) {
	const { name, price, rating, stockQuantity } = product;

	return (
		<div className="flex items-center justify-between gap-3 px-5 py-7 border-b">
			<div className="flex items-center gap-3">
				<div>img</div>

				<div className="flex flex-col justify-between gap-1">
					<div className="font-bold text-gray-700">{name}</div>

					<div className="flex text-sm items-center">
						<span className="font-bold text-xs text-blue-500">${price}</span>

						<span className="mx-2">|</span>

						<Rating rating={rating || 0} />
					</div>
				</div>
			</div>

			<div className="text-xs flex items-center">
				<button className="p-2 rounded-full bg-blue-100 text-blue-600 mr-2">
					<ShoppingBagIcon className="size-4" />
				</button>
				{Math.round(stockQuantity / 1000)}k Sold
			</div>
		</div>
	);
}
export default PopularProductItem;
