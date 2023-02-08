import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// Components
import Header from '../../../Header/Header';

// Functions
import { EditAccountValidate } from '../../../../../Functions/EditAccountValidate';

// Styles
import styles from './EditAccount.module.css'

const EditAccount = () => {

    const userToken = JSON.parse(localStorage.getItem('user'));

    const axiosConficPost = {
        headers: {
            "Dev": "vip4c@reDevelop3r",
            "Authorization": "Bearer " + userToken.token,

            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers":"*",
            // "Access-Control-Allow-Methods":"*"
        },
    };

    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: ""
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    }

    const [buttonDisable, setButtonDisable] = useState(false);
    const Navigate = useNavigate();
    const [welcomeMassage, setWelcomeMassage] = useState(false);

    const axiosConfic = {
        headers: {
            'Content-Type': 'application/json',
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers":"*",
            // "Access-Control-Allow-Methods":"*"
        }
    }

    const [isError, setIsError] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        if (data) {
            const EDIT_DATA = data;
            axios.post("https://api.vip4care.ir/user/profile", EDIT_DATA, axiosConficPost)
                .then(setButtonDisable(true))
                .then(setWelcomeMassage(true))
                .then(setTimeout(()=>Navigate("/"), 3000))
                .catch(error => {
                    setIsError(error.message);
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
                    <h1>اطلاعات حساب خود را ویرایش کنید</h1>
                    <h4>شما می توانید هرچه را که می خواهید را تغییر دهید و نگران خالی بودن باقی فیلدها نباشید.</h4>
                    <div>
                        <p>نام:</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='first_name'
                            placeholder='نام خود را وارد کنید.'
                            value={data.first_name}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <p>نام خانوادگی:</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='last_name'
                            placeholder='نام خانوادگی خود را وارد کنید.'
                            value={data.last_name}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <p>ایمیل:</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='email'
                            placeholder='ایمیل خود را وارد کنید.'
                            value={data.email}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className={buttonDisable ? styles.formButtonsDisabled : styles.formButtons}>
                        <button type="submit" className={styles.submitButton}>ثبت نام</button>
                    </div>
                    <div className={isError ? styles.formdiv_Active : styles.formdiv}>
                        <h6>{isError}</h6>
                    </div>
                    <div className={styles.formdiv}>
                        {welcomeMassage && <h6>خوش آمدید! منتظر بازنشانی صفحه بمانید</h6>}
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default EditAccount;