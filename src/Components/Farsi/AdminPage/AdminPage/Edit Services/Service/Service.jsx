import React from 'react';
import { Link } from 'react-router-dom';

// Functons
import { serviceDesWrap } from '../../../../../../Functions/serviceDesWrap'

// Styles
import styles from './Service.module.css'

const Service = ({productData}) => {

    // WIZYWIG in use
    const createText = () => {
        return {__html: productData.description}
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
                <Link to={`/editServices/${productData._id}`}>
                    <button>ویرایش کارت</button>
                </Link>
            </div>
        </div>
     );
}
 
export default Service;