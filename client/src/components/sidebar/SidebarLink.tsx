import { type LucideIcon } from "lucide-react";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import Link from "next/link";

export interface SidebarNavLink {
	href: string;
	Icon: LucideIcon;
	label: string;
}

interface SidebarLinkProps {
	link: SidebarNavLink;
	isCollapsed: boolean;
}

function SidebarLink({ link, isCollapsed }: SidebarLinkProps) {
	const { href, label, Icon } = link;

	const pathname = usePathname();
	const isActive =
		pathname === href || (pathname === "/" && href === "/dashboard");

	return (
		<Link href={href}>
			<div
				className={cn(
					"flex items-center gap-3 py-3 cursor-pointer hover:text-blue-500 hover:bg-blue-100 transition-colors ",
					isCollapsed ? "justify-center" : "justify-start px-8",
					isActive ? "bg-blue-200 text-white" : "",
				)}
			>
				<Icon className="size-4 text-gray-700!" />

				<span
					className={cn(
						"font-medium text-gray-700",
						isCollapsed ? "hidden" : "block",
					)}
				>
					{label}
				</span>
			</div>
		</Link>
	);
}
export default SidebarLink;
