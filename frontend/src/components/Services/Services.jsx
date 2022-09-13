import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
	ifx,
	iwallet,
	iloan,
	ilease,
	ipower,
	itop,
	paymentService,
	cashCollection,
	bankLogo,
} from "../../assets/main";
import { ServiceBox } from "../ServiceBox/ServiceBox";
import { getServiceData } from "../../services/apiServices";

export const Services = () => {
	const [title, settitle] = useState([]);
	const [bank, setbank] = useState([]);
	const [payment, setpayment] = useState([]);
	const [cash, setcash] = useState([]);
	const [iwallets, setiwallets] = useState([]);
	const [iloans, setiloans] = useState([]);
	const [ileases, setileases] = useState([]);
	const [ifxx, setifxx] = useState([]);
	const [itops, setitops] = useState([]);
	const [ipowers, setipowers] = useState([]);

	// Get Services Data from Strapi
	const serviceData = async () => {
		const data = await getServiceData();
		// console.log(data.data);
		setbank(data.data[0].attributes);
		setpayment(data.data[1].attributes);
		setcash(data.data[2].attributes);
		setiwallets(data.data[3].attributes);
		setiloans(data.data[4].attributes);
		setileases(data.data[5].attributes);
		setifxx(data.data[6].attributes);
		setitops(data.data[7].attributes);
		setipowers(data.data[8].attributes);
		settitle(data.data[9].attributes);
	};

	useEffect(() => {
		serviceData();
	}, []);

	useEffect(() => {
		AOS.init({
			offset: 120,
			delay: 0,
			duration: 400,
			easing: "ease",
			once: false,
			mirror: false,
			anchorPlacement: "top-bottom",
		});
	}, []);

	return (
		<>
			<div
				className="container mx-auto text-white p-10 lg:p-32 lg:pt-20 lg:pb-20"
				id="service">
				<p
					className="text-center lg:text-start text-2xl text-blue-700 mb-3 md:mb-5 "
					data-aos="zoom-in-down"
					data-aos-duration="3000">
					{title?.title}
				</p>

				{/*  */}
				<div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
					<div
						className="text-center lg:text-start mb-5"
						data-aos="zoom-in-down"
						data-aos-duration="3000">
						<h2 className="font-bold">
							We Ensure Best Financial <br /> Service For Our
							Client.
						</h2>
					</div>

					{/*  */}
					<div data-aos="zoom-in-up" data-aos-duration="3000">
						<p className="text-justify  md:text-xl">
							{title?.content}
						</p>
					</div>
				</div>

				<div
					className="md:grid md:grid-cols-2 md:gap-10 md:mt-5 lg:grid-cols-3"
					data-aos="fade-up"
					data-aos-duration="3000">
					<ServiceBox
						icon={bankLogo}
						title={bank?.title}
						content={bank?.content}
					/>
					<ServiceBox
						icon={paymentService}
						title={payment?.title}
						content={payment?.content}
					/>
					<ServiceBox
						icon={cashCollection}
						title={cash?.title}
						content={cash?.content}
					/>
					<ServiceBox
						icon={iwallet}
						title={iwallets?.title}
						content={iwallets?.content}
					/>
					<ServiceBox
						icon={iloan}
						title={iloans?.title}
						content={iloans?.content}
					/>
					<ServiceBox
						icon={ilease}
						title={ileases?.title}
						content={ileases?.content}
					/>
					<ServiceBox
						icon={ifx}
						title={ifxx?.title}
						content={ifxx?.content}
					/>
					<ServiceBox
						icon={itop}
						title={itops?.title}
						content={itops?.content}
					/>
					<ServiceBox
						icon={ipower}
						title={ipowers?.title}
						content={ipowers?.content}
					/>
				</div>
			</div>
		</>
	);
};

// const data = [
// 	{
// 		id: 1,
// 		title: "Bank Deposit (Online)",
// 		content: "We Can Deposit in to Over 1,000 Banks Around The World",
// 		icon: bankLogo,
// 	},
// 	{
// 		id: 2,
// 		title: "Payment Service",
// 		content:
// 			"We are a World Wide payment service providing leverage and electronic money transfer services",
// 		icon: paymentService,
// 	},
// 	{
// 		id: 3,
// 		title: "Cash Collection",
// 		content: "Fast Cash Pickup from our Large Network of Locations",
// 		icon: cashCollection,
// 	},
// 	{
// 		id: 4,
// 		title: "Mobile-Wallet (I-Wallet)",
// 		content:
// 			"Our mobile wallet solution facilitates E-money transactions and movement of funds into out integrated E-wallet partners, Banks and other finaancial institutions. ",
// 		icon: iwallet,
// 	},

// 	{
// 		id: 5,
// 		title: "Micro Lending (I-Loan)",
// 		content:
// 			"Our new micro lending and quick loan services provides comfort and relief financial pressure from our clients and their families, Easy, Quick and fast decisions. (currently in Africa only)",
// 		icon: iloan,
// 	},
// 	{
// 		id: 6,
// 		title: "BNPL - Buy Now / Pay Later (I-Lease)",
// 		content:
// 			"Buy now pay later (BNPL) is available on our lending platform providing our customers the ability to purchase product and services now and pay at a later date. I.E Our smartphone finance (Africa)",
// 		icon: ilease,
// 	},
// 	{
// 		id: 7,
// 		title: "Currency Dealings (I-Fx)",
// 		content:
// 			"Our I-FX trading platform provides on the spots online Foreign currency buying or hedgings portfolio for our clientelle. ",
// 		icon: ifx,
// 	},
// 	{
// 		id: 8,
// 		title: "Mobile Top-Ups (I-TopUp)",
// 		content:
// 			"Our I-TopUp, mobile credit and data purchasing platform enable clients to purchase their choosen mobile service provider's data and mobile credit.",
// 		icon: itop,
// 	},
// 	{
// 		id: 9,
// 		title: "Electricity Purchase (I-Power)",
// 		content:
// 			"Our electricity buying platform avails both prepaid and postpaid electricity purchasing functionality for our clients and the services is been rendered in several countries. (Africa) ",
// 		icon: ipower,
// 	},
// ];
