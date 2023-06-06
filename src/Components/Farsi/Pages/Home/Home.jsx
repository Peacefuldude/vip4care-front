import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

// Styles
import styles from './Home.module.css'

// Conmonents
import HeaderandLanding from './Header and Landing page/HeaderandLanding';
import EmergencyNurse from './Emergency Nurse/EmergencyNurse';
import AboutUs from './About Us/AboutUs';
import Services from '../../Services/Services';
import License from '../../License/License';
import Footer from '../../Footer/Fooer';

// Hovering Emergeny Call
import EmergencyCall from '../../Emergency Call/EmergencyCall';

const Home = () => {

    const Navigate = useNavigate();

    // useEffect(() => {
    //     if (!localStorage.getItem("user")) {
    //         Navigate("/login");
    //     }
    // }, []);

    return ( 
            <div className={styles.continer}>
                <section className={styles.EmergencyCall}>
                    <  EmergencyCall/>
                </section>
                <section className={styles.HeaderandLanding}>
                    <  HeaderandLanding/>
                </section>
                {/* <section className={styles.EmergencyNurse}>
                    <  EmergencyNurse/>
                </section> */}
                <section className={styles.AboutUs}>
                    <  AboutUs/>
                </section>
                <section className={styles.Services}>
                    <  Services/>
                </section>
                <section className={styles.License}>
                    <  License/>
                </section>
                <section className={styles.Footer}>
                    <  Footer/>
                </section>
            </div>
     );
}
 
export default Home;