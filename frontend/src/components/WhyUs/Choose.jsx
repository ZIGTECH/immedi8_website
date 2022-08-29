import React from "react";

const style = {
	background: "white",
	// border: "1px solid #222121",
};

export const Choose = () => {
	const data = [
		{
			id: 1,
			title: "Reliable Transaction ",
			content: "We Can Deposit in to Over 1,000 Banks Around The World",
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
						d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
			),
		},
		{
			id: 2,
			title: "Instant Cash Out",
			content:
				"We Provide Payments to our mobile Wallet and in to our  Integrated E-Wallet Partners.",
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
						d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
					/>
				</svg>
			),
		},
		{
			id: 3,
			title: "Secure Payment Solution",
			content: "Highly Encrypted Payment Solution",
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
						d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
			),
		},
		{
			id: 3,
			title: "Real Time Money Tracking",
			content: "Fast Cash Pickup from our Large Network of Locations",
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
						d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
			),
		},
		{
			id: 3,
			title: "Extreme Low Rates",
			content: "Fast Cash Pickup from our Large Network of Locations",
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
						d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
			),
		},
		{
			id: 3,
			title: "Real Time Money Tracking",
			content: "Fast Cash Pickup from our Large Network of Locations",
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
						d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
			),
		},
	];
	return (
		<>
			<div className="container mx-auto ">
				<div className="p-32 pt-32">
					<p className="text-5xl text-blue-700 mb-5 text-center">
						Why Choose Us
					</p>
					<div className="text-center">
						<h2 className="font-bold">
							We Ensure Best and Easy Financial Service <br /> For
							Our Client.
						</h2>
					</div>
					<div
						className="grid grid-cols-3 gap-10"
						data-aos="fade-up"
						data-aos-duration="3000">
						{data.map((data, i) => (
							<>
								<div
									style={style}
									key={i}
									className="shadow-2xl w-full h-80 p-10 mt-14 group cursor-pointer ">
									<div className="group-hover:animate-bounce transition duration-500 ease-in w-20 mb-5 shaodw-2xl border rounded-[50%] bg-slate-300 items-center">
										<p
											className=""
											data-aos="fade-down"
											data-aos-duration="3000">
											{data.icon}
										</p>
									</div>
									<p className="text-xl font-extrabold mb-3 group-hover:text-blue-700">
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
			</div>
		</>
	);
};
