import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

// Context -- not working in new tap, exclusively for opening the link in one click!
// import { ServicesContext } from '../ServicesContextProvider/ServicesContextProvider';

// Components
import Header from "../../Header/Header";
import AboutUsInContact from "./AboutUs/AboutUsInContact";
import EmergencyNurse from "../Home/Emergency Nurse/EmergencyNurse";
import EmergencyCall from "../../Emergency Call/EmergencyCall";
import License from "../../License/License";
import Footer from "../../Footer/Fooer";

// Styles
import styles from "./ContactUs.module.css";

const ContactUs = () => {

    return (
        <div className={styles.container}>
                <div>
                    <section>
                        <  EmergencyCall/>
                    </section>
                    <section>
                        <  Header/>
                    </section>
                    <section>
                        <  AboutUsInContact/>
                    </section>
                    {/* <section>
                        <  EmergencyNurse/>
                    </section> */}
                    <section>
                        <  License/>
                    </section>
                    <section>
                        <  Footer/>
                    </section>
                </div>
        </div>
    );
};

export default ContactUs;
