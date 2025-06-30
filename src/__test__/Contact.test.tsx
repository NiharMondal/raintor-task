import React from "react";
import Contact from "@/components/landing/contact";
import { render, screen } from "@testing-library/react";

describe("Contact Component", () => {
	it("renders the contact form", () => {
		render(<Contact />);
		expect(screen.getByText(/interested in/i)).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText(/Enter your name/i)
		).toBeInTheDocument();
		expect(screen.getByText(/send/i)).toBeInTheDocument();
	});
});
