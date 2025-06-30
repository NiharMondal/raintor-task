import { Mail, Phone, Send } from "lucide-react";
import React from "react";
import Button from "../shared/Button";
import Image from "next/image";
import SectionIndicator from "../shared/section-indicator";

export default function Contact() {
	return (
		<section className="contact_us py-20 overflow-hidden">
			<div className="px-2 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  ">
				<div
					className="col-span-full lg:col-span-2 h-auto"
					data-aos="fade-right"
				>
					<SectionIndicator label="Contact" />

					<div className="mt-5">
						<h2 className="">
							Interested in <br />{" "}
							<span className="h_span">work</span> together?
						</h2>
						<p className="my-5 text-lg">
							We start every new client interaction with an
							in-depth discovery call where we get to know each
							other
						</p>

						<Button>
							<Phone
								className="border p-1 rounded-full"
								size={28}
							/>
							Schedule a Call
						</Button>
					</div>
				</div>

				<div className="bg-black rounded-2xl p-8 " data-aos="fade-left">
					<form className="space-y-8">
						<input type="text" placeholder="Enter your name" />
						<input type="text" placeholder="Your email address" />
						<input
							type="text"
							placeholder="Describe your project"
						/>
						<div className="flex items-center gap-x-2 text-white">
							<Button>
								<Send className="border border-white p-1 rounded-full" />
								Send
							</Button>
							or
							<Button>
								<Mail className="border border-white p-1 rounded-full" />
								Contact me
							</Button>
						</div>
					</form>

					<div className="flex items-center gap-x-5 lg:gap-x-16 mt-8">
						<span className="text-gray-300">@williamrey</span>
						<div className="flex items-center gap-x-3">
							<Image
								src={"/icons/facebook-white.svg"}
								width={20}
								height={20}
								alt="facebook"
							/>
							<Image
								src={"/icons/instagram-white.svg"}
								width={20}
								height={20}
								alt="instagram"
							/>
							<Image
								src={"/icons/twitter-white.svg"}
								width={20}
								height={20}
								alt="twitter"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
