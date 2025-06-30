import { cn } from "@/lib/utils";
import React from "react";
type CardProps = {
	children: React.ReactNode;
	className?: string;
};
export default function Card({ children, className }: CardProps) {
	return (
		<div
			className={cn(
				"p-5 sm:p-6 md:p-8 bg-gray-800 rounded-xl space-y-2.5 md:space-y-4 hover:rotate-6 origin-center transition duration-300",
				className
			)}
		>
			{children}
		</div>
	);
}
