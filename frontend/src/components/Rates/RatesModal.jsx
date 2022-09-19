import { Fragment, useState } from "react";
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
} from "@material-tailwind/react";
import moment from "moment";

const styles = {
	width: "100vw !important",
	display: "flex",
	margin: "0 auto !important",
	alignItems: "center",
	flexDirection: "row",
	// backgroundColor: "red !important",
};
export const RatesModal = props => {
	const [size, setSize] = useState(null);

	const currentDate = moment().format("Do MMMM, YYYY");

	return props.openmodal ? (
		<div style={styles} className="">
			<>
				<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
					data-aos="slide-up"
					data-aos-easing="ease-out-sine"
					data-aos-duration="2000"
				>
					<div className="relative w-[40%] my-6 mx-auto">
						{/*content*/}
						<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
							{/*header*/}
							<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
								<div className="w-full">
									<div className="flex justify-center items-center text-center bg-red-700 rounded text-white p-5 w-full mr-3">
										<div
											className="logo p-5 mr-4 border border-dark rounded bg-white text-slate-900"
											style={{ marginRight: "30px" }}>
											<span className="">
												<p className="font-bold">
													I-MONEY
												</p>
											</span>
											<span className="">
												IMMEDI8 TRANSFER
											</span>
										</div>

										<div className="title mr-3">
											<h1 className="text-white text-center font-bold">
												I-Money Transfer
											</h1>
										</div>
									</div>
									<div className="rates-today bg-blue-700 p-2 rounded text-center text-white border-t-2">
										<p className="text-2xl">
											<span className="">
												Rates Today
											</span>{" "}
											{currentDate}
										</p>
									</div>
								</div>
							</div>

							<h2 className="text-black flex justify-center">
								No Rates Available today.
							</h2>
							{/*Body*/}
							<div className="relative p-6 flex-auto">
								<div className="w-full h-[300px] bg-blue-200">
									<div className="grid grid-cols-2">
										<div className="currency-wrapper text-center">
											<h3 className="bg-red-700 text-white rounded p-2">
												Currency
											</h3>
										</div>

										{/* --------------------------------------- */}
										<div className="currency-wrapper text-center">
											<h3 className="bg-blue-700 text-white rounded p-2">
												Rates
											</h3>
										</div>
									</div>
									{/* Rates end */}
								</div>
							</div>

							<div className="footer w-full bg-blue-700 p-3 rounded">
								<div className="footer-wrapper flex justify-around items-center">
									<div className="contact-info border-3 border-end p-2">
										<div className="text-white flex justify-between items-center mr-4">
											<div>
												<div className="mb-2 mr-[20px]">
													{/* <LocalPhoneIcon className="text-dark" />{" "} */}
													<span>+220 4379917</span>
												</div>
												<div>
													{/* <LocalPhoneIcon className="text-dark" />{" "} */}
													<span>+220 4379917</span>
												</div>
											</div>
											<div>
												<div className="mb-2">
													{/* <LocalPhoneIcon className="text-dark" />{" "} */}
													<span>+220 4379917</span>
												</div>
												<div>
													{/* <LocalPhoneIcon className="text-dark" />{" "} */}
													<span>+220 4379917</span>
												</div>
											</div>
										</div>
										{/* footer wrapper */}
									</div>
									{/* footer */}
									<div className="">
										<div className="email-info border-3 border-start p-2 ml-[20px]">
											<div className="mb-2">
												{/* <EmailIcon className="text-dark" /> */}
												<span className="ml-[10px]">
													Transfer@immedi8money.com
												</span>
											</div>
											<div>
												{/* <LanguageIcon className="text-dark" />{" "} */}
												<span className="ml-[10px]">
													www.immedi8money.com
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/*footer*/}
							<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
								<button
									className="bg-red-700 hover:bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="button"
									onClick={() => props.close()}>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* overlay */}
				<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
			</>
		</div>
	) : (
		<></>
	);
};
