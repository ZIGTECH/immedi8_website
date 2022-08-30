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
				<div className="p-32 pt-32">
					<p
						className="text-2xl mb-5 text-blue-900 font-extrabold "
						data-aos="fade-up"
						data-aos-duration="3000">
						Why Choose Us
					</p>

					<div
						className="grid grid-cols-3 gap-10"
						data-aos="fade-up"
						data-aos-duration="3000">
						{data.map((data, i) => (
							<>
								{/* <div
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
								</div> */}

								{/* <a
									href="#"
									class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
									<img
										src={data.icon}
										alt=""
										class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
									/>
									<div class="flex flex-col justify-between p-4 leading-normal">
										<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
											{data.title}
										</h5>
										<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
											{data.content}
										</p>
									</div>
								</a> */}

								<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
									<div className="bg-red-500">
										<img
											class="rounded-t-lg h-72"
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
