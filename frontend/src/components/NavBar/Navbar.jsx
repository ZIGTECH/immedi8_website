import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/images/logo.png";
import { RatesModal } from "../Rates/RatesModal";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const [size, setSize] = useState(null);

	const handleOpen = value => setSize(value);

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

	const MainNav = () => {
		return (
			<>
				<div className="w-100">
					<div className={"container mx-auto"}>
						{/* TRACT TRANSACTION */}

						<div className="flex justify-between items-center p-5">
							<div className="navigation text-white ">
								<img
									src={logo}
									alt="The zigtech logo"
									width={100}
								/>
							</div>
							<div className="hidden md:block w-2/4 text-xl text-extrabold text-white group menu space-x-7 ">
								{navLinks.map((link, i) => (
									<Link
										to={link.path}
										spy={true}
										smooth={true}
										offset={-150}
										duration={1500}
										key={i}
										className={
											"ml-60 hover:underline underline-offset-8 decoration-4 cursor-pointer"
										}>
										{link.display}
									</Link>
								))}
							</div>

							<div className="flex items-center">
								<form className="mr-5">
									<div class="relative">
										<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
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
										<input
											type="search"
											id="default-search"
											class="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="Track Transaction"
											required
										/>
									</div>
								</form>

								{/* <span className="bg-blue-700 pt-1 pb-1 pr-5 pl-5 rounded text-white text-xl text-bold cursor-pointer hover:animate-bounce">
									<a href="http://109.228.55.140/mobile-wallet/admin#">
										Login
									</a>{" "}
								</span> */}
							</div>

							{/* breadcrumbs */}
							<div className="md:hidden">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
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
							</div>

							{/* Rates && Send Money  */}
							<div className="text-xl text-extrabold text-white group menu space-x-7 hidden md:block ">
								<Link
									onClick={() => setOpen(true)}
									className="cursor-pointer border p-2 rounded bg-blue-900 hover:bg-blue-700">
									Rates
								</Link>
								<Link className="cursor-pointer border p-2 rounded bg-blue-900 hover:bg-blue-700">
									Send Money
								</Link>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	};

	return (
		<>
			{" "}
			<RatesModal
				open={open}
				close={() => setOpen(false)}
				handleOpen={() => handleOpen("md")}
			/>
			<div className="w-100">
				{" "}
				<MainNav />
			</div>
		</>
	);
};

export default Navbar;
