import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import "../NavBar/style.css";

const style = {
	position: "relative",
	ZIndex: 10,
	// marginBottom: " 200px",
};

const Header = () => {
	const [navbar, setNavbar] = useState(false);

	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener("scroll", changeNavbarColor);

	return (
		<>
			<header className="" style={style}>
				<nav className={"fixed top-0 w-full header z-50 p-5"}>
					<div className="header__top">
						<div className="container mx-auto">
							<Navbar />
						</div>
					</div>
				</nav>
				<HeroSection />
			</header>
		</>
	);
};

export default Header;
