import { type PayloadAction } from "@reduxjs/toolkit";
import { type RootState } from "@/store";

import { createSlice } from "@reduxjs/toolkit";

interface UiState {
	isDarkMode: boolean;
	isSidebarCollapsed: boolean;
}

const initialState: UiState = {
	isDarkMode: true,
	isSidebarCollapsed: true,
};

export const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		setIsDarkMode: (state, action: PayloadAction<boolean>) => {
			state.isDarkMode = action.payload;
		},
		setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
			state.isSidebarCollapsed = action.payload;
		},
	},
});

export const { setIsDarkMode, setIsSidebarCollapsed } = uiSlice.actions;

/* SELECTORS */
export function selectIsDarkMode(state: RootState): boolean {
	return state.ui.isDarkMode;
}

export function selectIsSidebarCollapsed(state: RootState): boolean {
	return state.ui.isSidebarCollapsed;
}

export default uiSlice.reducer;
