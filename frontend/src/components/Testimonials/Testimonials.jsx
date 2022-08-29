import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Boxes } from "../Boxes/Boxes";
import { HiCurrencyDollar } from "react-icons/hi";
import { BsBank } from "react-icons/bs";
import { MdAccountBalance, MdMoney, MdOutlinePayments } from "react-icons/md";
import { MdSendToMobile } from "react-icons/md";
import img1 from "../../assets/images/testimonials.jpg";
import Slider from "react-slick";

const style = {
	background: "#2f2f2f",
	// border: "1px solid #222121",
};

export const Testimonials = () => {
	const settings = {
		dots: true,
		infinite: true,
		// speed: 500,
		// fade: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: "linear",
		pauseOnHover: true,
		// fade: true,
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
			name: "Shyn Sidibeh",
			image: img1,
			title: "CEO, SunShyn Poultry Farms",
			content:
				"lorem Ipsum lorem Ipsum, consectetur adipisicing  elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquid ex ea commodo consequat. Lorem Ipsum lorem Ipsum lorem Ipsum, consectetur adipisicing  elit, sed diam nonumy eirmod tempor incididunt ut labore et dolo",
		},
		{
			id: 1,
			name: "Shyn Sidibeh",
			image: img1,
			title: "CEO, SunShyn Poultry Farms",

			content:
				"lorem Ipsum lorem Ipsum, consectetur adipisicing  elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquid ex ea commodo consequat. Lorem Ipsum lorem Ipsum lorem Ipsum, consectetur adipisicing  elit, sed diam nonumy eirmod tempor incididunt ut labore et dolo",
		},
		{
			id: 1,
			name: "Shyn Sidibeh",
			image: img1,
			title: "CEO, SunShyn Poultry Farms",

			content:
				"lorem Ipsum lorem Ipsum, consectetur adipisicing  elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquid ex ea commodo consequat. Lorem Ipsum lorem Ipsum lorem Ipsum, consectetur adipisicing  elit, sed diam nonumy eirmod tempor incididunt ut labore et dolo",
		},
		{
			id: 1,
			name: "Shyn Sidibeh",
			image: img1,
			title: "CEO, SunShyn Poultry Farms",

			content:
				"lorem Ipsum lorem Ipsum, consectetur adipisicing  elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquid ex ea commodo consequat. Lorem Ipsum lorem Ipsum lorem Ipsum, consectetur adipisicing  elit, sed diam nonumy eirmod tempor incididunt ut labore et dolo",
		},
		{
			id: 1,
			name: "Shyn Sidibeh",
			image: img1,
			title: "CEO, SunShyn Poultry Farms",

			content:
				"lorem Ipsum lorem Ipsum, consectetur adipisicing  elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquid ex ea commodo consequat. Lorem Ipsum lorem Ipsum lorem Ipsum, consectetur adipisicing  elit, sed diam nonumy eirmod tempor incididunt ut labore et dolo",
		},
		{
			id: 1,
			name: "Shyn Sidibeh",
			image: img1,
			title: "CEO, SunShyn Poultry Farms",

			content:
				"lorem Ipsum lorem Ipsum, consectetur adipisicing  elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquid ex ea commodo consequat. Lorem Ipsum lorem Ipsum lorem Ipsum, consectetur adipisicing  elit, sed diam nonumy eirmod tempor incididunt ut labore et dolo",
		},
	];

	return (
		<>
			<div className="container mx-auto p-32 pt-20 pb-20">
				<p className="text-2xl text-blue-700 mb-5 font-bold">
					Testimonials
				</p>

				{/*  */}
				<div className="grid grid-cols-2 gap-10 items-center">
					<div>
						<h2 className="font-bold">
							What Our Clients says About <br /> Immedi8 Finance.
						</h2>
					</div>

					{/*  */}
					<div>
						<p className="text-justify">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Neque accusantium veniam reiciendis facere rem
							aperiam quisquam ipsum in porro, optio debitis,
							deserunt repellat aliquid saepe, eius fuga dolorem!
							Iusto, necessitatibus!
						</p>
					</div>
				</div>

				<Slider {...settings} className="mx-auto my-10">
					{data.map((d, i) => (
						<div className="group grid grid-cols-3 mt-20">
							<>
								<div
									key={i}
									className="group-hover:bg-slate-100 group-hover:scale-75 translate-x-4 skew-y-3 md:transform-none h-72 p-5 shadow-xl mx-5 rounded-xl cursor-pointer">
									<p className="text-center mb-5">
										{d.content}
									</p>
									<div className="">
										<img
											src={img1}
											alt=""
											width="90px"
											className="mx-auto rounded-[50%]"
										/>
									</div>
									<div className="text-center mt-5">
										<span className="font-extrabold mb-3">
											{d.name}
										</span>
										<p className="mb-10 font-sans">
											{d.title}
										</p>
									</div>
								</div>
							</>
						</div>
					))}
				</Slider>
			</div>
		</>
	);
};
