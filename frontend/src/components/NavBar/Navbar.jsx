import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
	const navLinks = [
		{
			path: "/home",
			display: "Home",
		},
		{
			path: "/#",
			display: "About",
		},
		{
			path: "/#",
			display: "Services",
		},

		{
			path: "/products",
			display: "Products",
		},

		{
			path: "/contact",
			display: "Contact ",
		},
		{
			path: "/#",
			display: "Send",
		},
		{
			path: "/#",
			display: "Receive",
		},
	];

	const MainNav = () => {
		return (
			<div className="w-100">
				<div className={"container mx-auto"}>
					<div className="flex justify-between items-center p-5">
						<div className="navigation text-white ">
							<img
								src={logo}
								alt="The zigtech logo"
								// className="bg-inherit"
								width={100}
							/>
							{/* <p className="">Logo</p> */}
						</div>
						<div>
							<div className="text-xl text-extrabold text-white group menu space-x-7">
								{navLinks.map((link, i) => (
									<Link
										to={link.path}
										key={i}
										className="hover:translate-y-32  transition-all">
										{link.display}
									</Link>
								))}
							</div>
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
						</div>
						<div>
							<span className="hover:bg-blue-700 pt-1 pb-1 pr-3 pl-3 rounded text-white text-2xl text-bold cursor-pointer hover:animate-bounce">
								<a href="http://109.228.55.140/mobile-wallet/admin#">
									Login
								</a>{" "}
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<>
			<div className="w-100">
				<MainNav />
			</div>
		</>
	);
};

export default Navbar;
