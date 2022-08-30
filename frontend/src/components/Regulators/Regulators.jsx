import React, { useEffect } from "react";
import visa from "../../assets/images/VISA.png";
import sofort from "../../assets/images/sofort.png";
import masterCard from "../../assets/images/MasterCard.png";
import klarna from "../../assets/images/KLARNA.png";
import jcbLogo from "../../assets/images/JCB_logo.png";
import maestro from "../../assets/images/maestro.png";
import AmericanExpress from "../../assets/images/American_Express.png";
import Ipay from "../../assets/images/American_Express.png";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

export const Regulators = () => {
	useEffect(() => {
		AOS.init({
			offset: 120,
			delay: 0,
			duration: 400,
			easing: "ease",
			once: false,
			mirror: false,
			anchorPlacement: "top-bottom",
		});
	}, []);

	const data = [
		{
			id: 1,
			image: visa,
		},
		{
			id: 2,
			image: sofort,
		},
		{
			id: 3,
			image: masterCard,
		},
		{
			id: 4,
			image: klarna,
		},
		{
			id: 5,
			image: jcbLogo,
		},
		{
			id: 6,
			image: maestro,
		},
		{
			id: 7,
			image: AmericanExpress,
		},
		{
			id: 8,
			image: maestro,
		},
	];

	return (
		<>
			<div className="container mx-auto flex mt-[43rem] mb-10 p-16 gap-10  border-red-700 border-t-2 border-b-2">
				{/* REGULATORS */}
				<div className="regulators">
					<p
						className="text-xl text-blue-900 font-extrabold mb-10 mt-0"
						data-aos="fade-up"
						data-aos-duration="3000">
						Our <br />
						<span
							className="text-red-700 text-3xl"
							data-aos="fade-right"
							data-aos-duration="3000">
							Regulators
						</span>
					</p>
					<ul className="list-disc">
						<li className="">
							Authorize By the Financial Services Authority, under
							the Payment Services Regulation 2009. PSD 584027 for
							the Provision of Payment Services.
						</li>

						<li className="mt-3">
							Registered with Her Majesty’s Revenue and Customs
							(HMRC) for AML and Terrorism Financing Regulation.
							Registration Number 12585462
						</li>

						<li className="mt-3">
							Registered with Her Majesty’s Revenue and Customs
							(HMRC) for AML and Terrorism Financing Regulation.
							Registration Number 12585462
						</li>
					</ul>

					<p className="text-center mt-5">
						Regulated and Authorized By the Central Bank of the
						Gambia
					</p>
				</div>

				{/* WE ACCEPT */}
				<div>
					<p
						className="text-xl text-blue-900 font-extrabold mb-10 mt-0 ml-10"
						data-aos="fade-up"
						data-aos-duration="3000">
						We <br />
						<span
							className="text-red-700 text-3xl"
							data-aos="fade-right"
							data-aos-duration="3000">
							Accept
						</span>
					</p>
					<div className="grid grid-cols-4 gap-5 mt-5">
						{data.map((d, i) => (
							<img
								key={i}
								src={d.image}
								alt=""
								className={
									i === 6
										? "mt-5 cursor-pointer mx-10 hover:animate-bounce"
										: "cursor-pointer mx-10 hover:animate-bounce"
								}
								data-aos="fade-left"
								data-aos-duration="3000"
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
