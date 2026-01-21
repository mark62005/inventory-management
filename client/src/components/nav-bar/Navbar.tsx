"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
	selectIsDarkMode,
	selectIsSidebarCollapsed,
	setIsDarkMode,
	setIsSidebarCollapsed,
} from "@/features/ui/ui.slice";

import Link from "next/link";
import { BellIcon, MenuIcon, SettingsIcon, SunIcon } from "lucide-react";

function Navbar() {
	const dispatch = useAppDispatch();
	const isDarkMode = useAppSelector(selectIsDarkMode);
	const isSidebarCollapsed = useAppSelector(selectIsSidebarCollapsed);

	function toggleSidebar() {
		dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
	}

	function toggleDarkMode() {
		dispatch(setIsDarkMode(!isDarkMode));
	}

	return (
		<div className="flex justify-between items-center w-full mb-7">
			{/* LEFT SIDE */}
			<div className="flex justify-between items-center gap-5">
				{/* TOGGLE SIDEBAR BUTTON */}
				<button
					className="p-3 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-100/70"
					onClick={toggleSidebar}
				>
					<MenuIcon className="size-4" />
				</button>

				{/* SEARCH BAR */}
				<div className="relative">
					<input
						type="search"
						placeholder="Start typing to search groups & products..."
						className="pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-background rounded-lg focus:outline-none focus:border-blue-500"
					/>

					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-non">
						<BellIcon className="size-4 text-gray-500" />
					</div>
				</div>
			</div>

			{/* RIGHT SIDE */}
			<div className="flex justify-between items-center gap-5">
				<div className="hidden md:flex justify-between items-center gap-5">
					{/* TOGGLE DARK MODE BUTTON */}
					<div>
						<button onClick={toggleDarkMode}>
							<SunIcon className="size-4 cursor-pointer text-gray-500" />
						</button>
					</div>

					{/*  */}
					<div className="relative">
						<BellIcon
							className="cursor-pointer text-gray-500"
							size={24}
						/>

						<span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
							3
						</span>
					</div>

					<hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />

					<div className="flex items-center gap-3 cursor-pointer">
						<div className="size-9">Image</div>
						<span className="font-semibold">markwongse</span>
					</div>
				</div>

				<Link href="/settings">
					<SettingsIcon className="cursor-pointer text-gray-500 size-4" />
				</Link>
			</div>
		</div>
	);
}
export default Navbar;
