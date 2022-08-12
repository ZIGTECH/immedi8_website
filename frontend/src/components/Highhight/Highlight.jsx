import React from "react";

const style = {
	background: "white",
	// border: "1px solid #222121",
};

export const Highlight = () => {
	const data = [
		{
			id: 1,
			title: "E-Commerce and FinTech",
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
			title: "Money Transfer Business",
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
			title: "International Remittance",
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
			title: "Foreign Exchange",
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
			<div className="container mx-auto p-32">
				<div
					className="grid grid-cols-4 gap-10"
					data-aos="fade-up"
					data-aos-duration="3000">
					{data.map((data, i) => (
						<>
							<div
								style={style}
								key={i}
								className="shadow-2xl w-full h-80 p-10 mt-14 group cursor-pointer ">
								<div className="group-hover:animate-pulse transition duration-500 ease-in w-20 mb-5 shaodw-2xl border rounded-[50%] bg-slate-300 items-center">
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
		</>
	);
};
