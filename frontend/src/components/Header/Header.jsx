import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import "../NavBar/style.css";
import AOS from "aos";
import "aos/dist/aos.css";

const style = {
	position: "relative",
	ZIndex: 10,
};

const Header = () => {
	const [navbar, setNavbar] = useState(false);
	const [getview, setGetView] = useState(false);

	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener("scroll", changeNavbarColor);

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
			<header className="" style={style}>
				<nav
					className={
						navbar
							? "main__navbar active bg-red-700 font-extrabold fixed top-0 w-full header z-50 h-36 text-black shadow-lg"
							: " fixed top-0 w-full header z-50 p-5"
					}>
					<div
						className={
							navbar
								? "main__navbar active text-black"
								: "text-white"
						}>
						<div
							className={
								navbar
									? "main__navbar active container mx-auto text-black"
									: "container mx-auto"
							}>
							<Navbar view={getview} setView={(e) => setGetView(e)} navbar={navbar} />
						</div>
					</div>
				</nav>
				<HeroSection setView={getview} />
			</header>
		</>
	);
};

export default Header;
