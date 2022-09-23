import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { about1, about2, about3, about4 } from "../../assets/main";
import { getAboutSectionsData, getHeroTitle } from "../../services/apiServices";

import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {
	const [title, setTitle] = useState("");
	const [subtitle, setSubtitle] = useState("");
	const [content1, setContent1] = useState("");
	const [content2, setContent2] = useState("");
	const [content3, setContent3] = useState("");

	const getAboutData = async () => {
		const data = await getAboutSectionsData();
		// console.log(data);

		setTitle(data.data[0].attributes.sectionTitle);
		setSubtitle(data.data[0].attributes.sectionSubtitle);
		setContent1(data.data[0].attributes.sectionContent1);
		setContent2(data.data[0].attributes.sectionContent2);
		setContent3(data.data[0].attributes.sectionContent3);
		// console.log(subtitle);
		// console.log(content);
	};

	useEffect(() => {
		getAboutData();
	}, []);

	// Slider array
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

	// AOS Settings
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

	// Initialise AOS
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
					className="lg:flex lg:justify-between lg:p-10 p-10
				">
					<div className="mb-5 lg:mt-10 lg:mr-16">
						<p
							className="text-center lg:text-start text-2xl text-blue-700 font-bold mb-2 lg:mb-5"
							data-aos="fade-down"
							data-aos-duration="3000">
							{title ?? title}
						</p>
						<h2
							className="text-center text-gray-700 lg:text-start mb-5 md:mb-7"
							data-aos="fade-up"
							data-aos-duration="3000">
							{subtitle ?? subtitle}
						</h2>
						<p
							className="text-justify  tracking-wide leading-relaxed"
							data-aos="fade-right"
							data-aos-duration="3000">
							{content1 ?? content1}
						</p>
						<br />
						<p
							className="text-justify tracking-wide leading-relaxed"
							data-aos="fade-right"
							data-aos-duration="3000">
							{content2 ?? content2}
						</p>
						<br />
						<p
							className="text-justify tracking-wide leading-relaxed"
							data-aos="fade-down"
							data-aos-duration="3000">
							{content3 ?? content3}
						</p>
					</div>

					<div
						className="hidden lg:block w-[63%] mt-0 md:mt-10"
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
