"use client";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import SectionIndicator from "../shared/section-indicator";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Skills() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [swiperInstance, setSwiperInstance] = useState<any>(null);
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleSlideChange = (swiper: any) => {
		setIsBeginning(swiper.isBeginning);
		setIsEnd(swiper.isEnd);
	};

	return (
		<section className="lg:px-5" data-aos="fade-up">
			<div className="bg-black rounded-3xl p-5 md:p-10 lg:p-16 text-white space-y-5 relative">
				<SectionIndicator label="Why Choose me" dark={true} />
				<div className="relative">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<h2>
							My Extensive <br /> List of Skills
						</h2>
						<div className="lg:text-right text-gray-400">
							<span className="text-lg pb-4 border-b border-gray-700">
								Building the world’s best marketing. Your
								<br />
								trusted partner for strategy, design, and dev.
							</span>
						</div>
					</div>
					<div className="flex items-center justify-end gap-x-3 ">
						<ArrowLeftCircle
							size={48}
							onClick={() => swiperInstance?.slidePrev()}
							className={`cursor-pointer transition ${
								isBeginning
									? "opacity-30 cursor-not-allowed"
									: "hover:opacity-80"
							}`}
						/>
						<ArrowRightCircle
							size={48}
							onClick={() => swiperInstance?.slideNext()}
							className={`cursor-pointer transition ${
								isEnd
									? "opacity-30 cursor-not-allowed"
									: "hover:opacity-80"
							}`}
						/>
					</div>
				</div>
				<div className="mt-16">
					<Swiper
						spaceBetween={50}
						slidesPerView={3}
						onSlideChange={handleSlideChange}
						onSwiper={(swiper) => {
							setSwiperInstance(swiper);
							setIsBeginning(swiper.isBeginning);
							setIsEnd(swiper.isEnd);
						}}
					>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
							<SwiperSlide key={index}>
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
										Duis aute irure dolor in reprehenderit
										in voluptate. Ut enim ad minim veniam,
										quis
									</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}
