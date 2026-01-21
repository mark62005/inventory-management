import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "@/features/ui/ui.slice";
import { api } from "./api";

export const rootReducer = combineReducers({
	ui: uiReducer,
	[api.reducerPath]: api.reducer,
});
