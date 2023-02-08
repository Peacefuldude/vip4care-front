import React, { useState } from 'react';
import axios from 'axios';

// Functons
import { serviceDesWrap } from '../../../../../../Functions/serviceDesWrap'
import { serviceNameWrap } from '../../../../../../Functions/serviceNameWrap'

// Styles
import styles from './DeleteServices.module.css'

const DeleteServices = ({productData}) => {

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

    const deleteHandler = (event) => {
        event.preventDefault();
        axios.delete(`https://api.vip4care.ir/addservice/delete${productData._id}`, axiosConficPost)
            .then((response)=> {
                if (response.data.success) {
                    alert("عملیات با موفقیت به پایان رسید.")
                    window.location.reload()
                }
            })
    }

    return ( 
        <div className={styles.container}>
            <div className={styles.imgDiv}>
                <img src={productData.pic} alt="picture" />
            </div>
            <div className={styles.textDiv}>
                <h3>{serviceNameWrap(productData.title)}</h3>
                <div className={styles.description}>
                    <p>{serviceDesWrap(productData.description)}</p>
                </div>
                <button onClick={deleteHandler}>حذف کارت</button>
            </div>
        </div>
     );
}
 
export default DeleteServices;