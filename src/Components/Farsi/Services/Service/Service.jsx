import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Styles
import styles from './Service.module.css'

const Service = ({productData}) => {

    // WIZYWIG in use
    const createText = () => {
        return {__html: productData.description}
    }

    // Requset Button
    const axiosConficPost = {
        headers: {
            "Dev": "vip4c@reDevelop3r",

            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers":"*",
            // "Access-Control-Allow-Methods":"*"
        },
    };

    const [userData, setUserData] = useState();
    
    const reqHandler = (event) => {
        event.preventDefault();
        setUserData(localStorage.getItem("user"))
        console.log(userData);
        axios.post(`https://api.vip4care.ir/blog/delete${productData._id}`, userData, axiosConficPost)
            .then((response)=> {
                if (response.data.success) {
                    alert("همکاران ما در نزدیکترین زمان ممکن با شما تماس می گیرند. ممنون از حسن انتخاب شما.")
                }
            })
            .catch((error)=> {
                alert("مشکلی پیش آمده. لطفا بعدن دوباره امتحان کنید.")
            })
    }

    return ( 
        <div className={styles.container}>
            <div className={styles.imgDiv}>
                <img src={productData.pic} alt="picture" />
            </div>
            <div className={styles.textDiv}>
                <h3>{productData.title}</h3>
                <div className={styles.description}>
                    <p dangerouslySetInnerHTML={createText()}></p>
                </div>
                <div className={styles.details}>
                    <section>
                        <p>مدل کالا: {productData.model}</p>
                        <p>گارانتی: {productData.guarantee}</p>
                    </section>
                    <section>
                        <p>قیمت: {productData.price}</p>
                        <p>تعداد: {productData.quantity}</p>
                    </section>
                </div>
                <button className={styles.req_btn} onClick={reqHandler}>ثبت درخواست</button>
            </div>
        </div>
     );
}
 
export default Service;