import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Service from "./Delete Blogs/DeleteBlogs";

// Styles
import styles from "./DeleteBlog.module.css";

const DeleteBlog = () => {
    const Navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("admin")) {
            Navigate("/home");
        }
    }, []);

    const [DeleteBlog, setDeleteBlog] = useState([]);

    useEffect(() => {
        const getblogs = async () => {
            const jwtToken =
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pblVzZXJuYW1lIjoic2luYWtoIiwiaWF0IjoxNjcwMzUxNTE4LCJleHAiOjE2NzEyMTU1MTh9.zUx8Imt-8g7RecOZ39Jez3esTRJ-huQP99uGmArPVqA";
            const response = await axios
                .get("https://api.vip4care.ir/blog/get", {
                    "Content-Type": "application/json",
                    Dev: "vip4c@reDevelop3r",
                    Authorization: "Bearer " + jwtToken,
                    // "Access-Control-Allow-Origin": "*",
                    // "Access-Control-Allow-Headers":"*",
                    // "Access-Control-Allow-Methods":"*"
                })
                .then((response) => setDeleteBlog(response.data.blogs));
            // .then((response)=> console.log(response.data.blogs))
        };

        getblogs();
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
                {DeleteBlog?.map((service) => (
                    <Service key={service._id} productData={service} />
                ))}
            </main>
        </div>
    );
};

export default DeleteBlog;
