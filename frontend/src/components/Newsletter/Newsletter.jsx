import React from "react";
import logo from "../../assets/images/logo.png";

const style = {
	background: "#1c1b1b",
	color: "white",
};

const style2 = {
	background: "#2f2f2f",
	color: "white",
};

export const Newsletter = () => {
	return (
		<>
			<div style={style} className="">
				<div className="container mx-auto my-auto p-8">
					<div className="lg:grid lg:grid-cols-2 lg:gap-10 lg:mt-10 lg:items-center">
						<div className="flex items-center">
							<img
								src={logo}
								alt="The zigtech logo"
								className="hidden lg:block"
								width={100}
							/>
							<div className="ml-5 mb-5 md:w-full">
								<h2 className="md:text-center">
									Newsletter Subscriber
								</h2>
							</div>
						</div>

						{/* form  */}
						<div>
							<form>
								<div class="relative">
									<input
										type="search"
										id="search"
										class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
										placeholder="Your email address"
										required
									/>
									<button
										type="submit"
										class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
										Subscribe
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
