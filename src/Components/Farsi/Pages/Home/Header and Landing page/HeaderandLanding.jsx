import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Zoom } from 'react-slideshow-image';

// Components
import Header from "../../../Header/Header";

// Images
import email from "../../../../../Images/email.png";
import phone from "../../../../../Images/phone.png";
import logo from '../../../../../Images/logo-2.png'

// Styles
import styles from "./HeaderandLanding.module.css";
import 'react-slideshow-image/dist/styles.css'

// Components
import ServiceforNavbar from "../../../Services/ServiceforNavbar/ServiceforNavbar";

const HeaderandLanding = () => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        setActive(!active);
    }, []);

    const [services, setServices] = useState();

    useEffect(() => {
        const getServices = async () => {
            await axios
                .get("https://api.vip4care.ir/addService/getServices", {
                    "Content-Type": "application/json",
                    // "Dev": "vip4c@reDevelop3r",
                    // "Authorization": "Bearer " + jwtToken,
                    // "Access-Control-Allow-Origin": "*",
                    // "Access-Control-Allow-Headers":"*",
                    // "Access-Control-Allow-Methods":"*"
                })
                .then((response) => setServices(response.data.services));
            // .then((response)=> console.log(response.data.services))
        };

        getServices();
    }, []);

    // Slideshow images
    const [changer1, setChanger1] = useState(1);
    const [styler1, setStyler1] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setChanger1(changer1 + 1);
            setStyler1(!styler1);
        }, 5000)
    }, [changer1])

    return (
        <div className={styles.container}>
            <div className={styler1 ? styles.LandingImage : styles.LandingImage2}>
                <section className={styles.hamMenu}>
                    <Header />
                </section>
                <div className={styles.Header}>
                    <nav>
                        <div className={styles.upperdiv}>
                            <div className={styles.upperdiv_right}>
                                <Link to="/contactus">
                                    <button>درباره ما</button>
                                </Link>
                                {!localStorage.getItem("user") && (
                                    <Link to="/login">
                                        <button>ورود</button>
                                    </Link>
                                )}
                                {localStorage.getItem("user") && (
                                    <Link to="/myaccount">
                                        <button>صفحه من</button>
                                    </Link>
                                )}
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
                                <Link to="/">
                                    <button>خانه</button>
                                </Link>
                                <div className={styles.dropdown_btn}>
                                    <div className={styles.dropdown_drops}>
                                        {services?.map((service) => (
                                            <ServiceforNavbar
                                                key={service._id}
                                                productData={service}
                                            />
                                        ))}
                                    </div>
                                    <button>خدمات ما</button>
                                </div>
                                <Link to="/blog">
                                    <button>بلاگ</button>
                                </Link>
                                <Link to="/workwithus"><button>همکاری با ما</button></Link>
                            </div>
                            <div></div>
                            <div></div>
                            <div className={styles.logo}>
                                <img src={logo} alt="vip4care logo" />
                            </div>
                        </div>
                        <div className={styles.under372pxlogo}>
                            <div>
                                <img src={logo} alt="vip4care logo" />
                            </div>
                        </div>
                    </nav>
                </div>
                <div className={styles.Landing}>
                    <div
                        className={
                            active ? styles.starthere_Active : styles.starthere
                        }
                    >
                        <h1>ما با هم یک خانواده هستیم</h1>
                        <p>
                            در دنیای امروزی با پیشرفت سریع تکنولوژی و رویکردهای
                            نوین، تمامی مراکز به دنبال افزایش رضایت مندی مشترکین
                            خود هستند ، ما تلاش می‌کنیم خدمات خود را به نحو
                            مطلوبی به شما ارائه دهیم نظرات شما را جویا شده و از
                            شما کمک بگیریم. کیفیت برتر خدمات صرفاً یک شعار نیست
                            و ما ملزم به رعایت این نکات می باشیم. بقای کیفیت
                            خدمات ارائه شده در مرکز آوای سلامت به رضایت
                            مستمر خانواده ها بستگی خواهد داشت از این رو با حفظ
                            شرایط مطلوب پشتیبان قرارداد های خود هستیم. شما
                            میتوانید با اطمینان خاطر از ما درخواست خدمات نمایید
                            و ما را جزئی از خانواده خود بدانید
                        </p>
                        <div className={styles.starthere_btn}>
                            <Link to="/contactus">
                                <button>!کلیک کنید</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderandLanding;
