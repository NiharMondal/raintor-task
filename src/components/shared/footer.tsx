import React from "react";

export default function Footer() {
	return (
		<footer className="md:px-2 lg:px-5">
			<div className="bg-black text-white p-3 md:p-5 lg:p-16 rounded-2xl ">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					<div className="col-span-full lg:col-span-1">
						<span className="uppercase font-extrabold text-[34px] text-primary font-garamond">
							devlop.me
						</span>
					</div>
					<div className="col-span-full lg:col-span-2">
						<h3>As You Can</h3>
						<div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-10">
							<div>
								<p className="text-gray-500 tracking-wider font-semibold">
									Say Hello
								</p>
								<ul className="mt-3 text-gray-200 uppercase">
									<li>HELLO@DEVLOP.ME.COM</li>
									<li>MAHBUBUL@ME.COM</li>
								</ul>
							</div>
							<div>
								<p className="text-gray-500 tracking-wider font-semibold">
									Menu
								</p>
								<ul className="mt-3 text-gray-200 uppercase">
									<li>Home</li>
									<li>About</li>
									<li>Portfolio</li>
									<li>Blog</li>
								</ul>
							</div>
							<div>
								<p className="text-gray-500 tracking-wider font-semibold">
									Social
								</p>
								<ul className="mt-3 text-gray-200 uppercase">
									<li>Twitter</li>
									<li>instagram</li>
									<li>facebook</li>
									<li>behance</li>
									<li>dribble</li>
								</ul>
							</div>
							<div>
								<p className="text-gray-500 tracking-wider font-semibold">
									Call
								</p>
								<ul className="mt-3 text-gray-200 uppercase">
									<li>+784549 4981 00</li>
									<li>+8845 0100 211</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<ul className="grid grid-cols-3 mt-10 ">
					<li className="font-extrabold text-2xl uppercase">
						bensik
					</li>
					<li className="text-sm text-gray-500 text-center">
						© devlop.me 2022
					</li>
					<li className=" text-gray-500 text-right">
						PRIVACY - TERMS
					</li>
				</ul>
			</div>
		</footer>
	);
}
