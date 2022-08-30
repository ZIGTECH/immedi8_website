import React from "react";
import image from "../../assets/images/aboutImg.png";
import image1 from "../../assets/images/techgroup.jpg";
import Slider from "react-slick";

export const About = () => {
	const sliderImages = [
		{
			id: 1,
			photo: image,
		},
		{
			id: 2,
			photo: image1,
		},
		{
			id: 3,
			photo: image,
		},
	];

	const settings = {
		dots: true,
		infinite: true,
		// speed: 500,
		// fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: "linear",
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<div className="pl-20 pr-20" id="about">
				<div className="grid grid-cols-2 gap-10 p-10">
					<div className="p-10">
						<p className="text-2xl text-blue-700 font-bold mb-5">
							Who We Are
						</p>
						<h2 className="mb-7">
							Immedi8 Financial <br /> Service.
						</h2>
						<p className="text-justify text-sm leading-relaxed">
							We are a Financial Services Institution specializing
							In Money Services Business, International Remittance
							(wholesale and retail) and Foreign Exchange &
							Currency Services . <br /> <br />
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
					</div>

					<div className="">
						<div className="">
							<Slider {...settings} className="text-center">
								<div>
									<img src={image} alt="" />
								</div>
								<div>
									<img src={image} alt="" />
								</div>
								<div>
									<img src={image} alt="" />
								</div>
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
