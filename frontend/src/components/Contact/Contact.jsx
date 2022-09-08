import React from "react";
import {
	MdAccessTime,
	MdOutlineEmail,
	MdOutlineLocationOn,
	MdWifiCalling2,
} from "react-icons/md";
import { AppStore, GooglePlay } from "../../assets/main";
import { RiLinkedinLine } from "react-icons/ri";

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

					{/* CONTACT INFO SECTION */}
					<div className="w-full text-white bg-red-700 p-10 md:p-0">
						<div className="lg:mt-40 mx-auto lg:w-3/4">
							<h2 class="md:mb-5 text-center lg:text-start font-extrabold">
								Contact Info
							</h2>

							<div className="md:grid md:grid-cols-2 md:gap-10">
								<div className="group flex justify-center h-100 mt-8 cursor-pointer md:border-r-2 ">
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

								<div className="group flex justify-center mt-8 cursor-pointer md:border-l-2">
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

							<div className="md:grid md:grid-cols-2 md:gap-10">
								<div className="flex justify-center mt-14 cursor-pointer md:border-r-2">
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

								<div className="flex justify-center mt-14 cursor-pointer md:border-l-2">
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

						{/* SOCIAL MEDIA ICONS */}
						<div class="hidden lg:flex md:mt-32  space-x-3 sm:justify-center items-center sm:mt-0">
							{/* <RiLinkedinLine size={40} /> */}
							<a
								href="#"
								class=" hover:text-gray-300 dark:hover:text-white">
								<svg
									class="w-10 h-10"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true">
									<path
										fill-rule="evenodd"
										d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="sr-only">Facebook page</span>
							</a>
							<a
								href="#"
								class=" hover:text-gray-300 dark:hover:text-white">
								<svg
									class="w-10 h-10"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true">
									<path
										fill-rule="evenodd"
										d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="sr-only">Instagram page</span>
							</a>
							<a
								href="#"
								class=" hover:text-gray-300 dark:hover:text-white">
								<svg
									class="w-10 h-10"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true">
									<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
								</svg>
								<span class="sr-only">Twitter page</span>
							</a>
							{/* <img src={AppStore} alt="" className="w-36" />
							<img src={GooglePlay} alt="" className="w-36" /> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
