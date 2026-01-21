import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/root";

/* REDUX STORE */
export function makeStore() {
	return configureStore({
		reducer: rootReducer,
		middleware(getDefaultMiddleware) {
			return getDefaultMiddleware();
			// .concat(api.middleware),}
		},
	});
}

/* REDUX TYPES */
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
