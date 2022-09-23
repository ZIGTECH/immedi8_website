import React, { useEffect } from "react";
import { Link } from "react-scroll";
import "./vid.css";
import playStore from "../../assets/images/AppStore.png";
import appleStore from "../../assets/images/GooglePlay.png";
// import appImg from "../../assets/images/app.png";
import appImg from "../../assets/images/iapp.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";


export const DownloadApp = () => {

    useEffect(() => {
        AOS.init({
            offset: 300,
            delay: 10,
            duration: 900,
            easing: "ease",
            once: false,
            mirror: false,
            anchorPlacement: "top-bottom",
        });
    }, []);

    return (

        <>
            <div className="container mx-auto p-10">
                <div className="lg:grid lg:grid-cols-2 gap-5">
                    <div className="p-10">
                        <div
                            className="text-center lg:text-start"
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <h2 className="font-sans font-extrabold mb-5">
                                Download our <br /> application
                            </h2>

                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Omnis maxime, ut nemo beatae
                                fuga dicta aspernatur in a voluptate odio
                                eveniet sequi minus quae, eligendi voluptatem
                                error reiciendis nisi explicabo?
                            </p>
                        </div>

                        <div
                            className="flex gap-5 mt-10"
                            data-aos="zoom-out-up"
                            data-aos-easing="ease-out-sine"
                            data-aos-duration="1000">
                            <span>
                                <img src={playStore} alt="Play store Logo" />
                            </span>

                            <span>
                                <img src={appleStore} alt="Apple store Logo" />
                            </span>
                        </div>
                    </div>

                    <div
                        className="hidden md:w-60 md:flex border rounded-sm"
                        data-aos="zoom-out-left"
                        data-aos-easing="linear"
                        data-aos-duration="2000">
                        <img src={appImg} alt="" className="translate-x-32 skew-x-12" />
                        <img src={appImg} alt="" className="translate-x-24 skew-7-12" />
                    </div>
                </div>
            </div>
        </>

















        // <div className="relative h-full top-0 left-0">
        //     <div className="vid">
        //         <div id="myVid">
        //             <img src={app} />
        //         </div>
        //     </div>
        //     {/*  */}
        //     <div className="content absolute h-full left-0 top-0 w-full bg-slate-700 opacity-80 z-10 ">
        //         <div className="container">
        //             <div
        //                 className="slider__content"
        //                 data-aos="fade-up"
        //                 data-aos-easing="linear"
        //                 data-aos-duration="1000">
        //                 <div className="-mt-10 ml-20 p-10">
        //                     <h1 className="text-white font-extrabold">
        //                         {" "}
        //                         Experience and <br /> Innovation In a single{" "}
        //                         <br /> touch.
        //                     </h1>
        //                     <p className="text-white font-extrabold">
        //                         Lorem ipsum, dolor sit amet consectetur
        //                         adipisicing elit. Velit dolore .
        //                     </p>

        //                     <div className="flex align-center sm:hidden">
        //                         <button className="btn reserve__btn bg-red-900 px-10 py-3 text-slate-50 rounded hover:animate-bounce font-bold">
        //                             <Link to="#" className="font-extrabold">
        //                                 Discover More
        //                             </Link>
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        // <div className="mx-auto">
        //     <div className="mx-auto">
        //         <img src={banner2} alt="" className="h-1/2" />
        //     </div>
        // </div>
    );
};
