import React from "react";
import Container from "../Container";

import SectionIntegator from "../shared/section-integator";

export default function AboutUs() {
	return (
		<Container className="py-24 about_us">
			<SectionIntegator label="About" className="justify-end" />
			<div className="text-center font-grotesk mt-10">
				<h2>
					I’ve been{" "}
					<span className="px-2 bg-black text-white rounded-md">
						Developing
					</span>
					<br />
					Websites since{" "}
					<span className="px-2 bg-black text-white rounded-md">
						2013
					</span>
				</h2>
				<p className="text-lg mt-2">
					We start every new client interaction with an in-depth
					discovery call where we get <br /> to know each other and
					recommend the best course of action.
				</p>
			</div>

			<div className="flex items-center gap-5 mt-20">
				<p className="uppercase text-[26px] font-bold leading-[29px]">
					Previously <br /> worked on
				</p>
				<div>fallen items from top</div>
			</div>
		</Container>
	);
}
