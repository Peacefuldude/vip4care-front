import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Functions
import { Validate } from '../../../../../Functions/Validate'

// Styles
import styles from './EmergencyNurse.module.css'

const EmergencyNurse = () => {

    const [data, setData] = useState({
        applier_name: "",
        mobile: "",
        service: ""
    })

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        })
    }

    const [errors, setErrors] = useState({});
    useEffect(() => {
        setErrors(Validate(data))
    }, [])

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

    const Navigate = useNavigate();
    const [buttonDisable, setButtonDisable] = useState(false);
    const [massage, setMassage] = useState(false);

    const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pblVzZXJuYW1lIjoic2luYWtoIiwiaWF0IjoxNjcwMzUxNTE4LCJleHAiOjE2NzEyMTU1MTh9.zUx8Imt-8g7RecOZ39Jez3esTRJ-huQP99uGmArPVqA"
    const axiosConficPost = {
        headers: {
            "Dev": "vip4c@reDevelop3r",
            // "Authorization": "Bearer " + jwtToken,
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers":"*",
            // "Access-Control-Allow-Methods":"*"
        },
    }

    const [isError, setIsError] = useState("");
    const [responseData, setResponseData] = useState();

    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            const EMER_NUR_DATA = data;
            setButtonDisable(true)
            axios.post("https://api.vip4care.ir/requestService/create", EMER_NUR_DATA, axiosConficPost)
                .then((response)=> {
                    if (response.data.success) {
                        setMassage(true)
                    }
    
                    })

                    .catch((errors)=> {
                        if (errors.response.data.message) {
                            setIsError(errors.response.data.message)
                            setButtonDisable(false)
                        }
                    })

                } else {
                    setTouched({
                        phoneNumber: true,
                        description: true,
                        name: true
                    })
                }
            }
            
            return ( 
                <div className={styles.container}>
            <div className={styles.label}>
                <div className={styles.label_title}>
                    <div></div>
                    <h2>به کمک نیاز دارید؟ درخواست خود را وارد کنید</h2>
                    <div></div>
                </div>
                <p>از طریق فرم زیر درخواست خود را برای دریافت پرستار ثبت کنید تا در سریعترین زمان ممکن با شما تماس گرفته شود</p>
            </div>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                { isError &&
                    <div className={isError ? styles.formdiv_Active : styles.formdiv}>
                        <h6>{isError}</h6>
                    </div>
                }
                { massage &&
                    <div className={massage ? styles.formdiv_Active : styles.formdiv}>
                        <h6>اطلاعات شما با موفقیت برای دفتر مرکزی ما ارسال شد. در نزدیکترین فرصت با شما تماس گرفته می شود</h6>
                    </div>
                }
                <div className={buttonDisable ? styles.submitButton : styles.submitButton_active}>
                    <button type="submit">ثبت اطلاعات</button>
                </div>
                <div className={styles.input}>
                    <div className={(errors.description && touched.description) ? styles.formdiv_Active : styles.formdiv}>
                        {<h6>{errors.description}</h6>}
                    </div>
                    <input
                        className={styles.formInput}
                        type='text'
                        name='service'
                        placeholder='توضیحات'
                        value={data.service}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        onBlur={unFocusHandler}
                        />
                </div>
                <div className={styles.input}>
                    <div className={(errors.name && touched.name) ? styles.formdiv_Active : styles.formdiv}>
                        {<h6>{errors.name}</h6>}
                    </div>
                    <input
                        className={styles.formInput}
                        type='text'
                        name='applier_name'
                        placeholder='نام شما'
                        value={data.applier_name}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        onBlur={unFocusHandler}
                    />
                </div>
                <div className={styles.input}>
                <div className={(errors.phoneNumber && touched.phoneNumber) ? styles.formdiv_Active : styles.formdiv}>
                        {<h6>{errors.phoneNumber}</h6>}
                    </div>
                    <input 
                        className={styles.formInput}
                        type='tel'
                        name='mobile'
                        placeholder='تلفن همراه'
                        value={data.mobile}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        onBlur={unFocusHandler}
                    />
                </div>
            </form>
            <div className={styles.label_footer}>
                <div></div>
                <h6>در صورت نیاز مبرم به کمک های اولیه از طریق کلید سمت راست پایین صفحه با مشاوران ما تماس برقرار کنید</h6>
                <div></div>
            </div>
        </div>
     );
}
 
export default EmergencyNurse;