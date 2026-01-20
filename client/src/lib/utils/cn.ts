import { type ClassValue } from "clsx";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge and allow dynamic tailwindcss class names
 *
 * @param inputs
 * @returns merged tailwindcss class names
 */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}
