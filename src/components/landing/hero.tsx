import React from "react";
import Container from "../Container";
import Navbar from "../Navbar";
import Button from "../shared/Button";
import { Phone } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
	return (
		<section className="hero">
			<Container>
				<Navbar />
				<div className="py-20">
					<h1 className="tracking-wider">
						Trusted{" "}
						<span className="bg-black text-white rounded-md px-2">
							Partner
						</span>{" "}
						for <br />
						Your Website{" "}
						<span className="bg-black text-white rounded-md px-2">
							Develop.
						</span>
					</h1>
					<div className=" max-w-xl mx-auto mt-10 lg:mt-20">
						<p>
							Building the worlds best marketing websites for over
							a decade. <br /> Your trusted partner for strategy,
							design, and dev.
						</p>
						<Button className="mt-3">
							<Phone
								className="border p-1 rounded-full"
								size={28}
							/>
							Schedule a call
						</Button>
					</div>
				</div>
			</Container>

			<div className="fixed -rotate-90 origin-center left-2 sm:left-10 md:left-16 bottom-28 bg-white p-2 rounded z-10">
				<p className="mb-2">@williamrey</p>
				<div className="flex items-center gap-x-3">
					<Image
						src={"/icons/facebook.svg"}
						width={20}
						height={20}
						alt="facebook"
						className="rotate-90"
					/>
					<Image
						src={"/icons/instagram.svg"}
						width={20}
						height={20}
						alt="facebook"
						className="rotate-90"
					/>
					<Image
						src={"/icons/twitter.svg"}
						width={20}
						height={20}
						alt="facebook"
						className="rotate-90"
					/>
				</div>
			</div>
		</section>
	);
}
