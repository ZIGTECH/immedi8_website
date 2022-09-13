import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import videoBg from "../../assets/video/immedi8Video.mp4";
import { Button } from "@material-tailwind/react";
import { getHeroTitle } from "../../services/apiServices";
// import "./hero-section.css";

const buttonStyle = {
	background: "#b90000",
};

const textStyle = {
	fontSize: "4rem",
	fontWeight: "bold",
};

const videoWrapperStyle = {
	width: "100%",
	height: "100%",
	overflow: "hidden",
};

const videoStyle = {
	width: "100%",
};

const HeroSection = () => {
	const [heroTitle, setheroTitle] = useState("");

	const getTitle = async () => {
		const data = await getHeroTitle();
		setheroTitle(data.data.attributes.title);
		// console.log(heroTitle);
		// console.log(data);
	};

	useEffect(() => {
		getTitle();
	}, []);

	return (
		<>
			<div className="hero__slider " id="home">
				<div className="slider__item slider__item-01 mt-0">
					<div className="relative top-0 left-0 h-full">
						<div style={videoWrapperStyle} className="vid">
							<video
								style={videoStyle}
								id="myVideo"
								autoPlay
								loop
								muted>
								<source
									// src="https://youtu.be/KXpSd8Qk2LU"
									src={videoBg}
									type="video/mp4"
								/>
							</video>
						</div>
						{/*  */}
						<div className="content absolute h-full w-full left-0 top-0 z-10 bg-gray-900 opacity-70">
							<div className="container absolute md:top-1/4 md:left-48">
								<div
									className="slider__content text-center"
									data-aos="fade-up"
									data-aos-easing="linear"
									data-aos-duration="1000">
									<div className="hidden lg:block text-white">
										<p
											style={textStyle}
											className="sm:text-[20px] mt-24 text-extrabold lg:text-3xl">
											{heroTitle}
										</p>

										<div className="flex justify-center align-center pt-20">
											<Button
												style={buttonStyle}
												// color="red"
												ripple={true}
												className="btn reserve__btn bg-blue-900 px-20 py-3 text-bold text-slate-50 rounded font-bold">
												<Link
													to="highlight"
													spy={true}
													smooth={true}
													offset={-150}
													duration={500}>
													Discover
												</Link>
											</Button>
										</div>
									</div>
								</div>
							</div>
						</div>
						;{/*  */}
					</div>
				</div>
			</div>
		</>
	);
};
export default HeroSection;
