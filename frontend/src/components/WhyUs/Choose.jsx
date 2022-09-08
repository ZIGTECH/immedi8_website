import React from "react";
import {
	payment,
	rates,
	realtime,
	reliable,
	instantcash,
} from "../../assets/main";

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
			icon: reliable,
		},
		{
			id: 2,
			title: "Instant Cash Out",
			content:
				"We Provide Payments to our mobile Wallet and in to our  Integrated E-Wallet Partners.",
			icon: instantcash,
		},
		{
			id: 3,
			title: "Secure Payment Solution",
			content: "Highly Encrypted Payment Solution",
			icon: payment,
		},
		{
			id: 4,
			title: "Real Time Money Tracking",
			content: "Fast Cash Pickup from our Large Network of Locations",
			icon: realtime,
		},
		{
			id: 5,
			title: "Extreme Low Rates",
			content: "Fast Cash Pickup from our Large Network of Locations",
			icon: rates,
		},
		{
			id: 3,
			title: "Real Time Money Tracking",
			content: "Fast Cash Pickup from our Large Network of Locations",
			icon: realtime,
		},
	];
	return (
		<>
			<div className="container mx-auto ">
				<div className="p-10 lg:p-32 lg:pt-20">
					<p className="lg:mb-10 text-center lg:text-start text-2xl text-blue-700 mb-5 font-bold">
						Why Choose Us
					</p>

					<div
						className="md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3"
						data-aos="fade-bottom-left"
						data-aos-duration="3000">
						{data.map((data, i) => (
							<>
								<div class="max-w-sm mb-5 hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
									<div className="bg-red-500">
										<img
											class="rounded-t-lg md:h-72 rounded-xl"
											src={data.icon}
											alt=""
										/>
									</div>
									<div class="p-5">
										<a href="#">
											<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
												{data.title}
											</h5>
										</a>
										<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
											{data.content}
										</p>
										<a
											href="#"
											class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
											Read more
											<svg
												aria-hidden="true"
												class="ml-2 -mr-1 w-4 h-4"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg">
												<path
													fill-rule="evenodd"
													d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
													clip-rule="evenodd"></path>
											</svg>
										</a>
									</div>
								</div>
							</>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
