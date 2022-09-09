import React, { useEffect } from "react";
import Slider from "react-slick";
import { about1, about2, about3, about4 } from "../../assets/main";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {
	const sliderImages = [
		{
			id: 1,
			photo: about1,
		},
		{
			id: 2,
			photo: about2,
		},
		{
			id: 3,
			photo: about3,
		},
		{
			id: 4,
			photo: about4,
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
					slidesToShow: 1,
					slidesToScroll: 1,
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

	return (
		<>
			<div className="lg:pl-20 lg:pr-20" id="about">
				<div
					className="lg:grid lg:grid-cols-2 lg:gap-5 lg:p-10 p-10
				">
					<div className="mb-5 lg:mt-10">
						<p
							className="text-center lg:text-start text-2xl text-blue-700 font-bold mb-2 lg:mb-5"
							data-aos="fade-down"
							data-aos-duration="3000">
							Who We Are
						</p>
						<h2
							className="text-center lg:text-start mb-5 md:mb-7"
							data-aos="fade-up"
							data-aos-duration="3000">
							Immedi8 Financial <br /> Service.
						</h2>
						<p
							className="text-justify leading-relaxed"
							data-aos="fade-right"
							data-aos-duration="3000">
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

					<div
						className="hidden lg:block w-full mt-0 md:mt-10"
						data-aos="fade-left"
						data-aos-duration="3000">
						<Slider {...settings} className="text-center">
							<div className="rounded-xl">
								<img
									src={about1}
									alt="immedi8 finace image"
									className="h-[600px] w-full rounded-xl"
								/>
							</div>
							<div className="rounded-xl">
								<img
									src={about2}
									alt="immedi8 finace image"
									className="h-[600px] w-full rounded-xl"
								/>
							</div>
							<div className="rounded-xl">
								<img
									src={about3}
									alt="immedi8 finace image"
									className="h-[600px] w-full rounded-xl"
								/>
							</div>
							<div className="rounded-xl">
								<img
									src={about4}
									alt="immedi8 finace image"
									className="h-[600px] w-full rounded-xl"
								/>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</>
	);
};
