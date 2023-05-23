import React from 'react';
import * as FileSaver from 'file-saver';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// Components
import Header from '../../Header/Header';

// Files
import Collab from '../../../../Files/Collab.docx'

// Functions
import { WorkWithUsValidate } from '../../../../Functions/WorkWithUsValidate';

// Styles
import styles from './WorkWithUs.module.css'

const WorkWithUs = () => {

    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: +98,
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    }

    const [errors, setErrors] = useState({});
    useEffect(() => {
        setErrors(WorkWithUsValidate(data, "workwithus"))
    }, [data])

    const [touched, setTouched] = useState({});
    const focusHandler = (event) => {
        setTouched({
            ...touched, [event.target.name]: true,
    })
    }
    const unFocusHandler = (event) => {
        setTouched({
            ...touched, [event.target.name]: false,
        })
    }

    const [buttonDisable, setButtonDisable] = useState(false);
    const Navigate = useNavigate();
    const [welcomeMassage, setWelcomeMassage] = useState(false);

    const axiosConficPost = {
        headers: {
            "Dev": "vip4c@reDevelop3r",
            // "content-type": "multipart/form-data",
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers":"*",
            // "Access-Control-Allow-Methods":"*"
        },
    };

    const [isError_1, setIsError_1] = useState("");
    
    const submitHandler = (event) => {
        event.preventDefault();
        let myFormData = new FormData()
        myFormData.append('resume', resume.data)
        myFormData.append('first_name', data.first_name)
        myFormData.append('last_name', data.last_name)
        myFormData.append('email', data.email)
        myFormData.append('phone', data.phone)
        if (!Object.keys(errors).length) {
            fetch("https://api.vip4care.ir/cooperation/sendResume", {
            method: "post",
            body: myFormData,
            headers: {
                "Dev": "vip4c@reDevelop3r",
                // "Content-Type": "multipart/form-data",
                // "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Headers":"*",
                // "Access-Control-Allow-Methods":"*"
            },
            })
                .then((response)=> {
                    setButtonDisable(false)
                })
                .catch((errors)=> {
                    setButtonDisable(false)
                })

            } else {
                setTouched({
                first_name: true,
                last_name: true,
                email: true,
                phone: true,
            })
        }
        
    }

    // FILE CHANGE HANDLER
    // In case if it did not work, remove the content-type

    const [resume, setResume] = useState({preview: "", data: ""})

    const fileChangeHandler = (event) => {
        const res = {
            preview: URL.createObjectURL(event.target.files[0]),
            data: event.target.files[0]
        }

        setResume(res)
    }

    // Resume file download

    const resumeFileEx = () => {
        console.log("ssss");
        FileSaver.saveAs(Collab, "فایل رزومه" + ".docx");
    }

    return ( 
        <div>
            <section>
                <  Header/>
            </section>
            <div className={styles.WorkWithUs_container}>
                {/* <form encType="multipart/form" className={styles.formContainer} onSubmit={submitHandler}> */}
                <form className={styles.formContainer} onSubmit={submitHandler}>
                    <h1>مایل به همکاری هستید؟ فرم زیر را تکمیل کنید.</h1>
                    <div>
                        <p>نام:</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='first_name'
                            placeholder='نام کوچک خود را وارد کنید'
                            value={data.first_name}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div className={(errors.first_name && touched.first_name) ? styles.formdiv_Active : styles.formdiv}>
                            {<h6>{errors.first_name}</h6>}
                        </div>
                    </div>
                    <div>
                        <p>نام خانوادگی:</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='last_name'
                            placeholder='نام خانوادگی خود را وارد کنید'
                            value={data.last_name}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div className={(errors.last_name && touched.last_name) ? styles.formdiv_Active : styles.formdiv}>
                            {<h6>{errors.last_name}</h6>}
                        </div>
                    </div>
                    <div>
                        <p>ایمیل:</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='email'
                            placeholder='لطفا ایمیل خود را وارد کنید.'
                            value={data.field}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div className={(errors.email && touched.email) ? styles.formdiv_Active : styles.formdiv}>
                            {<h6>{errors.email}</h6>}
                        </div>
                    </div>
                    <div>
                        <p>تلفن همراه:</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='phone'
                            placeholder='شماره تلفن همراه خود را وارد کنید'
                            value={data.phone}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div className={(errors.phone && touched.phone) ? styles.formdiv_Active : styles.formdiv}>
                            {<h6>{errors.phone}</h6>}
                        </div>
                    </div>
                    <div >
                        <input 
                            type="file" 
                            name='resume' 
                            id="files" 
                            onChange={fileChangeHandler} 
                            class="hidden"
                        />
                        <label for="files">آپلود رزومه</label>
                        <div className={(errors.mobile && touched.mobile) ? styles.formdiv_Active : styles.formdiv}>
                            {<h6>{errors.mobile}</h6>}
                        </div>
                    </div>
                    <div className={buttonDisable ? styles.formButtonsDisabled : styles.formButtons}>
                        <button onClick={resumeFileEx} className={styles.submitButton}>دریافت فایل نمونه</button>
                    </div>
                    <div className={buttonDisable ? styles.formButtonsDisabled : styles.formButtons}>
                        <button type="submit" className={styles.submitButton}>ارسال فرم</button>
                    </div>
                    { isError_1 &&
                        <div className={isError_1 ? styles.formdiv_Active : styles.formdiv}>
                            <h6>{isError_1}</h6>
                        </div>
                    }
                    { welcomeMassage &&
                        <div className={welcomeMassage ? styles.formdiv_Active : styles.formdiv}>
                            <h6>خوش آمدید! منتظر بازنشانی صفحه بمانید</h6>
                        </div>
                    }
                </form>
            </div>
        </div>
     );
}
 
export default WorkWithUs;