import React from "react";
import {
	MdAccessTime,
	MdOutlineEmail,
	MdOutlineLocationOn,
	MdWifiCalling2,
} from "react-icons/md";

const style = {
	// background: "#2f2f2f",
	background: "white",
	color: "black",
};

export const Contact = () => {
	return (
		<>
			<div className="container mx-auto" id="contact">
				<div className="lg:grid lg:grid-cols-2 lg:gap-10 mt-10 border-t-2">
					<div className="p-10 lg:p-32">
						<p className="text-center lg:text-start text-2xl text-blue-700 mb-5 ">
							Contact Us
						</p>
						<h2 className="text-center lg:text-start font-bold text-white">
							Get In Touch.
						</h2>

						<div class="grid md:grid-cols-2 md:gap-6 mt-10">
							<div class="relative z-0 mb-6 w-full group">
								<input
									style={style}
									type="text"
									name="company__name"
									id="floating_last_name"
									class="block p-5 w-full text-sm text-white bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder="Name"
									required=""
								/>
							</div>

							<div class="relative z-0 mb-6 w-full group">
								<input
									style={style}
									type="email"
									name="company__name"
									id="floating_last_name"
									class="block p-5 w-full text-sm text-white bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder="Email"
									required=""
								/>
							</div>
						</div>

						<div class="grid md:grid-cols-2 md:gap-6">
							<div class="relative z-0 mb-6 w-full group">
								<input
									style={style}
									type="text"
									name="company__name"
									id="floating_last_name"
									class="block p-5 w-full text-sm text-white bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder="Phone Number"
									required=""
								/>
							</div>

							<div class="relative z-0 mb-6 w-full group">
								<input
									style={style}
									type="text"
									name="company__name"
									id="floating_last_name"
									class="block p-5 w-full text-sm text-white bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder="Your Website"
									required=""
								/>
							</div>
						</div>

						<textarea
							style={style}
							id="message"
							rows="4"
							class="blockmb-5 p-5 w-full text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Message..."></textarea>

						<button
							// style={contactStyle}
							type="submit"
							class="w-full mt-10 p-10 bg-blue-800  text-slate-100 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Submit Now
						</button>

						{/* end */}
					</div>

					<div className="w-full text-white bg-red-700 p-10">
						<div className="lg:mt-32 mx-auto lg:w-3/4">
							<h2 class="text-center lg:text-start font-extrabold">
								Contact Info
							</h2>

							<div className="lg:grid lg:grid-cols-2 lg:gap-10">
								<div className="group w-full flex justify-center h-100 mt-8 cursor-pointer">
									<span className="">
										<MdOutlineLocationOn size={42} />
									</span>
									<div className="ml-5 tracking-wide leading-loose">
										<p className=" font-bold text-xl mb-1">
											Office Address
										</p>
										<p>
											127 Double Street, <br /> Dublin,{" "}
											<br />
											United Kingdom
										</p>
									</div>
								</div>

								<div className="group flex justify-center mt-8 cursor-pointer">
									<span className="">
										<MdWifiCalling2 size={42} />
									</span>
									<div className="ml-5 tracking-wide leading-loose">
										<p className=" font-extrabold text-xl mb-1">
											Telephone
										</p>
										<p href="+44 (0) 800 0324 314">
											+44 (0) 800 0324 314
										</p>
										<p href="+1 646 661 2911">
											+1 646 661 2911
										</p>
										<p href="+46 8 40839042">
											+46 8 40839042
										</p>
										<p href="++220 437 9917">
											+220 437 9917
										</p>
									</div>
								</div>
							</div>

							<div className="lg:grid lg:grid-cols-2 lg:gap-10">
								<div className="flex justify-center mt-14 cursor-pointer">
									<span>
										<MdOutlineEmail size={42} />
									</span>
									<div className="ml-5 mt-1 tracking-wide leading-loose">
										<p className="font-extrabold text-xl mb-1">
											Mail Us
										</p>
										<p className="">Transfer@immedi</p>
									</div>
								</div>

								<div className="flex justify-center mt-14 cursor-pointer">
									<span>
										<MdAccessTime size={42} />
									</span>
									<div className="ml-5 mt-1 tracking-wide leading-loose">
										<p className="font-extrabold text-xl mb-1">
											Opening Hours
										</p>
										<p>Mon-Fri: 8:00-5:00</p>
										<p>Closed: Sat-Sun</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
