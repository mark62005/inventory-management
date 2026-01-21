import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
	selectIsSidebarCollapsed,
	setIsSidebarCollapsed,
} from "@/features/ui/ui.slice";
import { cn } from "@/lib/utils";

import { MenuIcon } from "lucide-react";

function Sidebar() {
	const dispatch = useAppDispatch();
	const isSidebarCollapsed = useAppSelector(selectIsSidebarCollapsed);

	function toggleSidebar() {
		dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
	}

	return (
		<div
			className={cn(
				"fixed flex flex-col bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40",
				isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64",
			)}
		>
			{/* TOP LOGO */}
			<div
				className={cn(
					"flex gap-3 justify-between md:justify-normal items-center pt-8",
					isSidebarCollapsed ? "px-5" : "px-8",
				)}
			>
				{/* TODO: LOGO IMAGE */}
				<div>logo</div>
				<h1
					className={cn(
						"font-bold text-xl",
						isSidebarCollapsed ? "hidden" : "block",
					)}
				>
					MWSTOCK
				</h1>

				<button
					className="md:hidden p-3 bg-gray-100 rounded-full hover:bg-blue-100"
					onClick={toggleSidebar}
				>
					<MenuIcon className="size-4" />
				</button>
			</div>

			<div className="flex-1 mt-8">{/* TODO: SIDEBAR LINKS */}</div>

			{/* FOOTER */}
			<div className={cn("mb-10", isSidebarCollapsed ? "hidden" : "block")}>
				<p className="text-center text-xs text-gray-500">
					&copy; 2026 Mark Wong
				</p>
			</div>
		</div>
	);
}
export default Sidebar;
