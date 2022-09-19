import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import videoBg from "../../assets/video/immedi8Video.mp4";
import { Button } from "@material-tailwind/react";
import {
	getCalculateTransaction,
	getHeroTitle,
} from "../../services/apiServices";
import { ifx, imoneyApp } from "../../assets/main";
import { toast } from "react-toastify";
import { Loading } from "../Contact/Loading";
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

const HeroSection = props => {
	const [loading, setloading] = useState(false);
	const [heroTitle, setheroTitle] = useState("");
	const [formValues, setformValues] = useState({
		from_country: "",
		to_country: "",
		amount: "",
	});
	const [calculatedData, setcalculatedData] = useState([]);
	const [showResult, setshowResult] = useState(false);
	const [showCalculate, setShowCalculate] = useState(false);

	console.log(props.transaction);
	const getTitle = async () => {
		const data = await getHeroTitle();
		setheroTitle(data.data.attributes.title);
		// console.log(heroTitle);
		// console.log(data);
	};

	useEffect(() => {
		getTitle();
	}, []);

	// Handle Change
	const handleChange = e => {
		setformValues({ ...formValues, [e.target.name]: e.target.value });
	};

	// Handle Submit
	const handleSubmit = async e => {
		e.preventDefault();
		// console.log(formValues);

		if (
			formValues.from_country === "" ||
			formValues.to_country === "" ||
			formValues.amount === ""
		) {
			toast("Plese enter all the fields!");
		} else {
			try {
				const form = {
					...formValues,
				};
				setloading(true);
				const data = await getCalculateTransaction(form);
				console.log(data.result);
				if (data.success) {
					setcalculatedData(data.result);
					setshowResult(true);
					toast("Transaction successfully calculated!");
					setloading(false);
				} else {
					toast("Transaction failed");
					setloading(false);

				}
			} catch (error) {
				console.log(error.message);
			}
		}
	};


	return (
		<>
			{console.log(formValues)}
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
								// type="video/mp4"
								/>
								Sorry, your browser doesn't support videos.
							</video>
						</div>
						{/*  */}
						<div className="content absolute h-full w-full left-0 top-0 z-0 bg-gray-900 opacity-80">
							<div className="container absolute md:top-[30%] lg:left-auto lg:right-auto">
								<div
									className="slider__content text-center"
									data-aos="fade-up"
									data-aos-easing="linear"
									data-aos-duration="1000">
									<div className="hidden lg:block text-white">
										<p
											style={textStyle}
											className="sm:text-[20px] mt-24 text- lg:text-3xl">
											{heroTitle}
										</p>

										<div className="flex justify-center align-center pt-20">
											<Button
												style={buttonStyle}
												// color="red"
												ripple={true}
												className="btn reserve__btn px-20 py-3 text-slate-50 rounded font-bold border-b shadow-2xl text-lg">
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

								{/* Form */}

								{props.setView ? (
									<div class="absolute hidden lg:block top:96 lg:top-0 lg:left-full md:z-50 p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
										{showResult ? (
											<div
												data-aos="fade"
												data-aos-duration="3000">
												<h4 className="text-center border-b-2 font-extrabold">
													Transaction Detail
												</h4>

												<div className="mt-10">
													<div className="flex justify-between">
														<p>From Currency:</p>
														<span className="text-extrabold">
															{
																calculatedData?.FromCurrency
															}
														</span>
													</div>

													<div className="mt-2 flex justify-between">
														<p>To Currency:</p>
														<span className="text-extrabold">
															{
																calculatedData?.ToCurrency
															}
														</span>
													</div>

													<div className="mt-2 flex justify-between">
														<p>Exchange Rate:</p>
														<span className="text-extrabold">
															{
																calculatedData?.Servicefee
															}
														</span>
													</div>

													<div className="mt-2 flex justify-between">
														<p>Service Fee:</p>
														<span className="text-extrabold">
															{
																calculatedData?.ExchangeRate
															}
														</span>
													</div>

													<div className="mt-8 border-t-2 border-b-2">
														<div className="mt-2 flex justify-between font-extrabold">
															<p>
																Payable Amount:
															</p>
															<span className="text-extrabold">
																{
																	calculatedData?.Payableamount
																}
															</span>
														</div>

														<div className="mt-2 flex justify-between font-extrabold">
															<p>
																Calculated
																Amount:
															</p>
															<span className="text-extrabold">
																{
																	calculatedData?.ConvertedAmount
																}
															</span>
														</div>
													</div>

													<div className="mt-8">
														<Button
															type="button"
															onClick={() =>
																setshowResult(
																	false
																)
															}
															className="bg-red-700 hover:bg-red-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
															Close
														</Button>
													</div>
												</div>
											</div>
										) : (
											<form
												onSubmit={handleSubmit}
												class="space-y-6 h-2/4"
												data-aos="fade" data-aos-duration="3000"
												action="#"
												style={{
													backgroundColor: "white",
												}}>
												<h5 class="text-2xl text-center font-medium text-gray-900 dark:text-white">
													Calculate Transaction
												</h5>

												<select
													name="from_country"
													id="countries"
													class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
													onChange={handleChange}>
													<option selected>
														-- Select Country from
														--
													</option>
													<option value="United States">
														United States
													</option>
													<option value="United Kingdom">
														United Kingdom
													</option>
													<option value="Nigeria">
														Nigeria
													</option>
													<option value="Gambia The">
														Gambia
													</option>
												</select>

												<select
													name="to_country"
													id="countries"
													class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
													onChange={handleChange}>
													<option selected>
														-- Select Country to --
													</option>
													<option value="United States">
														United States
													</option>
													<option value="United Kingdom">
														United Kingdom
													</option>
													<option value="Nigeria">
														Nigeria
													</option>
													<option value="Gambia The">
														Gambia
													</option>
												</select>

												<input
													name="amount"
													className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
													type="number"
													placeholder="Enter Amount To Send"
													onChange={handleChange}
												/>

												<Button
													type="submit"
													className="bg-blue-700 hover:bg-blue-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
													{loading ? (
														<Loading className="mx-auto" />
													) : (
														<span>Calculate</span>
													)}
												</Button>
											</form>
										)}
									</div>
								) : (
									<></>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default HeroSection;
