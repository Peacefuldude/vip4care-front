import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// Functions
import { AddServiceVal } from "../../../../../Functions/AddServiceVal";

// Styles
import styles from "./AddServices.module.css";

const AddServices = () => {
    const Navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("admin")) {
            Navigate("/home");
        }
    }, []);

    const [data, setData] = useState({
        title: "",
        description: "",
    });

    const changeHandler = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const [errors, setErrors] = useState({});
    useEffect(() => {
        setErrors(AddServiceVal(data));
    }, [data]);

    const [touched, setTouched] = useState({});
    const focusHandler = (event) => {
        setTouched({
            ...touched,
            [event.target.name]: true,
        });
    };
    const unFocusHandler = (event) => {
        setTouched({
            ...touched,
            [event.target.name]: false,
        });
    };

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [buttonDisable, setButtonDisable] = useState(false);
    const [addMassage, setAddMassage] = useState(false);
    const [errorMassage, setErrorMassage] = useState(false);
    const [isError, setIsError] = useState("");

    const userToken = JSON.parse(localStorage.getItem("admin"));

    const axiosConficPost = {
        headers: {
            Dev: "vip4c@reDevelop3r",
            Authorization: "Bearer " + userToken.token,

            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers":"*",
            // "Access-Control-Allow-Methods":"*"
        },
    };

    const [image, setImage] = useState({ preview: "", data: "" });
    const [status, setStatus] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        let formeData = new FormData();
        formeData.append("file", image.data);
        console.log(image.data);
        if (!Object.keys(errors).length) {
            const ADD_SERVICE_DATA = data;
            setButtonDisable(true);
            axios
                .post(
                    "https://api.vip4care.ir/addService/create",
                    ADD_SERVICE_DATA,
                    axiosConficPost
                )
                .then((response) => {
                    if (response.data.success) {
                        alert("کارت خدمات اضافه شد!");
                        setAddMassage(true);
                        setTimeout(() => Navigate("/addServices"), 2000);
                    }
                })
                .catch((errors) => {
                    if (errors.response.data.message) {
                        setIsError(errors.response.data.message);
                        setButtonDisable(false);
                        console.log(errors);
                    }
                });
        } else {
            setErrorMassage(true);
            setTouched({
                title: true,
                description: true,
            });
        }
    };

    return (
        <div>
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
                    F
                </section>
                <form className={styles.formContainer} onSubmit={submitHandler}>
                    <h1>مشخصات کارت جدید را وارد کنید</h1>
                    <div>
                        <p>
                            در اینجا فقط مشخصات کلی ای وارد کنید، مثلا نام را
                            بلاگ یک بنویسید و توضحات را توضیحات بلاگ یک تا در
                            بخش ویرایش بلاگ مشخصات کامل را وارد کنید
                        </p>
                        {/* <input
                            type="file"
                            name="file"
                            onChange={fileChangeHandler}
                        /> */}
                    </div>
                    <div>
                        <p>سرتیتر:</p>
                        <input
                            className={styles.formInput}
                            type="text"
                            name="title"
                            placeholder="مثلا: کارت خدماتی شماره 1"
                            value={data.title}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div
                            className={
                                errors.title && touched.title
                                    ? styles.formdiv_Active
                                    : styles.formdiv
                            }
                        >
                            {<h6>{errors.title}</h6>}
                        </div>
                    </div>
                    <div>
                        <p>توضیحات:</p>
                        <textarea
                            className={styles.formInput}
                            name="description"
                            rows="5"
                            cols="50"
                            placeholder="مثلا: توضیحات کارت خدماتی شماره 1"
                            value={data.description}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div
                            className={
                                errors.description && touched.description
                                    ? styles.formdiv_Active
                                    : styles.formdiv
                            }
                        >
                            {<h6>{errors.description}</h6>}
                        </div>
                    </div>
                    <div
                        className={
                            buttonDisable
                                ? styles.formButtonsDisabled
                                : styles.formButtons
                        }
                    >
                        <button type="submit" className={styles.submitButton}>
                            تایید کارت جدید
                        </button>
                    </div>
                    <div className={styles.formdiv}>
                        {addMassage && <h6>کارت جدید با موفقیت ایجاد شد</h6>}
                    </div>
                    <div className={styles.formdiv_Active}>
                        {isError && <h6>{isError}</h6>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServices;
