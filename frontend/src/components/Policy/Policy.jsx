import React from "react";
import "./policy.css";
import { policy } from "../../assets/main";

export const Policy = () => {
	return (
		<>
			<div className="container mx-auto p-16">
				<div className="flex">
					<div className="flex-1 w-3/4">
						<p
							className="text-xl text-blue-900 font-extrabold "
							data-aos="fade-up"
							data-aos-duration="3000">
							Our <br />
							<span
								className="text-red-700 text-3xl"
								data-aos="fade-right"
								data-aos-duration="3000">
								Policy
							</span>
						</p>
					</div>

					{/* ACCORDION */}

					<div className=" flex-1 w-1/4">
						<div>
							<img src={policy} alt="policy image" width="60%" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
