"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null; // Avoid hydration mismatch

	return (
		<button
			className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			{theme === "dark" ? (
				<Sun className="cursor-pointer" />
			) : (
				<Moon className="cursor-pointer" />
			)}
		</button>
	);
}
