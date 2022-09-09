import React, { useEffect } from "react";
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
	bank,
} from "../../assets/main";

const style = {
	background: "#2f2f2f",
	// border: "1px solid #222121",
};

export const Services = () => {
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

	const data = [
		{
			id: 3,
			title: "Mobile-Wallet (I-Wallet)",
			content:
				"Our mobile wallet solution facilitates E-money transactions and movement of funds into out integrated E-wallet partners, Banks and other finaancial institutions. ",
			icon: iwallet,
		},

		{
			id: 4,
			title: "Micro Lending (I-Loan)",
			content:
				"Our new micro lending and quick loan services provides comfort and relief financial pressure from our clients and their families, Easy, Quick and fast decisions. (currently in Africa only)",
			icon: iloan,
		},
		{
			id: 5,
			title: "BNPL - Buy Now / Pay Later (I-Lease)",
			content:
				"Buy now pay later (BNPL) is available on our lending platform providing our customers the ability to purchase product and services now and pay at a later date. I.E Our smartphone finance (Africa)",
			icon: ilease,
		},
		{
			id: 6,
			title: "Currency Dealings (I-Fx)",
			content:
				"Our I-FX trading platform provides on the spots online Foreign currency buying or hedgings portfolio for our clientelle. ",
			icon: ifx,
		},
		{
			id: 7,
			title: "Mobile Top-Ups (I-TopUp)",
			content:
				"Our I-TopUp, mobile credit and data purchasing platform enable clients to purchase their choosen mobile service provider's data and mobile credit.",
			icon: itop,
		},
		{
			id: 8,
			title: "Electricity Purchase (I-Power)",
			content:
				"Our electricity buying platform avails both prepaid and postpaid electricity purchasing functionality for our clients and the services is been rendered in several countries. (Africa) ",
			icon: ipower,
		},
	];

	const data2 = [
		{
			id: 1,
			title: "Bank Deposit (Online)",
			content: "We Can Deposit in to Over 1,000 Banks Around The World",
			icon: bank,
		},
		{
			id: 1,
			title: "Payment Service",
			content:
				"We are a World Wide payment service providing leverage and electronic money transfer services",
			icon: paymentService,
		},
		{
			id: 2,
			title: "Cash Collection",
			content: "Fast Cash Pickup from our Large Network of Locations",
			icon: cashCollection,
		},
	];

	return (
		<>
			<div
				className="container mx-auto text-white p-10 lg:p-32 lg:pt-20 lg:pb-20"
				id="service">
				<p
					className="text-center lg:text-start text-2xl text-blue-700 mb-3 md:mb-5 "
					data-aos="zoom-in-down"
					data-aos-duration="3000">
					What We Do
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
							Our existence was borne out of the need to provide
							the needed, Affordable, Reliable and fast
							transaction delivery platform via which
							transactional needs and investment requirements are
							met both locally and internationally.
						</p>
					</div>
				</div>

				<div
					className="md:grid md:grid-cols-2 md:gap-10 md:mt-5 lg:grid-cols-3"
					data-aos="fade-up"
					data-aos-duration="3000">
					{data2.map((d, i) => (
						<>
							<div
								style={style}
								key={i}
								className="group h-[530px] shadow-2xl w-full lg:h-96 p-10 mt-8 md:mt-14 transition duration-500 ease-in-out transform sm:hover:scale-105 hover:z-50 hover:border hover:border-blue-800 rounded-lg cursor-pointer ">
								<div
									style={style}
									className="flex md:flex-none mx-auto w-32 rounded-full mb-5 shadow-2xl md:mx-0">
									<img
										src={d.icon}
										alt=""
										className="group-hover:transition ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-110 duration-300 w-full border h-32 rounded-full"
									/>
								</div>
								<p className="group-hover:text-slate-200 text-center md:text-start text-2xl font-extrabold mb-3">
									{d.title}
								</p>
								<p className="text-center md:text-justify text-xl">
									{d.content}
								</p>
							</div>
						</>
					))}
					{data.map((d, i) => (
						<>
							<div
								style={style}
								key={i}
								className="group shadow-2xl w-full h-[530px] p-10 mt-8 md:mt-14 transition duration-500 ease-in-out transform sm:hover:scale-105 hover:z-50 hover:border hover:border-blue-800 rounded-sm cursor-pointer ">
								<div
									style={style}
									className="flex mx-auto w-32 rounded-full mb-5 shadow-2xl md:flex-none md:mx-0">
									<img
										src={d.icon}
										alt=""
										className="group-hover:transition ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-110 duration-300 w-full  h-32 rounded-full"
									/>
								</div>
								<p className="group-hover:text-slate-200 text-center md:text-start text-2xl font-extrabold mb-3">
									{d.title}
								</p>
								<p className="text-center md:text-justify text-xl">
									{d.content}
								</p>
							</div>
						</>
					))}
				</div>
			</div>
		</>
	);
};
