import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import React from "react";
type SectionIntegatorProps = {
	label: string;
	className?: string;
};

export default function SectionIntegator({
	className,
	label,
}: SectionIntegatorProps) {
	return (
		<div className={cn(className, "flex items-center")}>
			<ArrowDown
				className="border border-black rounded-full p-1"
				size={28}
			/>
			<span className="px-2 py-1 border border-black rounded-full ">
				{label}
			</span>
		</div>
	);
}
