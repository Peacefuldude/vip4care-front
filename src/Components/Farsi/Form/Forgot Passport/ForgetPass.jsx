import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Components
import Header from "../../Header/Header";

// Functions
import { Validate } from "../../../../Functions/Validate";

// Styles
import styles from "./ForgetPass.module.css";

const ForgetPass = () => {
    const [data, setData] = useState({
        mobile: "",
    });

    const changeHandler = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const [errors, setErrors] = useState({});
    useEffect(() => {
        setErrors(Validate(data, "forgetpass"));
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

    const [buttonDisable, setButtonDisable] = useState(false);
    const [massage, setMassage] = useState(false);
    const [code, setCode] = useState();

    const axiosConficPost = {
        headers: {
            "Dev": "vip4c@reDevelop3r",
            // "Authorization": "Bearer " + jwtToken,

            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers":"*",
            // "Access-Control-Allow-Methods":"*"
        },
    };

    const [isError_1, setIsError_1] = useState("")

    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            const FOR_PASS_DATA = data;
            setButtonDisable(true)
            axios
                .post(`https://api.vip4care.ir/auth/sendotp`, FOR_PASS_DATA, axiosConficPost)
                .then((response)=> {
                    if (response.data.success) {
                        setMassage(true)
                        setCode(response)
                    }
                })

                .catch((errors)=> {
                    if (errors.response.data.message) {
                        setIsError_1(errors.response.data.message)
                        setButtonDisable(false)
                    }
                })
        } else {
            setTouched({
                mobile: true,
            });
        }
    };

    // Code input functions

    const [codeMassage, setCodeMassage] = useState(true);
    const [isError_2, setIsError_2] = useState("")
    const [isCode, setIsCode] = useState("")
    const [codeTrue, setCodeTrue] = useState(false)

    const [codeData, setCodeData] = useState({
        code: "",
    });

    const codeChangeHandler = (event) => {
        setCodeData({
            ...codeData,
            [event.target.name]: event.target.value,
        });
    };

    const codeCheckHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            const CODE_PASS_DATA = codeData;
            setCodeMassage(true)
            axios
                .post(`https://api.vip4care.ir/auth/checkotp${data.mobile}`, CODE_PASS_DATA, axiosConficPost)
                .then((response)=> {
                    if (response.data.success) {
                        setCode(response)
                        setCodeTrue(true)
                        setIsError_2("")
                        setIsCode(response.data.message)
                    }
                })

                .catch((errors)=> {
                    if (errors.response.data.message) {
                        setIsError_2(errors.response.data.message)
                        setCodeMassage(true)
                    }
                })
        } else {
            setTouched({
                mobile: true,
            });
        }
    };

    // Uncomment and change the "code" condition to "isTrue" to see the results offline.
    // const isTrue = true;

    // NewPass input functions
    const [newPassData, setNewPassData] = useState({
        password: "",
        confirmPassword: ""
    });

    const newPassChangeHandler = (event) => {
        setNewPassData({
            ...newPassData,
            [event.target.name]: event.target.value,
        });
    };

    const [newPassButtonDispable, setNewPassButtonDispable] = useState(false);
    const Navigate = useNavigate();
    const [isError_3, setIsError_3] = useState("")
    const [isCode_2, setIsCode_2] = useState("")

    const newPassHandler = (event) => {
        event.preventDefault();
        const NEW_PASS_DATA = newPassData;
        setNewPassButtonDispable(true)
        axios
            .post(
                `https://api.vip4care.ir/auth/forgotPassword${data.mobile}`,
                NEW_PASS_DATA,
                axiosConficPost
            )
            .then((response)=> {
                if (response.data.success) {
                    setIsCode_2(response.data.message)
                    setTimeout(() => Navigate("/login"), 3000)
                }
            })

            .catch((errors)=> {
                if (errors.response.data.message) {
                    setIsError_3(errors.response.data.message)
                    console.log(errors)
                    setNewPassButtonDispable(false)
                }
            })
    };

    // Uncomment and change the "codeTrue" condition to "imTrue" to see the results offline.
    // const imTrue = true;

    return (
        <div>
            <section>
                <Header />
            </section>
            <div className={styles.container}>
                <form className={styles.formContainer} onSubmit={submitHandler}>
                    <h1>فراموشی رمز عبور</h1>
                    <div>
                        <p>شماره تلفن شما:</p>
                        <input
                            className={styles.formInput}
                            type="text"
                            name="mobile"
                            placeholder="شماره تلفن خود را وارد کنید"
                            value={data.mobile}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div
                            className={
                                errors.mobile && touched.mobile
                                    ? styles.formdiv_Active
                                    : styles.formdiv
                            }
                        >
                            {<h6>{errors.mobile}</h6>}
                        </div>
                    </div>
                    <div className={buttonDisable && styles.submitButton}>
                        <button type="submit" className={styles.button}>
                            درخواست کد بازیابی
                        </button>
                    </div>
                    <div className={styles.submitdiv}>
                        {massage && (
                            <h6>
                                در صورت وارد کردن درست اطلاعات خود، کد بازیابی
                                ای به شما ارسال می شود، کد مورد نظر را در فیلد
                                زیر وارد کنید.
                            </h6>
                        )}
                        { isError_1 &&
                            <div className={isError_1 ? styles.formdiv_Active : styles.formdiv}>
                                <h6>{isError_1}</h6>
                            </div>
                        }
                    </div>
                </form>
                {code && (
                    <div className={styles.formContainer}>
                        <div>
                            <input
                                className={styles.formInput}
                                type="text"
                                name="code"
                                placeholder="Code"
                                value={codeData.code}
                                onChange={codeChangeHandler}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                onClick={codeCheckHandler}
                                className={
                                    codeMassage
                                        ? styles.codeCheck
                                        : styles.codeCheckfalse
                                }
                            >
                                تایید کد
                            </button>
                        { isError_2 &&
                            <div className={isError_2 ? styles.formdiv_Active : styles.formdiv}>
                                <h6>{isError_2}</h6>
                            </div>
                        }
                        { isCode &&
                            <div className={isCode ? styles.formdiv_Active : styles.formdiv}>
                                <h6>{isCode}</h6>
                            </div>
                        }
                        </div>
                    </div>
                )}
                {codeTrue && (
                    <div className={styles.formContainer}>
                        <div>
                            <p>رمز عبور جدید خود را وارد:</p>
                            <input
                                className={styles.formInput}
                                type="text"
                                name="newpass"
                                placeholder="رمز عبور خود را وارد کنید"
                                value={data.newpass}
                                onChange={newPassChangeHandler}
                            />
                        </div>
                        <div>
                            <p>رمز عبور جدید خود را وارد کنید:</p>
                            <input
                                className={styles.formInput}
                                type="text"
                                name="confirmnewpass"
                                placeholder="رمز عبور خود را وارد کنید"
                                value={data.confirmnewpass}
                                onChange={newPassChangeHandler}
                            />
                        </div>
                        <div
                            className={
                                newPassButtonDispable && styles.submitButton
                            }
                        >
                            <button
                                type="submit"
                                onClick={newPassHandler}
                                className={
                                    codeMassage
                                        ? styles.codeCheck
                                        : styles.codeCheckfalse
                                }
                            >
                                تایید رمز جدید
                            </button>
                            { isError_3 &&
                                <div className={isError_3 ? styles.formdiv_Active : styles.formdiv}>
                                    <h6>{isError_3}</h6>
                                </div>
                            }
                            { isCode_2 &&
                                <div className={isCode_2 ? styles.formdiv_Active : styles.formdiv}>
                                    <h6>{isCode_2}</h6>
                                </div>
                            }
                        </div>
                        
                    </div>
                )}
            </div>
        </div>
    );
};

export default ForgetPass;
