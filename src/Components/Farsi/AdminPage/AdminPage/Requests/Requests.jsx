import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import RequestsCard from "./Requests/RequestsCard";

// Styles
import styles from "./Requests.module.css";

const Requests = () => {
    const Navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("admin")) {
            Navigate("/home");
        }
    }, []);

    const [deleteRequests, setDeleteRequests] = useState([]);

    useEffect(() => {
        const getRequests = async () => {

            const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pblVzZXJuYW1lIjoic2luYWtoIiwiaWF0IjoxNjcwMzUxNTE4LCJleHAiOjE2NzEyMTU1MTh9.zUx8Imt-8g7RecOZ39Jez3esTRJ-huQP99uGmArPVqA"
            await axios.get("https://api.vip4care.ir/requestService/get", {
                // "Content-Type": "application/json",
                // "Dev": "vip4c@reDevelop3r",
                // "Authorization": "Bearer " + jwtToken,
                // "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Headers":"*",
                // "Access-Control-Allow-Methods":"*"
            })
                .then((response) => {
                    setDeleteRequests(response.data.requested)
                })
                // .catch((error)=> console.log(error))
                // .then((response)=> console.log(response.data.blogs))
        };
        
        getRequests();
    }, []);

    return (
        <div className={styles.container}>
            <section>
                <p>فهرست</p>
                <button className={styles.section_btn}>
                    <Link to="/deleteServices">حدف خدمات</Link>
                </button>
                <button className={styles.section_btn}>
                    <Link to="/editServices">ویرایش خدمات</Link>
                </button>
                <button className={styles.section_btn}>
                    <Link to="/addServices">اضافه کردن خدمات</Link>
                </button>
                <button className={styles.section_btn}>
                    <Link to="/users">بخش کاربرها</Link>
                </button>
                <button className={styles.section_btn}>
                    <Link to="/addBlog">اضافه کردن بلاگ</Link>
                </button>
                <button className={styles.section_btn}>
                    <Link to="/deleteBlog">حذف بلاگ</Link>
                </button>
                <button className={styles.section_btn}>
                    <Link to="/editBlog">ویرایش بلاگ</Link>
                </button>
                <button className={styles.section_btn}>
                    <Link to="/resume">درخواست های همکاری</Link>
                </button>
                <button className={styles.section_btn}>
                    <Link to="/deleteRequests">درخواست ها</Link>
                </button>
            </section>
            <main>
                {deleteRequests?.map((request) => (
                    <RequestsCard key={request._id} productData={request} />
                ))}
            </main>
        </div>
    );
};

export default Requests;
