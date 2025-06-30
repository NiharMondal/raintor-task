import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string;
	children: React.ReactNode;
};

export default function Button({ className, children, ...props }: ButtonProps) {
	return (
		<button
			className={cn(
				"relative overflow-hidden inline-flex items-center gap-x-2 border py-2 pr-2 rounded-full font-medium cursor-pointer hover",
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
}
