import { type WithChildrenProps } from "@/types/react";

import StoreProvider from "@/store/provider";

function AppProviders({ children }: WithChildrenProps) {
	return <StoreProvider>{children}</StoreProvider>;
}
export default AppProviders;
