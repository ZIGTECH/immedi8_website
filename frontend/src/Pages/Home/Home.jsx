import React from "react";
import { About } from "../../components/About/About";
import { Contact } from "../../components/Contact/Contact";
import { Footer } from "../../components/Footer/Footer";
import Maps from "../../components/GoogleMaps/Maps";
import Header from "../../components/Header/Header";
import { Highlight } from "../../components/Highhight/Highlight";
import { Policy } from "../../components/Policy/Policy";
import { Regulators } from "../../components/Regulators/Regulators";
import { Services } from "../../components/Services/Services";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { DownloadApp } from "../../components/DownloadApp/DownloadApp";
import { Choose } from "../../components/WhyUs/Choose";
import { Banner } from "../../components/Banner/Banner";
import logo from "../../assets/images/logo.png";
import MessengerCustomerChat from "react-messenger-customer-chat";
import FloatingWhatsApp from "react-floating-whatsapp";

const serviceStyle = {
	// background: "#222121",
	background: "linear-gradient(90deg, #1CB5E0 0 %, #000851 100 %)"


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
			{/* Facebook Messenger */}
			{/* <MessengerCustomerChat
				pageId="100085349928742"
				appId="490753355830260"
			/> */}

			{/* Whatsapp messenger chat */}
			<FloatingWhatsApp
				phoneNumber={process.env.WHATSAPP_NUMBER}
				accountName="Immedi8 Finance"
				avatar={logo}
				chatMessage="Hello Dear, Thank you for contacting Immedi8 Finance. How can we help you?"
				allowClickAway="true"
				allowEsc="true"
				height={500}
				className="relative z-50"
			/>

			<Header />
			{/* <section>
				<Banner />
			</section> */}
			<section className="bg-slate-100">
				<Highlight />
			</section>
			<section className="container mx-auto mt-10 md:mt-20">
				<About />
			</section>
			<section className="mt-10 bg-slate-100 md:mt-20">
				<Services />
			</section>
			{/* style={{ background: `linear-gradient(90deg, #1CB5E0 0%, #000851 100%)` }} */}

			{/* <section>
				<Products />
			</section> */}
			<section className="">
				<Choose />
			</section>
			<section className="mt-10 bg-slate-100 md:mt-20">
				<Testimonials />
			</section>
			<section style={contactStyle}>
				<Contact />
			</section>
			<section className="">
				<Maps />
			</section>
			<section
				className="border mt-10">
				<Regulators />
			</section>
			<section>
				<Policy />
			</section>
			<section>
				<DownloadApp />
			</section>
			<section>
				<Footer />
			</section>

			<script
				src="https://apps.elfsight.com/p/platform.js"
				defer></script>
			<div class="elfsight-app-6adb5a65-d536-4072-969d-9f09412fb95d"></div>
		</div>
	);
};
