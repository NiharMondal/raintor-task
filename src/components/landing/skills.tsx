import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import SectionIndicator from "../shared/section-indicator";

export default function Skills() {
	return (
		<section className=" lg:px-5 " data-aos="fade-up">
			<div className=" bg-black rounded-3xl p-5  md:p-10 lg:p-16 text-white space-y-5 relative">
				<SectionIndicator label="Why Choose me" dark={true} />
				<div className=" relative">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<h2>
							My Extensive <br /> List of Skills
						</h2>
						<div className="lg:text-right text-gray-400">
							<span className="text-lg pb-4 border-b border-gray-700">
								Building the worlds best marketing Your
								<br />
								trusted partner for strategy, design, and dev.
							</span>
						</div>
					</div>
					<div className="flex items-center justify-end gap-x-3 absolute bottom-5 right-0">
						<ArrowLeftCircle size={48} />
						<ArrowRightCircle size={48} />
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
					{[1, 2, 3].map((_, index) => (
						<div
							key={index}
							data-aos="fade-up"
							data-aos-delay={index * 50}
						>
							<div className="p-5 sm:p-6 md:p-8 bg-gray-800 rounded-xl space-y-2.5 md:space-y-4 hover:rotate-12 origin-center transition duration-300">
								<Image
									src={"/icons/react.svg"}
									width={100}
									height={100}
									alt="icon"
								/>
								<h3 className="font-bold text-[20px] md:text-[26px]">
									HTML & CSS
								</h3>
								<p>
									Duis aute irure dolor in reprehenderit in
									voluptate. Ut enim ad minim veniam, quis
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
