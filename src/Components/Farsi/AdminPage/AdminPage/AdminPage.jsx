import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Images
import empty from '../../../../Images/empty-folder.png'

// Styles
import styles from './AdminPage.module.css'

const AdminPage = () => {

    const Navigate = useNavigate();

    useEffect(()=> {
        if (!localStorage.getItem('admin')) {
            Navigate('/home')
        }
    }, [])

    return ( 
        <div className={styles.container}>
            <section>
                <p>فهرست</p>
                <button className={styles.section_btn}><Link to="/deleteServices">حذف خدمات</Link></button>
                <button className={styles.section_btn}><Link to="/editServices">ویرایش خدمات</Link></button>
                <button className={styles.section_btn}><Link to="/addServices">اضافه کردن خدمات</Link></button>
                <button className={styles.section_btn}><Link to="/users">بخش کاربرها</Link></button>
                <button className={styles.section_btn}><Link to="/addBlog">اضافه کردن بلاگ</Link></button>
                <button className={styles.section_btn}><Link to="/deleteBlog">حذف بلاگ</Link></button>
                <button className={styles.section_btn}><Link to="/editBlog">ویرایش بلاگ</Link></button>
                <button className={styles.section_btn}><Link to="/resume">درخواست های همکاری</Link></button>
                <button className={styles.section_btn}><Link to="/deleteRequests">درخواست ها</Link></button>
            </section>
            <main>
                <div>
                    <p>چیزی برای نمایش وجود ندارد</p>
                    <img src={empty} alt="nothing here to see" />
                </div>
            </main>
        </div>
     );
}
 
export default AdminPage;