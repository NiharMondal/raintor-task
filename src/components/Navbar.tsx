"use client";
import React, { useState } from "react";
import Button from "./ui/Button";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./theme-switcher";

export default function Navbar() {
	const [mobile, setMobile] = useState(false);

	const toggleView = () => {
		setMobile((prev) => !prev);
	};
	return (
		<nav className="flex items-center justify-between h-[114px] overflow-hidden">
			<div className="md:hidden">
				<Menu onClick={toggleView} className="cursor-pointer" />

				{mobile && (
					<aside
						className="fixed top-0 left-0 h-screen w-[300px] shadow-2xl bg-primary z-20 "
						data-aos="fade-right"
					>
						<div className="relative h-full w-full">
							<X
								onClick={toggleView}
								className="absolute top-1 right-10 cursor-pointer dark:text-black"
							/>
							<ul className="space-y-4 p-10 mt-5 dark:text-black">
								<li>
									<Link href={"/"}> Home</Link>
								</li>
								<li>
									<Link href={"#"}> About</Link>
								</li>
								<li>
									<Link href={"#"}> Portfolio</Link>
								</li>
								<li>
									<Link href={"#"}> Blog</Link>
								</li>
								<Button className="custom_button hover:shadow-2xl">
									<ArrowRight className="border p-1 rounded-full" />
									Start Project
								</Button>
							</ul>
						</div>
					</aside>
				)}
			</div>
			<Link href={"/"}>
				<span className="uppercase font-extrabold text-[34px] font-garamond">
					develop.me
				</span>
			</Link>

			<ul className="hidden md:flex items-center gap-x-3 lg:gap-x-10  ">
				<li>
					<Link href={"/"}> Home</Link>
				</li>
				<li>
					<Link href={"#"}> About</Link>
				</li>
				<li>
					<Link href={"#"}> Portfolio</Link>
				</li>
				<li>
					<Link href={"#"}> Blog</Link>
				</li>
				<Button className="custom_button ">
					<ArrowRight className="border p-1 rounded-full" />
					Start Project
				</Button>
			</ul>
			<ThemeToggle />
		</nav>
	);
}
