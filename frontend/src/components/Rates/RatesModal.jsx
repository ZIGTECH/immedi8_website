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
	backgroundColor: "red !important",
};
export const RatesModal = props => {
	const [size, setSize] = useState(null);
	const handleOpen = value => setSize(value);

	const currentDate = moment().format("Do MMMM, YYYY");

	return (
		<div style={styles} className="">
			<Fragment>
				<Dialog
					className="ml-[28rem] my-48"
					open={props.open}
					handler={props.close}
					handleOpen={props.handleOpen}>
					<div style={{ width: "50vw" }} className="">
						<DialogHeader>
							<div className="w-full">
								<div className="flex justify-center items-center text-center bg-red-700 rounded text-white p-5 w-full mr-3">
									<div
										className="logo p-5 mr-4 border border-dark rounded bg-white text-slate-900"
										style={{ marginRight: "30px" }}>
										<span className="">
											<p className="font-bold">I-MONEY</p>
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
										<span className="">Rates Today</span>{" "}
										{currentDate}
									</p>
								</div>
							</div>
						</DialogHeader>
						<DialogBody divider>
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
								{/* rates end */}
							</div>
						</DialogBody>
						<DialogFooter>
							<div
								className="footer bg-blue-700 p-3 rounded"
								style={{
									width: "100%",
								}}>
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
										<div
											className="email-info text-light border-3 border-start p-2"
											style={{ marginLeft: "20px" }}>
											<div className="mb-2">
												{/* <EmailIcon className="text-dark" /> */}
												<span
													style={{
														marginLeft: "10px",
													}}>
													Transfer@immedi8money.com
												</span>
											</div>
											<div>
												{/* <LanguageIcon className="text-dark" />{" "} */}
												<span
													style={{
														marginLeft: "10px",
													}}>
													www.immedi8money.com
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <Button
								variant="text"
								color="red"
								onClick={() => handleOpen(null)}
								className="mr-1">
								<span>Cancel</span>
							</Button>
							<Button
								variant="gradient"
								color="green"
								onClick={() => handleOpen(null)}>
								<span>Confirm</span>
							</Button> */}
						</DialogFooter>
					</div>
				</Dialog>
			</Fragment>
		</div>
	);
};
