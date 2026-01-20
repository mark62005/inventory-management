"use client";

import { type GeneralLayoutProps } from "@/types/app/layout-props/GeneralLayoutProps";

import { cn } from "@/lib/utils";

import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/nav-bar/Navbar";

function DashboardLayout({ children }: GeneralLayoutProps) {
	const isDarkMode = false; // TODO: Change light and dark theme functionality
	const isSidebarCollapsed = false; // TODO: Check if sidebar is collapsed

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
