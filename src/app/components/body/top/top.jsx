import React from "react";
import styles from "./top.module.scss";
import Image from "next/image";

// Imported icons
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsArrowRightShort, BsQuestionCircle } from "react-icons/bs";

// Imported images
import img from "@public/assets/admin.jpg";
import img2 from "@public/assets/classics/img6.jpg";
import { cookies } from "next/headers";

const Top = () => {
    const cookieStore = cookies();
    const displayName = cookieStore.get("display_name");

    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-4xl">
                    Happy reading, {displayName.value}!
                </h1>

                {/* <div id={styles["search-bar"]}>
                    <input type="text" placeholder="Search Dashboard" />
                    <BiSearchAlt id={styles["search-icon"]} />
                </div> */}
            </div>

            <div className="mt-6 flex items-center gap-4">
                <div id={styles["explore"]}>
                    <div className="z-10 text-white">
                        <h1>Explore our top sellers</h1>
                        <p>
                            Novel Nest offers a curated selection of quality
                            books
                        </p>

                        <div className="flex gap-4 pt-4">
                            {/* <button className={styles["explore-btn"]}>
                                Top Sellers
                            </button> */}
                            <a className={styles["explore-btn"]} href="/store">
                                Browse All
                            </a>
                        </div>
                    </div>

                    <video src="/assets/video.mp4" autoPlay loop muted></video>
                </div>

                <div className="flex basis-1/2 items-center">
                    {/* <div id={styles["main"]}>
                        <div id={styles["pick-up"]}>
                            <h2>Pick up where you left off...</h2>

                            <div className="items-center gap-2">
                                <span>3 Days Remaining</span>
                                <br />
                                <span>127/250 Pages Read</span>
                            </div>

                            <span
                                id={styles["pick-up-link"]}
                                className="flex items-center"
                            >
                                Resume reading <BsArrowRightShort />
                            </span>
                        </div>

                        <Image src={img2} alt="Image Name" />

                        <div className="sideBarCard">
                            <BsQuestionCircle className='icon'/>
                            <div className="cardContent">
                                <div className="circle1"></div>
                                <div className="circle2"></div>

                                <h3>what</h3>
                                <p>help</p>

                                <button className='btn'> Go to help center </button>
                            </div>
                
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Top;
