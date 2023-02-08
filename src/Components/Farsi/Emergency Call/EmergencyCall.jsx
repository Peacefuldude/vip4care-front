import React from 'react'
import { useState } from 'react'

// Images
import Call from '../../../Images/phone.png'

// Styles
import styles from './EmergencyCall.module.css'

const EmergencyCall = () => {

    const [active, setActive] = useState(false)
    const [containerActive, setContainer] = useState(true)

    // const browserChecker = () => {
    //     if ('clipboard' in navigator) {
    //         navigator.clipboard.writeText('09032346878');
    //         alert("شماره تلفن ما در کلیپبورد شما کپی شد!")
    //     } else {
    //         setContainer(false);
    //     }
    // }

    const checkNavigator = () => {
        if ('clipboard' in navigator) {
            navigator.clipboard.writeText('09032346878');
            alert("شماره تلفن ما در دستگاه شما کپی شد!")
        } else if (!'clipboard' in navigator) {
            window.clipboardData.setData("Text", '09032346878')
            alert("شماره تلفن ما در دستگاه شما کپی شد!")
        } else {
            alert("مرورگر شما اجازه استفاده از این دکمه را نمی دهد. شماره تلفن ما را از فوتر سایت پیدا کنید.")
        }
    }

    return ( 
        // <div className={styles.container} onClick={() => {navigator.clipboard.writeText("09032346878"); setActive(!active); setTimeout(() => setActive(false), 2000)}}>
        <div className={styles.container} onClick={()=> {checkNavigator()}}>
        {/* // <div className={containerActive ? styles.container : styles.containerNoActive} onClick={()=> {browserChecker()}}> */}
            {/* <div className={active ? styles.copy_active : styles.copy}>
                <p>!کپی شد</p>
            </div> */}
            <img src={Call} alt="press to call" />
        </div>
     );
}
 
export default EmergencyCall;