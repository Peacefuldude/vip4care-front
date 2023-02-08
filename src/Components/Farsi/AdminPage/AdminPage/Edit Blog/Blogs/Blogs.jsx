import React from 'react';
import { Link } from 'react-router-dom';

// Functons
import { serviceDesWrap } from '../../../../../../Functions/serviceDesWrap'
import { serviceNameWrap } from '../../../../../../Functions/serviceNameWrap'

// Styles
import styles from './Blogs.module.css'

const Blogs = ({productData}) => {

    // WIZYWIG in use
    const createText = () => {
        return {__html: productData.description}
    }

    return ( 
        <div className={styles.container}>
            <div className={styles.imgDiv}>
                <img src={productData.tombNail} alt="picture" />
            </div>
            <div className={styles.textDiv}>
                <h3>{serviceNameWrap(productData.title)}</h3>
                <div className={styles.description}>
                    <p dangerouslySetInnerHTML={createText()}></p>
                </div>
                <Link to={`/editBlogsDetails/${productData._id}`}>
                    <button>ویرایش بلاگ</button>
                </Link>
            </div>
        </div>
     );
}
 
export default Blogs;