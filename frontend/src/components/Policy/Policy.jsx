import React from "react";

export const Policy = () => {
	return (
		<>
			<div className="container mx-auto p-16">
				<div className="grid grid-cols-2 gap-10">
					<p
						className="text-xl text-blue-900 font-extrabold mb-10 mt-0"
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

					{/* ACCORDION */}
				</div>
			</div>
		</>
	);
};
