import { type PayloadAction } from "@reduxjs/toolkit";
import { type RootState } from "..";

import { createSlice } from "@reduxjs/toolkit";

interface GlobalSliceState {
	testValue: number;
}

const initialState: GlobalSliceState = {
	testValue: 0,
};

export const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		increment: (state) => {
			state.testValue += 1;
		},
	},
});

export const { increment } = globalSlice.actions;

/* SELECTORS */
export const selectCount = (state: RootState) => state.global.testValue;

export default globalSlice.reducer;
