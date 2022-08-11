import React from "react";
import image from "../../assets/images/aboutImg.png";

export const About = () => {
	return (
		<>
			<div className="pl-20 pr-20">
				<div className="grid grid-cols-2 gap-10 p-10">
					<div className="p-10">
						<p className="text-2xl text-blue-700 mb-5">
							Who We Are
						</p>
						<h2 className="mb-7">
							Immedi8 Financial <br /> Service.
						</h2>
						<p className="text-justify text-sm leading-relaxed">
							Immedi8 Financial Services: We are a Financial
							Services Institution specializing In Money Services
							Business, International Remittance (wholesale and
							retail) and Foreign Exchange & Currency Services .{" "}
							<br /> <br />
							E-Commerce and FinTech Solutions. Our existence was
							borne out of the need to provide the needed,
							Affordable, Reliable and fast transaction delivery
							platform via which transactional needs and
							investment requirements are met both locally and
							internationally. <br /> <br /> We became the
							preferred choice for our customers because we
							emphasized reliability, affordability, and prompt
							delivery of transactions at the core of our
							services.{" "}
						</p>

						{/*  */}
						<div className="mt-10 text-sm">
							{/*  */}
							<div className="flex mt-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-blue-700"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={1}>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>

								<div className="ml-3">
									<h4 className="font-bold mb-3 text-l">
										E-Commerce && FinTech Solution.
									</h4>
								</div>
							</div>

							<div className="flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-blue-700"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={1}>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>

								<div className="ml-3">
									<h4 className="font-bold mb-3 text-l">
										Money Transfer Business.
									</h4>
								</div>
							</div>
							{/*  */}
							<div className="flex mt-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-blue-700"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={1}>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>

								<div className="ml-3">
									<h4 className="font-bold mb-3 text-l">
										International Remittance
									</h4>
								</div>
							</div>

							{/*  */}
							<div className="flex mt-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-blue-700"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={1}>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>

								<div className="ml-3">
									<h4 className="font-bold mb-3 text-l">
										Foreign Exchange && Currency Services.
									</h4>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-32">
						<img src={image} alt="" />
					</div>
				</div>
			</div>
		</>
	);
};
