import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from './AboutUsInContact.module.css'

// Images
import License from '../../../../../Images/license.jpg'

const AboutUsInContact = () => {

    // const [active1, setActive1] = useState(false)
    // const HoverHandler = () => {
    //     setActive1(!active1)
    // }

    return ( 
        <div className={styles.container}>
            <div className={styles.picture1}></div>
            <div className={styles.text}>
                <div className={styles.aboutus}>
                    <h2>چرا آوای سلامت؟</h2>
                    <p>1-مرکز رسمی و معتبر دارای مجوز رسمی از وزارت بهداشت و درمان و آموزش پزشکی. <br/>
2- موسس مجموعه با بیش از 30 سال کار اجرایی و درمانی موفق. <br/>
3- بهره گیری از کادر درمانی مجرب و متعهد و متخصص هوم کر در زمینه های مختلف پزشکی ، پرستاری ، روانشناسی ، علوم تغذیه و بهداشت و پاراکلینیکی. <br/>
4- ارائه خدمات ویژه و کاملا تخصصی به افراد با شرایط و سنین مختلف بسته به نوع درخواست. <br/>
5-امکان ثبت درخواست به صورت آنلاین و حضوری و تلفنی و تشکیل پرونده و اسنفاده از امکانات فضای مجازی و پیامک رایگان جهت اطلاع رسانی به کلیه ی کاربران و مشترکین. <br/>
6- انعقاد قرارداد های مدت دار با تخفیف ویژه. <br/>
7- استفاده از تعرفه مصوب و نرخ وزارت بهداشت و درمان. <br/>
8- پشتیبانی مداوم در طی مدت قرارداد. <br/>
9- پوشش دهی سریع و مطمئن در اکثر نقاط شهر تهران به ویژه مناطق 1 و 2 و 3  <br/>
10- قرارداد با بهترین و معتبر ترین مراکز درمانی. <br/>
</p>
                </div>
                <div className={styles.whyus}>
                    <h2>ماموریت ما</h2>
                    <p>ما اهداف خود و آرمان های ایران را دنبال می کنیم. ماموریت ما به شکل ساده هرچه هست که سربلندی ایران و ایرانی را به ارمغان بیاورد و برای رسیدن به این مهم، موسسه مذکور را تاسیس کردیم تا شاید بتوانیم بخش کوچکی از این دریای بزرگ معرفت ایرانی باشیم و تنها شده برای ذره ای، عظمت ایران و ایرانی را جهانیان نشان دهیم.</p>
                </div>
                {/* <div className={styles.license}>
                    <h2>پروانه بهره برداری مرکز مشاوره و ارائه مراقبتهای پرستاری در منزل</h2>
                    <img src={License} alt="vip4care and avaye salamt license" />
                </div> */}
            </div>
        </div>
     );
}
 
export default AboutUsInContact;