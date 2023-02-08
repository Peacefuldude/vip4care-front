import React from 'react'

// Components
import Header from '../../Header/Header';
import Blogs from './Blogs';
import License from '../../License/License';
import Footer from '../../Footer/Fooer';

// Styles
import styles from './BlogsPage.module.css'

const BlogsPage = () => {
    return ( 
        <div className={styles.container}>
            <section>  
                <  Header/>
            </section>
            <section>
                <  Blogs/>
            </section>
            <section>
                <  License/>
            </section>
            <section>
                <  Footer/>
            </section>
        </div>
     );
}
 
export default BlogsPage;