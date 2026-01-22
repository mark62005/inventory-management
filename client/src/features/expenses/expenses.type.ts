/* SUMMARIES */
export interface IExpenseSummary {
	id: string;
	totalExpenses: number;
	changePercentage?: number;
	date: string;
}

export interface IExpenseByCategorySummary {
	id: string;
	category: string;
	amount: string;
	date: string;
}
