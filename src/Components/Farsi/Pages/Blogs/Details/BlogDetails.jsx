import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

// Context -- not working in new tap, exclusively for opening the link in one click!
// import { ServicesContext } from '../ServicesContextProvider/ServicesContextProvider';

// Components
import Header from "../../../Header/Header";
import EmergencyNurse from "../../Home/Emergency Nurse/EmergencyNurse";
import EmergencyCall from "../../../Emergency Call/EmergencyCall";
import License from "../../../License/License";
import Footer from "../../../Footer/Fooer";

// Styles
import styles from "./BlogDetails.module.css";

const BlogDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    const BASE_URL = "https://api.vip4care.ir/blog";

    useEffect(() => {
        const getServices = async () => {
            await axios.get(`${BASE_URL}/getcertain${id}`)
                // uncomment to see if the line above is working
                .then((response)=> setData(response.data.editingBlogs))
        };
        
        getServices();
    }, []);

    // WIZYWIG in use
    const createText = () => {
        return {__html: data.description}
    }

    return (
        <div className={styles.container}>
            {data !== 0 && (
                <div>
                    <section>
                        <  EmergencyCall/>
                    </section>
                    <section>
                        <  Header/>
                    </section>
                    <main className={styles.main_content}>
                        <img src={data.tombNail} alt="image"/>
                        <h1>{data.title}</h1>
                            <p dangerouslySetInnerHTML={createText()} />
                        <Link to="/blog">
                            <button className={styles.details_btn}>به صفحه بلاگ ها برگردید</button>
                        </Link>
                    </main>
                    <section>
                        <  EmergencyNurse/>
                    </section>
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

export default BlogDetails;
