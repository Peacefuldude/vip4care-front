import React from 'react';
import { Link } from 'react-router-dom';

// Images
import Instagram from '../../../Images/instagram.png'
import Namad from '../../../Images/enamad.jpg'

// Styles
import styles from './License.module.css'

const License = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.bar}></div>
            <div className={styles.License}>
                <div className={styles.left}>
                    <div className={styles.logoandaddress}>
                        <div className={styles.logo}>
                            <h1>Tandis</h1>
                            <p>info@vip4care.ir</p>
                            <p>@Medicalequipment :تلگرام</p>
                            <section>
                                <a href="https://instagram.com/tandis4med?igshid=MzNlNGNkZWQ4Mg==" target='_blank'>
                                    <img src={Instagram} alt="instagram icon" />
                                </a>
                            </section>
                        </div>
                        <div className={styles.address}>
                            <h2>ایران</h2>
                            <p>تهران، میدان دوم صادقیه، برج تجاری اداری گلدیس، طبقه دوازدهم، واحد نوزدهم، شماره 1219</p>
                            <p>واتسپ: 09120085112</p>
                            <p>تلفن ما: 02144288183</p>
                        </div>
                    </div>
                    <a href="https://www.google.com/maps/place/35%C2%B045'27.4%22N+51%C2%B024'45.6%22E/@35.7576111,51.4126667,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x3ddb530ce71dcbb6!8m2!3d35.7576141!4d51.4126625?hl=en">
                        <div className={styles.map}></div>
                    </a>
                </div>
                <div className={styles.right}>
                    <div className={styles.buttons}>
                        <div>
                        <Link to="/blog">
                            <button>بلاگ ها</button>
                        </Link>
                        <Link to="/contactus">
                            <button>ارتباط با ما</button>
                        </Link>
                        </div>
                    </div>
                    <div className={styles.more}>
                        <p className={styles.more_upper_p}>در این حرفه کیفیت خدمات و دریافت رضایت مشتری تمام حرف را می زند، موسسه ما با افتخار می تواند بگوید که ضمانت این مهم را به هر کدام از عزیزان چه ایرانی و چه ایرانی، سوا از هر رنگ و نژادی و سوا از هر قوم و قبیله ای می دهد.</p>
                        <p className={styles.more_p}>آدرس دیگر ما: تهران، میدان دوم صادقیه، برج اداری گلدیس، طبقه پنجم، واحد 511</p>
                        <div>
                            <p className={styles.more_p}>نماداعتماد الکترونیک</p>
                            {/* ENAMAD */}
                            {/* <a referrerPolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=310347&amp;Code=CRNddGiwOCecri3T9Db5">
                                <img src={Namad} alt="eNamad icon" />
                            </a> */}
                            <a referrerPolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=310347&amp;Code=CRNddGiwOCecri3T9Db5"><img referrerPolicy="origin" src="https://Trustseal.eNamad.ir/logo.aspx?id=310347&amp;Code=CRNddGiwOCecri3T9Db5" alt="" id="CRNddGiwOCecri3T9Db5" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default License;