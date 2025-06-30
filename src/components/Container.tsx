import { cn } from "@/lib/utils";
import React from "react";
type ContainerProps = {
	children: Readonly<React.ReactNode>;
	className?: string;
};
export default function Container({ children, className }: ContainerProps) {
	return (
		<section className={cn(className, "c_container")}>{children}</section>
	);
}
