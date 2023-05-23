import React from 'react'

// Styles
import styles from './Footer.module.css'

const Footer = () => {
    return ( 
        <div className={styles.container}>
            <p>Website By <span><a href="https://www.ecma.app">ecma.app</a></span> - CopyRight Resereved By VIP4CARE 2022 &copy;</p>
        </div>
     );
}
 
export default Footer;