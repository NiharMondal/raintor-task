import { workProcess } from "@/dummyData";
import { ArrowDown, MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function MyWork() {
	return (
		<section className=" lg:p-5">
			<div className="p-5 md:p-10 lg:p-20 bg-black rounded-2xl">
				<div className="flex items-center gap-5 gap-x-10">
					<div className="flex items-center text-white">
						<ArrowDown
							className="border border-white rounded-full p-1"
							size={28}
						/>
						<span className="px-2 py-1 border border-white rounded-full ">
							Work Process
						</span>
					</div>

					<h2 className=" text-white text-center">My Work Process</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
					{workProcess.map((process, index) => (
						<div
							key={index}
							className="p-3 lg:p-8 rounded-2xl hover:rotate-3 origin-center group hover:bg-primary  transition duration-200"
						>
							<div className="flex items-center justify-between ">
								<span className="bg-secondary px-5 py-1 rounded-full text-xl capitalize group-hover:bg-black group-hover:text-white">
									{process.label}
								</span>
								<Link
									href={process.link}
									className="inline-flex gap-x-1.5 text-white group-hover:text-black"
								>
									<MoveRight />
									<span className="underline">Read More</span>
								</Link>
							</div>
							<p className=" text-white mt-8 group-hover:text-[#141414]">
								{process.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
