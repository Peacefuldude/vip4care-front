import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Functions
import { PaymentVal } from '../../../../../../Functions/PaymentVal';

// Styles
import styles from './RequestsCard.module.css'

const RequestsCard = ({productData}) => {

    // useEffect(() => {
    //     if (!localStorage.getItem("admin")) {
    //         Navigate("/home");
    //     }
    // }, []);

    const [data, setData] = useState({
        amount: "",
        mobile: productData.mobile
    });

    const changeHandler = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const [errors, setErrors] = useState({});
    useEffect(() => {
        setErrors(PaymentVal(data));
    }, [data]);

    const [touched, setTouched] = useState({});
    const focusHandler = (event) => {
        setTouched({
            ...touched,
            [event.target.name]: true,
        });
    };
    const unFocusHandler = (event) => {
        setTouched({
            ...touched,
            [event.target.name]: false,
        });
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            const PAY_DATA = data;
            axios
                .post(
                    "https://api.vip4care.ir/payment",
                    PAY_DATA,
                    axiosConficPost
                )
                window.location.reload()
                // .then((response) => {
                //     if (response.data.success) {
                //         alert("عملیات با موفیت انجام شد. وضعیت پرداخت یا عدم پرداخت متقاضی را در بخش استعلام وضعیت مشاهده کنید");
                //     }
                // })
                // .catch((errors) => {
                //     if (errors.response.data.message) {
                //         alert("خطایی رخ داد. لظفا دوباره تلاش کنید.")
                //     }
                // });
        } else {
            setTouched({
                amount: true,
            });
        }
    };

    const userToken = JSON.parse(localStorage.getItem('admin'));

    const axiosConficPost = {
        headers: {
            "Dev": "vip4c@reDevelop3r",
            "Authorization": "Bearer " + userToken.token,

            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers":"*",
            // "Access-Control-Allow-Methods":"*"
        },
    };

    const deleteHandler = (event) => {
        event.preventDefault();
        axios.delete(`https://api.vip4care.ir/requestService/delete${productData._id}`, axiosConficPost)
            .then((response)=> {
                if (response.data.success) {
                    alert("عملیات با موفقیت به پایان رسید.")
                    window.location.reload()
                }
            })

            .catch((error)=> {
                alert("مشکلی از طرف سیستم پیش آمده است دوباره تلاش کنید.")
            })
    }

    const [Payment, setPeyment] = useState(false)
    const [showInput, setShowInput] = useState(true)

    useEffect(()=> {
        const PayHandler = () => {
            if (productData.bill === "true") {
                setPeyment("واریز شده است.")
                 setShowInput(false)

            }
    
            if (productData.bill === "false") {
                setPeyment("هنوز واریزی صورت نگرفته است.")
            }
    
            if (productData.bill === "wait") {
                setPeyment("منتظر واریز از سوی مشتری.")
            }
        }

        PayHandler();
    }, [])

    return ( 
        <div className={styles.container}>
            <div className={styles.textDiv}>
                <h3>نام: {productData.applier_name}</h3>
                <div className={styles.description}>
                    <p>توضیحات: {productData.service}</p>
                    <p>تلفن همراه متفاضی: {productData.mobile}</p>
                </div>
            </div>
            <div className={styles.textDiv}>
                <br />
                <h3>بخش حذف درخواست</h3>
                <p>با فشردن کلید حذف درخواست، درخواست کاربر حذف می شود.</p>
                <button onClick={deleteHandler}>حذف درخواست</button>
            </div>
            <div className={styles.textDiv}>
                <br />
                <h3>بخش تصفیه حساب</h3>
                <p>فقط کافیست مبلغ را وارد کنید و سپس کلید ذیل را فشار دهید. سیستم خودکار مبلغ را برای شماره تلفن متقاضی ارسال می کند.</p>
                {showInput && <div>
                    <p>مبلغ را وارد کنید:</p>
                    <input
                        className={styles.formInput}
                        name="amount"
                        placeholder="مبلع را به ریال وارد کنید."
                        value={data.amount}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        onBlur={unFocusHandler}
                    />
                    <div
                        className={
                            errors.amount && touched.amount
                                ? styles.formdiv_Active
                                : styles.formdiv
                        }
                    >
                        {<h6>{errors.amount}</h6>}
                    </div>
                    <p>وضعیت کنونی پرداخت: {Payment}</p>
                    <button className={styles.submitButton} onClick={submitHandler}>
                        ارسال پیامک
                    </button>
                    </div>}
            </div>
        </div>
     );
}
 
export default RequestsCard;