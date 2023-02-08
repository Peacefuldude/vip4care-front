import React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios'

// Components
import Header from '../../Header/Header';

// Styles
import styles from './MyAccount.module.css'

const MyAccount = () => {

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

    const [userProfile, setUserProfile] = useState([]);

    useEffect(() => {
        const getServices = async () => {
            axios.get("https://api.vip4care.ir/user/profile", axiosConficPost)
                .then((response)=> setUserProfile(response.data.user))
                // .catch((error)=> console.log(error))
        };

        getServices();

    }, []);

    return (
        <div>
            <section>
                <  Header/>
            </section>
            <div className={styles.container}>
                <section>
                    <h1 className={styles.account_h1}>حساب شما</h1>
                    <h2>{userProfile.username} :نام کاربری شما </h2>
                    <h3>{userProfile.email} :ایمیل</h3>
                    <h3>{userProfile.mobile} :شماره تلفن شما</h3>
                    <button className={styles.section_btn}><Link to="/editaccount">ویرایش اطلاعات حساب</Link></button>
                    <button className={styles.logout_btn}><Link to="/deleteaccount">خروج از حساب کاربری</Link></button>
                </section>
                {/* <main>
                    <h2>لیست تمامی خدمات دریافتی شما تا به اینجا</h2>
                    {
                        Services?.map(service => <  Service key={service.id} productData={service} />)
                    }
                </main> */}
            </div>
        </div>
     );
}
 
export default MyAccount;