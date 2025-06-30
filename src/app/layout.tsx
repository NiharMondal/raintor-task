import type { Metadata } from "next";
import { EB_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import "swiper/css";

import Footer from "@/components/shared/footer";
import AOSInit from "@/components/AOSInit";
import ThemeProvider from "@/providers/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
	variable: "--font-eb-garamond",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Raintor Portfolio",
	description: "Raintor is a renowned company, based in Bangladesh",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${spaceGrotesk.variable} ${ebGaramond.variable} antialiased`}
			>
				<ThemeProvider>
					{children}
					<Footer />
					<AOSInit />
				</ThemeProvider>
			</body>
		</html>
	);
}
