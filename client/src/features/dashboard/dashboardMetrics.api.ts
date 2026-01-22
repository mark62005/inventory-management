import { type IDashboardMetrics } from "./dashboardMetrics";

import { baseApi } from "@/store/api";

export const dashboardApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		/**
		 * Fetch dashboard metrics from server
		 *
		 */
		getDashboardMetrics: builder.query<IDashboardMetrics, void>({
			query: () => "/dashboard",
			providesTags: ["DashboardMetrics"],
		}),
	}),
});

export const { useGetDashboardMetricsQuery } = dashboardApi;
