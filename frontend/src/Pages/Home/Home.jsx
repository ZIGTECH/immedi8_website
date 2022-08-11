import React from "react";
import { About } from "../../components/About/About";
import Header from "../../components/Header/Header";
import { Services } from "../../components/Services/Services";

const serviceStyle = {
	background: "#222121",
};

export const Home = () => {
	return (
		<div className="">
			<Header />

			<section className="container mx-auto mt-20">
				<About />
			</section>

			<section style={serviceStyle} className="mt-20">
				<Services />
			</section>
		</div>
	);
};
