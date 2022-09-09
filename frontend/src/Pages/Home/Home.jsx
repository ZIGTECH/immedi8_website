import React from "react";
import { About } from "../../components/About/About";
import { Contact } from "../../components/Contact/Contact";
import { Footer } from "../../components/Footer/Footer";
import Maps from "../../components/GoogleMaps/Maps";
import Header from "../../components/Header/Header";
import { Highlight } from "../../components/Highhight/Highlight";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { Policy } from "../../components/Policy/Policy";
import { Products } from "../../components/Products/Products";
import { Regulators } from "../../components/Regulators/Regulators";
import { Services } from "../../components/Services/Services";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { Choose } from "../../components/WhyUs/Choose";
import { Banner } from "../../components/Banner/Banner";
import MessengerCustomerChat from "react-messenger-customer-chat";

const serviceStyle = {
	background: "#222121",
};
const highlightStyle = {
	background: "#eef4ed",
};

const contactStyle = {
	background: "#1c1b1b",
};

export const Home = () => {
	return (
		<div className="">
			<MessengerCustomerChat
				pageId="100085349928742"
				appId="490753355830260"
			/>

			<Header />
			<section>
				<Banner />
			</section>
			<section className="bg-slate-200">
				<Highlight />
			</section>
			<section className="container mx-auto mt-10 md:mt-20">
				<About />
			</section>
			<section style={serviceStyle} className="mt-10 md:mt-20">
				<Services />
			</section>
			{/* <section>
				<Products />
			</section> */}
			<section className="bg-slate-200">
				<Choose />
			</section>
			<section className="mt-10 md:mt-20">
				<Testimonials />
			</section>
			<section style={contactStyle}>
				<Contact />
			</section>
			<section className="">
				<Maps />
			</section>
			<section
				className="border"
				style={{
					backgroundColor: "#f1f3f4",
				}}>
				<Regulators />
			</section>
			<section>
				<Policy />
			</section>
			<section>
				<Footer />
			</section>
		</div>
	);
};
