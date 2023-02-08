import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

// Images
import email from "../../../Images/email-grey.png";
import phone from "../../../Images/phone-grey.png";
import logo from "../../../Images/logo.png"

// Styles
import styles from "./Header.module.css";
import HamStyles from "./HamMenu.module.css";

// Components
import ServiceforNavbar from "../Services/ServiceforNavbar/ServiceforNavbar";

const Header = () => {
    const burger = useRef();
    const [menus, setMenu] = useState(false);

    const toggleMenu = () => {
        if (menus) {
            burger.current.classList.add(HamStyles.burgerActive);
            setMenu(false);
            return;
        }

        if (!menus) {
            burger.current.classList.remove(HamStyles.burgerActive);
            setMenu(true);
            return;
        }
    };

    const [services, setServices] = useState();

    useEffect(() => {
        const getServices = async () => {

            const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pblVzZXJuYW1lIjoic2luYWtoIiwiaWF0IjoxNjcwMzUxNTE4LCJleHAiOjE2NzEyMTU1MTh9.zUx8Imt-8g7RecOZ39Jez3esTRJ-huQP99uGmArPVqA"
            const response = await axios.get("https://api.vip4care.ir/addService/getServices", {
                "Content-Type": "application/json",
                // "Dev": "vip4c@reDevelop3r",
                // "Authorization": "Bearer " + jwtToken,
                // "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Headers":"*",
                // "Access-Control-Allow-Methods":"*"
            })
                .then((response)=> setServices(response.data.services))
                // .then((response)=> console.log(response.data.services))
        };
        
        getServices();
    }, []);

    return (
        <div className={styles.container}>
            <div onClick={toggleMenu} className={HamStyles.toggleDiv}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={HamStyles.burger} ref={burger}>
                <div onClick={toggleMenu} className={HamStyles.toggleDivInMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p>فهرست</p>
                <nav className={HamStyles.nav}>
                    <Link to="/"><button>خانه</button></Link>
                    <div className={styles.dropdown_btn}>
                        <div className={styles.dropdown_drops}>
                            {
                                services?.map(service => <  ServiceforNavbar key={service._id} productData={service} />)
                            }
                        </div>
                            <button >خدمات ما</button>
                    </div>
                        <Link to="/blog"><button>بلاگ</button></Link>
                        <Link to="/workwithus"><button>همکاری با ما</button></Link>
                </nav>
            </div>
            <div className={styles.Header}>
                <nav>
                    <div className={styles.upperdiv}>
                        <div className={styles.upperdiv_right}>
                            <Link to="/contactus">
                                <button>درباره ما</button>
                            </Link>
                            {!localStorage.getItem('user') && <Link to="/login">
                                <button>ورود</button>
                            </Link>}
                            {localStorage.getItem('user') && <Link to="/myaccount">
                                <button>صفحه من</button>
                            </Link>}
                        </div>
                        <div></div>
                        <div></div>
                        <div className={styles.upperdiv_left}>
                            <span>info@vip4care.ir</span>
                            <img src={phone} alt="phone icon" />
                            <span>02188666930</span>
                            <img src={email} alt="email icon" />
                        </div>
                    </div>
                    <div className={styles.middlediv}></div>
                    <div className={styles.bottomdiv}>
                        <div className={styles.headerlinks}>
                            <Link to="/"><button>خانه</button></Link>
                            <div className={styles.dropdown_btn}>
                                <div className={styles.dropdown_drops}>
                                {
                                    services?.map(service => <  ServiceforNavbar key={service._id} productData={service} />)
                                }
                                </div>
                                <button >خدمات ما</button>
                            </div>
                            <Link to="/blog"><button>بلاگ</button></Link>
                            <Link to="/workwithus"><button>همکاری با ما</button></Link>
                        </div>
                        <div></div>
                        <div></div>
                        <div className={styles.logo}>
                            <img src={logo} alt="vip4care logo" />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
