import AboutUs from "@/components/landing/about-us";
import Contact from "@/components/landing/contact";
import HeroSection from "@/components/landing/hero";
import MyWork from "@/components/landing/my-work";
import Skills from "@/components/landing/skills";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<Skills />
			<AboutUs />
			<MyWork />
			<Contact />
		</main>
	);
}
