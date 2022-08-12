import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
			id: 1,
			title: "Bank Deposit Online",
			content: "We Can Deposit in to Over 1,000 Banks Around The World",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-20 w-20 text-blue-700"
					fill="red"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={1}>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
			),
		},
		{
			id: 2,
			title: "Mobile-Money",
			content:
				"We Provide Payments to our mobile Wallet and in to our  Integrated E-Wallet Partners.",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-20 w-20 text-blue-700"
					fill="red"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={1}>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
					/>
				</svg>
			),
		},
		{
			id: 3,
			title: "Cash",
			content: "Fast Cash Pickup from our Large Network of Locations",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-20 w-20 text-blue-700"
					fill="red"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={1}>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
			),
		},
		{
			id: 4,
			title: "Payment Services",
			content:
				"Our E-Payment Solution and Integrated Serfvices, Offers Quick Online Payment for Goods& Services, Utility Bills, Mobile Top-Ups.",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-20 w-20 text-blue-700"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={1}>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
					/>
				</svg>
			),
		},
	];

	return (
		<>
			<div className="container mx-auto text-white p-32 pt-20 pb-20">
				<p className="text-2xl text-blue-700 mb-5 ">What We Do</p>

				{/*  */}
				<div className="grid grid-cols-2 gap-10 items-center">
					<div>
						<h2 className="font-bold">
							We Ensure Best Financial <br /> Service For Our
							Client.
						</h2>
					</div>

					{/*  */}
					<div>
						<p className="text-justify">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Neque accusantium veniam reiciendis facere rem
							aperiam quisquam ipsum in porro, optio debitis,
							deserunt repellat aliquid saepe, eius fuga dolorem!
							Iusto, necessitatibus!
						</p>
					</div>
				</div>

				<div
					className="grid grid-cols-4 gap-10 mt-20"
					data-aos="fade-up"
					data-aos-duration="3000">
					{data.map((data, i) => (
						<>
							<div
								style={style}
								key={i}
								className="shadow-2xl w-full h-96 p-10 mt-14 transition duration-500 ease-in-out transorm sm:hover:scale-105 hover:z-50 hover:border rounded-sm cursor-pointer ">
								<div
									style={style}
									className="w-20 mb-5 shaodw-2xl border rounded-[50%] items-center">
									<p
										className=""
										data-aos="fade-down"
										data-aos-duration="3000">
										{data.icon}
									</p>
								</div>
								<p className="text-xl font-extrabold mb-3">
									{data.title}
								</p>
								<span className="text-justify">
									{data.content}
								</span>
							</div>
						</>
					))}
				</div>
			</div>
		</>
	);
};
