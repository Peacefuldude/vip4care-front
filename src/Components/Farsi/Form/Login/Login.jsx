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
import styles from './Login.module.css'

const Login = () => {

    const [data, setData] = useState({
        mobile: "",
        password: ""
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    }

    const [errors, setErrors] = useState({});
    useEffect(() => {
        setErrors(Validate(data, "login"))
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

    const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pblVzZXJuYW1lIjoic2luYWtoIiwiaWF0IjoxNjcwMzUxNTE4LCJleHAiOjE2NzEyMTU1MTh9.zUx8Imt-8g7RecOZ39Jez3esTRJ-huQP99uGmArPVqA"
    const axiosConficPost = {
        headers: {
            "Dev": "vip4c@reDevelop3r",
            "Authorization": "Bearer " + jwtToken,

            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers":"*",
            // "Access-Control-Allow-Methods":"*"
        },
    };

    const [isError_1, setIsError_1] = useState("")

    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            const LOGIN_DATA = data;
            setButtonDisable(true)
            axios.post("https://api.vip4care.ir/auth/login", LOGIN_DATA, axiosConficPost)
                .then((response)=> {
                    if (response.data.success) {
                        localStorage.setItem('user', JSON.stringify(response.data))
                        setWelcomeMassage(true)
                        setTimeout(()=>Navigate("/home"), 2000)
                    }
                })

                .catch((errors)=> {
                    if (errors.response.data.message) {
                        setIsError_1(errors.response.data.message)
                        console.log(errors)
                        setButtonDisable(false)
                    }
                })
        } else {
            setTouched({
                name: true,
                password: true
            })
        }

    }

    return ( 
        <div className={styles.maindiv}>
            <section>
                <  Header/>
            </section>
            <div className={styles.container}>
                <form className={styles.formContainer} onSubmit={submitHandler}>
                    <h1>به حساب خود وارد شوید</h1>
                    <div>
                        <p>شماره تلفن همراه:</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='mobile'
                            placeholder='تلفن همراه خود را وارد کنید'
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
                    <div className={buttonDisable ? styles.formButtonsDisabled : styles.formButtons}>
                        <button type="button" className={styles.signUpButton}><Link to="/signup">حساب ندارید؟</Link></button>
                        <button type="submit" className={styles.submitButton}>ورود</button>
                    </div>
                    { isError_1 &&
                        <div className={isError_1 ? styles.formdiv_Active : styles.formdiv}>
                            <h6>{isError_1}</h6>
                        </div>
                    }
                    <div className={styles.forpassline}></div>
                    <div className={styles.forpassdiv}>
                        <Link to="/forgotPass"><p>رمز خود را فراموش کرده اید؟</p></Link>
                    </div>
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
 
export default Login;