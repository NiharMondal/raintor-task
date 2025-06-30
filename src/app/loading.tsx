"use client";
import { Loader } from "lucide-react";
import React from "react";

export default function AppLoading() {
	return (
		<div className="flex items-center justify-center h-screen bg-black">
			<div className="flex flex-col items-center space-y-4">
				<Loader className="w-12 h-12 text-white animate-spin" />
				<p className="text-white text-lg font-medium animate-pulse">
					Loading...
				</p>
			</div>
		</div>
	);
}
