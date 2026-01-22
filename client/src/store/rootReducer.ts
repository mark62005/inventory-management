import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./api";
import uiReducer from "@/features/ui/ui.slice";

export const rootReducer = combineReducers({
	ui: uiReducer,
	[baseApi.reducerPath]: baseApi.reducer,
});
