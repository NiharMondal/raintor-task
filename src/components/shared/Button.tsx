import { cn } from "@/lib/utils";
import React from "react";
type ButtonProps = {
	className?: string;
	children: React.ReactNode;
};
export default function Button({ className, children }: ButtonProps) {
	return (
		<button
			className={cn(
				className,
				"inline-flex items-center gap-x-2 border py-2 pr-2 rounded-full font-medium"
			)}
		>
			{children}
		</button>
	);
}
