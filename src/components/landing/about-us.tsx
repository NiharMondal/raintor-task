import Container from "../Container";
import SectionIndicator from "../shared/section-indicator";
import { companies } from "@/dummyData";

export default function AboutUs() {
	return (
		<Container className="pt-20 about_us">
			<SectionIndicator label="About" className="justify-end" />
			<div className="text-center font-grotesk mt-10">
				<h2 data-aos="fade-up">
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
				<p className="text-lg mt-2" data-aos="fade-up">
					We start every new client interaction with an in-depth
					discovery call where we get <br /> to know each other and
					recommend the best course of action.
				</p>
			</div>

			<div className="lg:flex items-center gap-5 mt-20 py-5 mb-10 lg:mb-0">
				<p className="uppercase text-[26px] font-bold leading-[29px]">
					Previously <br /> worked on
				</p>
				<div className="relative flex-1 w-full mt-3 lg:mt-0">
					{companies.map((logo, i) => (
						<div
							key={i}
							className="absolute rounded-full px-4 py-2 text-black border font-semibold hover:bg-black hover:text-white"
							style={{
								top: `${Math.random() * 100}%`,
								left: `${Math.random() * 80}%`,

								transform: `rotate(${
									Math.random() * 40 - 20
								}deg)`,
							}}
						>
							{logo}
						</div>
					))}
				</div>
			</div>
		</Container>
	);
}
