import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from './ServiceforNavbar.module.css'

const ServiceforNavbar = ({productData}) => {

    return ( 
        <div className={styles.container}>
            <div className={styles.textDiv}>
                <Link to={`/home/${productData._id}`}>
                    <button>{productData.title}</button>
                </Link>
            </div>
        </div>
     );
}
 
export default ServiceforNavbar;