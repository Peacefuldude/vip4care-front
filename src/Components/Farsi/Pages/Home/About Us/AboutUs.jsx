import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from './AboutUs.module.css'

const AboutUs = () => {

    const [active1, setActive1] = useState(false)
    const HoverHandler = () => {
        setActive1(!active1)
    }

    return ( 
        <div className={styles.container}>
            <div className={active1 ? styles.picture1 : styles.picture2}></div>
            <div className={styles.text} onMouseEnter={HoverHandler} onMouseLeave={HoverHandler}>
                <div className={styles.aboutus}>
                    <h2>درباره ما بیشتر بدانید</h2>
                    <p>مسیری که ما برای ادامه فعالیت های خود انتخاب کرده ایم مسیری سخت و دشوار است اما مطمئن هستیم که با عزم فوق العاده و نگاه پرنعمت خداوند بر راه ما، به کمک کوشش برنامه ریزی شده و مدبرانه تمامی کارکنان و البته مسئولینی که حتی شده به طور غیر مستقیم بر راه ما اثر می گذارد، این راه پر پیج و خم را پشت سر بگذاریم و نیل به هدفی والا با اتکا بر سامانه و قدرت داخلی کشور، آرمان های نظام مقدس جمهوری اسلامی را برآورده و زمینه هرچه بهتر شدن شرایط سلامتی و بهداشتی، آموزش پزشکی و همچنین ایجاد بستری برای رشد و بالندگی مردم این سرزمین به درجات بالاتر دنیوی و اخروی را فراهم آوریم.</p>
                    <Link to="/contactus">
                        <button className={styles.onlyforfont}>بیشتر بدانید</button>
                    </Link>
                </div>
                <div className={styles.whyus}>
                    <h2>شاید بپرسید چرا ما؟</h2>
                    <p>موئسسه ما یک اصل مهم را هرگز فراموش نمی کند. نیروی انسانی ماهر، همیشه در اولویت قرار دارد! نیروی انسانی ماهر مانند پی و زیر بنای هر سازه و ساختمانی محسوب می شود. خانه ای که زیربنای آن سست بنا شده باشد، طولی نخواهد کشید که با اولین تکان های زمین، فرو می نشیند و نمی تواند نیاز های ساکنین آن را فراهم کند. موئسسه ما نیز مانند همین خانه است. اگر یک چیز هرگز از قلم نیافتد، داشتن زیربنایی محکم است تا هرچه که بر رویش بنا می شود، به زیباترین شکل ممکن به طبقات بلند آسمان برسد. در همین راستا کادر درمانی و کادر اجرایی موئسسه از میان بهترین ها و با رد سختگیرانه ترین متدهای استخدامی برگزیده شده اند. آن هایی که حالا به خدمت شما می رسند، بهترین های ایران و بلکه منطقه باشند.</p>
                    <Link to="/contactus">
                        <button className={styles.onlyforfont}>بیشتر بدانید</button>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default AboutUs;