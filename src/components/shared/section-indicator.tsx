import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import React from "react";

type SectionIndicatorProps = {
	label: string;
	className?: string;
	dark?: boolean;
};

export default function SectionIndicator({
	className,
	label,
	dark,
}: SectionIndicatorProps) {
	return (
		<div className={cn(className, "flex items-center")}>
			<ArrowDown
				className={`border rounded-full p-1 ${
					dark ? "border-white text-white" : "border-black text-black"
				}`}
				size={28}
			/>
			<span
				className={`px-2 py-1 border  rounded-full ${
					dark ? "border-white text-white" : "border-black text-black"
				}`}
			>
				{label}
			</span>
		</div>
	);
}
