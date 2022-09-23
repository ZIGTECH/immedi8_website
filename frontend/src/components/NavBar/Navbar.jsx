import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as L } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/images/logo.png";
import { getTrackTransaction } from "../../services/apiServices";
import { RatesModal } from "../Rates/RatesModal";
import { TrackModal } from "../TrackTransaction/TrackModal";

const Navbar = (props) => {

	return <Child navbar={props.navbar} setView={props.setView} view={props.view} />
};

export const Child = (props) => {
	// console.log(props.navbar);
	const [open, setOpen] = useState(false);
	const [modalopen, setmodalOpen] = useState(false);
	const [sidebar, setSidebar] = useState(false);
	const [reference, setReference] = useState("");
	const [transaction, settransaction] = useState([])
	const [showResult, setshowResult] = useState(false);
	const [foundTransaction, setFoundTransaction] = useState(false);


	const navLinks = [
		{
			id: 1,
			path: "home",
			display: "Home",
		},
		{
			id: 2,
			path: "about",
			display: "About",
		},
		{
			id: 3,
			path: "service",
			display: "Services",
		},

		{
			id: 4,
			path: "products",
			display: "Products",
		},

		{
			id: 5,
			path: "contact",
			display: "Contact ",
		},
		// {
		// 	id: 6,
		// 	path: "#",
		// 	display: "Send Money",
		// },
	];

	const handleSearch = async () => {
		// e.preventDefault();
		console.log(reference)

		if (reference === "") {
			toast("Plese enter reference number!")
		} else {
			try {

				const data = await getTrackTransaction(reference);
				console.log(data);
				if (data.success) {
					settransaction(data.result);
					setFoundTransaction(true)
					setmodalOpen(true);
					toast("Transaction Found!")
				} else {
					toast("Transaction Failed")
				}
			} catch (error) {
				console.log(error.message);
			}
		}
	};

	const handleChange = e => {
		setReference(e.target.value);
	};

	const MainNav = () => {
		return (
			<>
				{console.log(transaction)}
				<div className={"container mx-auto"}>
					{/* TRACT TRANSACTION */}

					<div className="flex justify-between items-center p-5">
						{/* {!sidebar ? ( */}
						<div className="relative navigation text-white ">
							<Link
								to="home"
								spy={true}
								smooth={true}
								offset={-150}
								duration={1500}>
								<img
									src={logo}
									alt="The zigtech logo"
									className={
										props.navbar
											? "w-20 md:w-28 cursor-pointer"
											: "w-20 md:w-40 cursor-pointer"
									}
								/>
							</Link>
						</div>
						{/* ) : null} */}
						<div className="hidden items-center lg:block text-xl text-extrabold text-white group menu space-x-7 ">
							{navLinks.map((link, i) => (
								<Link
									to={link.path}
									spy={true}
									smooth={true}
									offset={-150}
									duration={1500}
									key={i}
									className={
										"ml-32 hover:underline underline-offset-8 decoration-4 cursor-pointer"
									}>
									{link.display}
								</Link>
							))}
						</div>

						{/* search form */}
						<div className="hidden lg:flex md:items-center">
							<form className="mr-5">
								<div class="relative">
									<input
										type="search"
										name="reference"
										// value={reference}
										onChange={handleChange}
										id="default-search"
										class="z-20 hover:z-20 block p-2 pr-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Track Transaction"
										required
									/>
									<div
										style={{ cursor: "pointer" }}
										onClick={() => handleSearch()}
										class="flex absolute inset-y-0 right-0 items-center pr-3">
										<svg
											aria-hidden="true"
											class="w-5 h-5 text-gray-500 dark:text-gray-400"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
										</svg>
									</div>
								</div>
							</form>
						</div>

						{/* breadcrumbs */}
						<div className="lg:hidden">
							{!sidebar ? (
								<button onClick={() => setSidebar(true)}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-10 w-10 text-white"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 6h16M4 12h16m-7 6h7"
										/>
									</svg>
								</button>
							) : (
								<div
									id="drawer-navigation"
									class="absolute top-20 right-0 h-auto p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800"
									tabindex="-1"
									aria-labelledby="drawer-navigation-label">
									<h5
										id="drawer-navigation-label"
										class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
										Menu
									</h5>
									<button
										onClick={() => setSidebar(false)}
										type="button"
										data-drawer-dismiss="drawer-navigation"
										aria-controls="drawer-navigation"
										class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
										<svg
											aria-hidden="true"
											class="w-5 h-5"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fill-rule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clip-rule="evenodd"></path>
										</svg>
										<span class="sr-only">Close menu</span>
									</button>
									<div class="py-4 overflow-y-auto">
										<ul class="space-y-2">
											<li>
												<a href="#home">
													<button
														class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
														onClick={() =>
															setSidebar(false)
														}>
														<svg
															aria-hidden="true"
															class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
															xmlns="http://www.w3.org/2000/svg"
															fill="currentColor"
															viewBox="0 0 24 24"
															stroke-width="1.5"
															stroke="currentColor">
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
															/>
														</svg>

														<span class="ml-3">
															Home
														</span>
													</button>
												</a>
											</li>
											<li>
												<a href="#about">
													<button
														onClick={() =>
															setSidebar(false)
														}
														type="button"
														class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
														aria-controls="dropdown-example"
														data-collapse-toggle="dropdown-example">
														<svg
															aria-hidden="true"
															class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
															fill="currentColor"
															viewBox="0 0 20 20"
															xmlns="http://www.w3.org/2000/svg">
															<path
																fill-rule="evenodd"
																d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
																clip-rule="evenodd"></path>
														</svg>
														<span class="flex-1 ml-3 text-left whitespace-nowrap">
															About
														</span>
													</button>
												</a>
											</li>
											<li>
												<a href="#service">
													<button
														onClick={() =>
															setSidebar(false)
														}
														type="button"
														class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
														<svg
															aria-hidden="true"
															class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
															fill="currentColor"
															viewBox="0 0 20 20"
															xmlns="http://www.w3.org/2000/svg">
															<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
														</svg>
														<span class="flex-1 ml-3 text-left whitespace-nowrap">
															Services
														</span>
													</button>
												</a>
											</li>
											<li>
												<a
													href="#products"
													class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
													<svg
														aria-hidden="true"
														class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg">
														<path
															fill-rule="evenodd"
															d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
															clip-rule="evenodd"></path>
													</svg>
													<span class="flex-1 ml-3 whitespace-nowrap">
														Products
													</span>
												</a>
											</li>
											<li>
												<a href="#contact">
													<button
														onClick={() =>
															setSidebar(false)
														}
														type="button"
														class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
														<svg
															aria-hidden="true"
															class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 24 24"
															fill="currentColor">
															<path
																fill-rule="evenodd"
																d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-4.72 4.72a.75.75 0 11-1.06-1.06l4.72-4.72h-2.69a.75.75 0 01-.75-.75z"
																clip-rule="evenodd"
															/>
															<path
																fill-rule="evenodd"
																d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
																clip-rule="evenodd"
															/>
														</svg>

														<span class="flex-1 ml-3 text-left whitespace-nowrap">
															Contact
														</span>
													</button>
												</a>
											</li>

											<li>
												<a href="#">
													<button
														onClick={() =>
															setSidebar(false)
														}
														type="button"
														class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
														<svg
															aria-hidden="true"
															class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 24 24"
															fill="currentColor">
															<path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
															<path
																fill-rule="evenodd"
																d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
																clip-rule="evenodd"
															/>
														</svg>

														<span class="flex-1 ml-3 text-left whitespace-nowrap">
															Rates
														</span>
													</button>
												</a>
											</li>

											<li>
												<a href="#">
													<button
														onClick={() =>
															setSidebar(false)
														}
														type="button"
														class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
														<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
															class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"

														>
															<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
														</svg>


														<span class="flex-1 ml-3 text-left whitespace-nowrap">
															Calculate
														</span>
													</button>
												</a>
											</li>

											<li>
												<a href="#send">
													<button
														onClick={() =>
															setSidebar(false)
														}
														type="button"
														class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
														<svg
															aria-hidden="true"
															class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 24 24"
															fill="currentColor">
															<path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
														</svg>

														<span class="flex-1 ml-3 text-left whitespace-nowrap">
															Send Money
														</span>
													</button>
												</a>
											</li>
										</ul>
									</div>
								</div>
							)}
						</div>

						{/* Rates && Send Money  */}
						<div className="hidden lg:block text-xl text-extrabold text-white group menu space-x-7">
							<Link
								onClick={() => setOpen(true)}
								className="cursor-pointer border p-2 rounded bg-blue-900 hover:bg-blue-700">
								Rates
							</Link>

							<Link
								onClick={() => props.setView(!false)}
								className="cursor-pointer border p-2 rounded bg-blue-900 hover:bg-blue-700">
								Calculate
							</Link>
							{/* <L> */}
							<a href="https://iremitcli.zigtech.net" target="_blank"
								className={
									props.navbar
										? "cursor-pointer border p-2 rounded bg-blue-900 hover:bg-blue-700"
										: "cursor-pointer border p-2 rounded bg-red-900 hover:bg-red-700"
								}
							>

								Send Money
							</a>
							{/* </L> */}
						</div>
					</div>
				</div>
			</>
		);
	};

	return (
		<>
			{" "}

			<TrackModal modalopen={modalopen} close={() => setmodalOpen(false)} transaction={transaction} />
			<RatesModal openmodal={open} close={() => setOpen(false)} />
			<div className="">
				<MainNav />
			</div>
		</>
	);

}

export default Navbar;
