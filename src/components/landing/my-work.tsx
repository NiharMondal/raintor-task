import { workProcess } from "@/dummyData";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import SectionIndicator from "../shared/section-indicator";

export default function MyWork() {
	return (
		<section className=" lg:p-5" data-aos="fade-up">
			<div className="p-5 md:p-10 lg:p-20 bg-black rounded-2xl">
				<div className="flex items-center gap-5 gap-x-10">
					<SectionIndicator label="Work process" dark={true} />

					<h2 className=" text-white text-center">My Work Process</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
					{workProcess.map((process, index) => (
						<div
							key={index}
							data-aos="fade-up"
							data-aos-delay={index * 50}
						>
							<div className="p-3 lg:p-8 bg-gray-800 rounded-2xl hover:rotate-3 origin-center group hover:bg-primary  transition duration-200">
								<div className="flex items-center justify-between ">
									<span className="bg-secondary px-5 py-1 rounded-full text-xl capitalize group-hover:bg-black group-hover:text-white dark:text-black dark:group-hover:text-white">
										{process.label}
									</span>
									<Link
										href={process.link}
										className="inline-flex gap-x-1.5 text-white group-hover:text-black"
									>
										<MoveRight />
										<span className="underline">
											Read More
										</span>
									</Link>
								</div>
								<p className=" text-white mt-8 group-hover:text-[#141414]">
									{process.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
