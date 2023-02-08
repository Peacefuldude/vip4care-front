import React from 'react';
import { useState } from 'react';
import axios from 'axios';

// Styles
import styles from './UserCard.module.css'

const BlogCard = ({productData}) => {

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

    const isSpecial = productData.special;

    const isSpecialHandler = (event) => {
        event.preventDefault();
        const SPECIAL_DATA = {
            special: true,
        };
        axios.post(`https://api.vip4care.ir/user/staruser${productData._id}`, SPECIAL_DATA, axiosConficPost)
           .then((response)=> {
                if (response.data.success) {
                    alert("عملیات با موفقیت به پایان رسید.")
                    window.location.reload()
                }
            })
    }

    const notSpecialHandler = (event) => {
        event.preventDefault();
        const NOT_SPECIAL_DATA = {
            special: false,
        };
        axios.post(`http://api.vip4care.ir/user/staruser${productData._id}`, NOT_SPECIAL_DATA, axiosConficPost)
            // Uncomment to see the full response log
            .then(response => console.log(response))
            .then(window.location.reload())
            .catch((errors)=> console.log(errors))
    }

    return ( 
        <div className={styles.container}>
            <p></p>
            <h3>{productData.username}</h3>
            <p>{productData.email}</p>
            {
                isSpecial && <div>
                    <p>کاربر ستاره دار است!</p>
                </div>
            }
            <button onClick={isSpecialHandler} className={isSpecial ? styles.star_btn : styles.star_btn_active}>ستاره دار کردن</button>
            <button onClick={notSpecialHandler} className={isSpecial ? styles.star_btn_active : styles.star_btn}>برداشتن ستاره</button>
        </div>
     );
}
 
export default BlogCard;