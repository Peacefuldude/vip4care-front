import React from 'react';

// Styles
import styles from './ResumeCard.module.css'

const ResumeCard = ({productData}) => {

    return ( 
        <div className={styles.container}>
            <h3>نام کوچک: {productData.first_name}</h3>
            <h3>نام خانوادگی: {productData.last_name}</h3>
            <h3>ایمیل: {productData.email}</h3>
            <h3>شماره تلفن: {productData.phone}</h3>
            <h3>برای دانلود رزومه بر لینک زیر کلیک کنید</h3>
            <button><a href={productData.resume}>دانلود</a></button>
        </div>
     );
}
 
export default ResumeCard;