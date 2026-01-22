import {
	type IExpenseByCategorySummary,
	type IExpenseSummary,
} from "../expenses/expenses.type";
import { type IProduct } from "../products/products.type";
import { type IPurchaseSummary } from "../purchases/purchases.type";
import { type ISalesSummary } from "../sales/sales.type";

export interface IDashboardMetrics {
	popularProducts: IProduct[];
	salesSummary: ISalesSummary[];
	purchaseSummary: IPurchaseSummary[];
	expenseSummary: IExpenseSummary[];
	expenseByCategorySummary: IExpenseByCategorySummary[];
}
