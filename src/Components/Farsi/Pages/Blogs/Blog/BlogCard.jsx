import React from 'react';
import { Link } from 'react-router-dom';

// Functons
import { serviceDesWrap } from '../../../../../Functions/serviceDesWrap'

// Styles
import styles from './BlogCard.module.css'

const BlogCard = ({productData}) => {

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
                <h3>{productData.title}</h3>
                <div className={styles.description}>
                    <p dangerouslySetInnerHTML={createText()}></p>
                </div>
                <Link to={`/blog/${productData._id}`}>
                    <button>بیشتر بخوانید</button>
                </Link>
            </div>
        </div>
     );
}
 
export default BlogCard;