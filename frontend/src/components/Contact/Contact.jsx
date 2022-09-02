import React from "react";
import {
	MdAccessTime,
	MdOutlineEmail,
	MdOutlineLocationOn,
	MdWifiCalling2,
} from "react-icons/md";

const style = {
	background: "#2f2f2f",
	color: "white",
};

export const Contact = () => {
	return (
		<>
			<div className="container mx-auto" id="contact">
				<div className="grid grid-cols-2 gap-10 mt-10 border-t-2">
					<div className="p-32">
						<p className="text-2xl text-blue-700 mb-5 ">
							Contact Us
						</p>
						<h2 className="font-bold text-white">Get In Touch.</h2>

						{/* <form>
							<div class="grid md:grid-cols-2 md:gap-6">
								<div class="relative z-0 mb-10 w-full group">
									<input
										style={style}
										type="text"
										name="floating_first_name"
										id="floating_first_name"
										class="block p-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
										placeholder="Name"
										required
									/>
									<label
										for="floating_first_name"
										class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
										Name
									</label>
								</div>
								<div class="relative z-0 mb-10 w-full group">
									<input
										style={style}
										type="text"
										name="floating_last_name"
										id="floating_last_name"
										class="block py-5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
										placeholder="Email"
										required
									/>
									<label
										for="floating_last_name"
										class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
										Email
									</label>
								</div>
							</div>

							
							<div class="grid md:grid-cols-2 md:gap-6">
								<div class="relative z-0 mb-10 w-full group">
									<input
										style={style}
										type="text"
										name="floating_first_name"
										id="floating_first_name"
										class="block py-5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
										placeholder="Phone Number"
										required
									/>
									<label
										for="floating_first_name"
										class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
										Phone Number
									</label>
								</div>
								<div class="relative z-0 mb-10 w-full group">
									<input
										style={style}
										type="text"
										name="floating_last_name"
										id="floating_last_name"
										class="block py-5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
										placeholder="Your Website"
										required
									/>
									<label
										for="floating_last_name"
										class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
										Website
									</label>
								</div>
							</div>

							<textarea
								style={style}
								id="message"
								rows="4"
								class="block p-5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Message..."></textarea>
							<button
								type="submit"
								class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
								Submit
							</button>
						</form> */}

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
							class="mt-10 p-10 bg-slate-700  text-slate-100 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Submit Now
						</button>

						{/* end */}
					</div>

					<div className="w-full text-white bg-red-700 p-10">
						<div className="mt-32 mx-auto">
							<h2 class="font-extrabold">Contact Info</h2>

							<div className="grid grid-cols-2 gap-10">
								<div className="group flex h-100 mt-8 cursor-pointer">
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

								<div className="group flex mt-8">
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

							<div className="grid grid-cols-2 gap-20">
								<div className="flex mt-14">
									<span>
										<MdOutlineEmail size={42} />
									</span>
									<div className="ml-5 mt-1 tracking-wide leading-loose">
										<p className="font-extrabold text-xl mb-1">
											Mail Us
										</p>
										<p>Transfer@immedi8.com</p>
									</div>
								</div>

								<div className="flex mt-14">
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
