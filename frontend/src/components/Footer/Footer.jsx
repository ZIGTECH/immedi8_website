import React from "react";
import { Newsletter } from "../Newsletter/Newsletter";
import { Regulators } from "../Regulators/Regulators";
import logo from "../../assets/images/logo.png";

const style = {
	background: "#1c1b1b",
	color: "white",
};

export const Footer = () => {
	return (
		<>
			<div style={style} className="">
				<Newsletter />

				<div className="container mx-auto border-t-2 p-16 ">
					<p
						className="text-xl font-extrabold mb-10 mt-0"
						data-aos="fade-up"
						data-aos-duration="3000">
						Quick Links
					</p>

					<div className="grid grid-cols-5 gap-3">
						<div className="cursor-pointer">
							<ul className="tracking-widest">
								<li className="hover:underline">About</li>
								<li className="mt-2 hover:underline">Why Us</li>
								<li className="mt-2 hover:underline">
									Contact Us
								</li>
								<li className="mt-2 hover:underline">
									Our Network
								</li>
								<li className="mt-2 hover:underline">
									Our Platform
								</li>
								<li className="mt-2 hover:underline">
									Our Media
								</li>
							</ul>
						</div>
						<div className="cursor-pointer">
							<ul className="tracking-widest">
								<li className="hover:underline">
									AML & Compliance
								</li>
								<li className="mt-2 hover:underline">
									Terms & Condition
								</li>
								<li className="mt-2 hover:underline">
									Dispute Resolution
								</li>
								<li className="mt-2 hover:underline">
									Privacy Statement
								</li>
								<li className="mt-2 hover:underline">
									Reform Policy
								</li>
								<li className="mt-2 hover:underline">
									Complained Policy
								</li>
							</ul>
						</div>
						<div className="cursor-pointer">
							<ul className="tracking-widest">
								<li className="hover:underline">Send</li>
								<li className="mt-2 hover:underline">
									Receive
								</li>
								<li className="mt-2 hover:underline">Pay</li>
								<li className="mt-2 hover:underline">Loan</li>
								<li className="mt-2 hover:underline">Insure</li>
							</ul>
						</div>
						<div className="cursor-pointer">
							<ul className="tracking-widest">
								<li className="hover:underline">I-Remit</li>
								<li className="mt-2 hover:underline">I-Pay</li>
								<li className="mt-2 hover:underline">I-Fx</li>
								<li className="mt-2 hover:underline">
									I-Wallet
								</li>
							</ul>
						</div>
						<div className="cursor-pointer">
							<ul className="tracking-widest">
								<li className="hover:underline">I-Market</li>
								<li className="mt-2 hover:underline">
									I-Voucher
								</li>
								<li className="mt-2 hover:underline">
									I-Travel
								</li>
								<li className="mt-2 hover:underline">
									I-Events
								</li>
								<li className="mt-2 hover:underline">
									I-FundGlobal
								</li>
								<li className="mt-2 hover:underline">
									ZigTech (Fintech)
								</li>
							</ul>
						</div>
					</div>

					<div className="mt-32">
						<p className="text-white text-center mt-5">
							CopyRight © 2021. Immedi8 financial Services. All
							right Reserved.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
