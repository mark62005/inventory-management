"use client";

import { type WithChildrenProps } from "@/types/react";
import { type AppStore } from "@/store";

import { useRef } from "react";
import { setupListeners } from "@reduxjs/toolkit/query";
import { makeStore } from "@/store";

import { Provider } from "react-redux";

function StoreProvider({ children }: WithChildrenProps) {
	const storeRef = useRef<AppStore | null>(null);

	if (!storeRef.current) {
		storeRef.current = makeStore();
		setupListeners(storeRef.current.dispatch);
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
}
export default StoreProvider;
