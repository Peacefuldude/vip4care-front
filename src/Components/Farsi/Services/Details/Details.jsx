import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

// Context -- not working in new tap, exclusively for opening the link in one click!
// import { ServicesContext } from '../ServicesContextProvider/ServicesContextProvider';

// Components
import Header from "../../Header/Header";
import EmergencyCall from "../../Emergency Call/EmergencyCall";
import License from "../../License/License";
import Footer from "../../Footer/Fooer";

// Styles
import styles from "./Details.module.css";

const Details = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    const BASE_URL = "https://api.vip4care.ir/addService";

    useEffect(() => {
        const getServices = async () => {
            await axios.get(`${BASE_URL}/getcertain${id}`)
                // uncomment to see if the line above is working
                .then((response)=> {
                    setData(response.data.foundedService)
                    console.log(data);
                })
        };
        
        getServices();
    }, []);

    // WIZYWIG in use
    const createText = () => {
        return {__html: data.description}
    }

    return (
        <div className={styles.container}>
            {data.length !== 0 && (
                <div>
                    <section>
                        <  EmergencyCall/>
                    </section>
                    <section>
                        <  Header/>
                    </section>
                    <main className={styles.main_content}>
                        <img src={data.pic} alt="image" />
                        <h1>{data.title}</h1>
                        <button className={styles.details_btn}><a href="#requestsec">ثبت درخواست</a></button>
                        <p dangerouslySetInnerHTML={createText()} />
                        <Link to="/home">
                            <button className={styles.details_btn}>به خانه برگردید</button>
                        </Link>
                    </main>
                    <section>
                        <  License/>
                    </section>
                    <section>
                        <  Footer/>
                    </section>
                </div>
            )}
        </div>
    );
};

export default Details;
