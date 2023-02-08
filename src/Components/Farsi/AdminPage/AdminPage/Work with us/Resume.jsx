import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import UserCard from "./Resume/ResumeCard";

// Styles
import styles from "./Resume.module.css";

const Resume = () => {
    const Navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("admin")) {
            Navigate("/home");
        }
    }, []);

    const userToken = JSON.parse(localStorage.getItem('admin'));

    const axiosConficPost = {
        headers: {
            "Dev": "vip4c@reDevelop3r",
            "Authorization": "Bearer " + userToken.token,

            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers":"*",
            // "Access-Control-Allow-Methods":"*"
        },
    };

    const [users, setUsers] = useState([]);

    const BASE_URL = "https://api.vip4care.ir/admin";

    useEffect(() => {
        const getResumes = async () => {
            const response = await axios.get(`${BASE_URL}/get-all-cooperation`, axiosConficPost)
                .then((respone)=> {
                    console.log(respone)
                    setUsers(respone.data.list)
                })
                .catch((errors)=> console.log(errors))
        };

        getResumes();
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
                {users?.map((blog) => (
                    <UserCard key={blog._id} productData={blog} />
                ))}
            </main>
        </div>
    );
};

export default Resume;
