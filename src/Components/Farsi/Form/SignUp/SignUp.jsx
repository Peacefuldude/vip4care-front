import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// Components
import Header from '../../Header/Header';

// Functions
import { Validate } from '../../../../Functions/Validate';

// Styles
import styles from './SignUp.module.css'

const SignUp = () => {

    const [data, setData] = useState({
        name: "",
        username: "",
        mobile: +98,
        email: "",
        password: "",
        confirmPassword: ""
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    }

    const [errors, setErrors] = useState({});
    useEffect(() => {
        setErrors(Validate(data, "signup"))
    }, [data])

    const [touched, setTouched] = useState({});
    const focusHandler = (event) => {
        setTouched({
            ...touched, [event.target.name]: true,
    })
    }
    const unFocusHandler = (event) => {
        setTouched({
            ...touched, [event.target.name]: false,
        })
    }

    const [buttonDisable, setButtonDisable] = useState(false);
    const Navigate = useNavigate();
    const [welcomeMassage, setWelcomeMassage] = useState(false);

    const axiosConficPost = {
        headers: {
            "Dev": "vip4c@reDevelop3r",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":"*",
            "Access-Control-Allow-Methods":"*"
        },
    };

    const [isError_1, setIsError_1] = useState("");
    
    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            const SIGN_UP_DATA = data;
            setButtonDisable(true)
            axios.post("https://api.vip4care.ir/auth/register", SIGN_UP_DATA, axiosConficPost)
                .then((response)=> {
                    // console.log(response)
                    if (response.status = 200) {
                        setWelcomeMassage(true)
                        setTimeout(()=>Navigate("/login"), 2000)
                    }

                })

                .catch((errors)=> {
                    if (errors.response.data.message) {
                        setIsError_1(errors.response.data.message)
                        // console.log(errors.response.data.message)
                        setButtonDisable(false)
                    }
                })

            } else {
                setTouched({
                username: true,
                phonenumber: true,
                password: true,
                confirmPassword: true
            })
        }
        
    }

    return ( 
        <div>
            <section>
                <  Header/>
            </section>
            <div className={styles.container}>
                <form className={styles.formContainer} onSubmit={submitHandler}>
                    <h1>حساب کاربری خود را بسازید</h1>
                    <div>
                        <p>نام:</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='name'
                            placeholder='وارد کردن نام اجباری نیست'
                            value={data.name}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        {/* Name is not requiered */}
                        {/* <div className={(errors.name && touched.name) ? styles.formdiv_Active : styles.formdiv}>
                            {<h6>{errors.name}</h6>}
                        </div> */}
                    </div>
                    <div>
                        <p>نام کاربری:</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='username'
                            placeholder='نام کاربری خود را وارد کنید'
                            value={data.username}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div className={(errors.username && touched.username) ? styles.formdiv_Active : styles.formdiv}>
                            {<h6>{errors.username}</h6>}
                        </div>
                    </div>
                    <div>
                        <p>تلفن همراه:</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='mobile'
                            placeholder='شماره تلفن همراه خود را وارد کنید'
                            value={data.mobile}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div className={(errors.mobile && touched.mobile) ? styles.formdiv_Active : styles.formdiv}>
                            {<h6>{errors.mobile}</h6>}
                        </div>
                    </div>
                    <div>
                        <p>ایمیل شما:</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='email'
                            placeholder='ایمیل خود را وارد کنید'
                            value={data.email}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div className={(errors.email && touched.email) ? styles.formdiv_Active : styles.formdiv}>
                            {<h6>{errors.email}</h6>}
                        </div>
                    </div>
                    <div>
                        <p>رمز عبور:</p>
                        <input 
                            className={styles.formInput}
                            type='password'
                            name='password'
                            placeholder='رمز عبور خود را وارد کنید'
                            value={data.password}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div className={(errors.password && touched.password) ? styles.formdiv_Active : styles.formdiv}>
                            {<h6>{errors.password}</h6>}
                        </div>
                    </div>
                    <div>
                        <p>تکرار رمز عبور:</p>
                        <input
                            className={styles.formInput}
                            type="password"
                            name="confirmPassword"
                            placeholder='رمز عبور خود را دوباره وارد کنید'
                            value={data.confirmPassword}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        />
                        <div className={styles.formdiv}>
                            {errors.confirmPassword && touched.confirmPassword && <h6>{errors.confirmPassword}</h6>}
                        </div>
                    </div>
                    <div className={buttonDisable ? styles.formButtonsDisabled : styles.formButtons}>
                        <button type="button" className={styles.signUpButton}><Link to="/login">حساب دارید؟</Link></button>
                        <button type="submit" className={styles.submitButton}>ثبت نام</button>
                    </div>
                    { isError_1 &&
                        <div className={isError_1 ? styles.formdiv_Active : styles.formdiv}>
                            <h6>{isError_1}</h6>
                        </div>
                    }
                    { welcomeMassage &&
                        <div className={welcomeMassage ? styles.formdiv_Active : styles.formdiv}>
                            <h6>خوش آمدید! منتظر بازنشانی صفحه بمانید</h6>
                        </div>
                    }
                </form>
            </div>
        </div>
     );
}
 
export default SignUp;