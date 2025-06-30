import React from "react";
import Button from "./shared/Button";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between h-[114px]">
			<span className="uppercase font-extrabold text-[34px] font-garamond">
				develop.me
			</span>
			<ul className="hidden md:flex items-center gap-x-10 ">
				<li>Home</li>
				<li>About</li>
				<li>Portfolio</li>
				<li>Blog</li>
				<Button>
					<ArrowRight className="border p-1 rounded-full" />
					Start Project
				</Button>
			</ul>
			<div className="md:hidden">
				<Button>
					<ArrowRight className="border p-1 rounded-full" />
					Start Project
				</Button>
			</div>
		</nav>
	);
}
