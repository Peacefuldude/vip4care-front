import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Styles
import styles from './AdminVerfi.module.css'

const AdminVerfi = () => {

    const [data, setData] = useState({
        adminUsername: "",
        password: ""
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    }

    const [buttonDisable, setButtonDisable] = useState(false);
    const Navigate = useNavigate();
    const [welcomeMassage, setWelcomeMassage] = useState(false);
    const [errorMassage, setErrorMassage] = useState(false);

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

    const [isError, setIsError] = useState("")

    const submitHandler = (event) => {
        event.preventDefault();
        if (data) {
            const ADMIN_LOGIN_DATA = data;
            axios.post("https://api.vip4care.ir/auth/admin/login", ADMIN_LOGIN_DATA, axiosConficPost)
                // Uncomment the line below to see if the admin login is working or not.
                .then((response)=> {
                    localStorage.setItem('admin', JSON.stringify(response.data))
                    setButtonDisable(true)
                    setWelcomeMassage(true)
                    setErrorMassage(false)
                    setTimeout(()=>Navigate("/adminPage"), 2000)
                })
                .catch(error => {
                    alert("یوزرنیم یا رمز عبور وارد شده اشتباه بود. دوباره امتحان کنید.")
                    setIsError(error.message)
                })
        } else {
            setErrorMassage(true);
        }
    }

    return ( 
        <div>
            <div className={styles.container}>
                <form className={styles.formContainer} onSubmit={submitHandler}>
                    <h1>نام و رمز عبور خود را وارد کنید</h1>
                    <div>
                        <p>نام کاربری ادمین:</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='adminUsername'
                            placeholder='نام خود را وارد کنید'
                            value={data.adminUsername}
                            onChange={changeHandler}
                        />
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
                        />
                    </div>
                    <div className={buttonDisable ? styles.formButtonsDisabled : styles.formButtons}>
                        <button type="submit" className={styles.adminverfi_btn}>ورود</button>
                    </div>
                    <div className={styles.formdiv_Active}>
                        {welcomeMassage && <h6>خوش آمدید! منتظر بازنشانی صفحه بمانید</h6>}
                    </div>
                    <div className={styles.formdiv_Active}>
                        {errorMassage && <h6>نام یا رمز عبور شما نامعتبر است.</h6>}
                    </div>
                    <div className={styles.formdiv_Active}>
                        {isError && <h6>{isError}</h6>}
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default AdminVerfi;