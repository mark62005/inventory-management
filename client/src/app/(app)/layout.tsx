"use client";

import { type WithChildrenProps } from "@/types/react";

import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/store/hooks";
import {
	selectIsDarkMode,
	selectIsSidebarCollapsed,
} from "@/features/ui/ui.slice";

import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/nav-bar/Navbar";

function DashboardLayout({ children }: WithChildrenProps) {
	const isDarkMode = useAppSelector(selectIsDarkMode);
	const isSidebarCollapsed = useAppSelector(selectIsSidebarCollapsed);

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("theme-dark");
		} else {
			document.documentElement.classList.add("theme-white");
		}
	});

	return (
		<div
			className={cn(
				"flex bg-background text-foreground w-full min-h-screen",
				isDarkMode ? "theme-dark" : "theme-light",
			)}
		>
			<Sidebar />

			<main
				className={cn(
					"flex flex-col w-full h-full py-3 px-9 bg-background",
					isSidebarCollapsed ? "md:pl-24" : "md:pl-72",
				)}
			>
				<Navbar />
				{children}
			</main>
		</div>
	);
}
export default DashboardLayout;
