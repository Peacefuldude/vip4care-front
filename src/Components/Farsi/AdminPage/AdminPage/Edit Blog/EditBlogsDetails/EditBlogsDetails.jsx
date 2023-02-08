import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Context -- not working in new tap, exclusively for opening the link in one click!
// import { ServicesContext } from '../ServicesContextProvider/ServicesContextProvider';

// Functions
import { EditServiceVal } from "../../../../../../Functions/EditServiceVal";

// Styles
import styles from "./EditBlogsDetails.module.css";

const EditBlogsDetails = () => {

    // Reciving details and preparing it. 
    const { id } = useParams();
    const [blogDetails, setBlogDetails] = useState()
    useEffect(()=> {
        axios.get(`https://api.vip4care.ir/addService/getcertain${id}`)
            .then((response)=> {
                setBlogDetails(response.data.foundedService)
            })
    }, [])

    // Handlers and States related to the inputs
    const [data, setData] = useState({
        title: "",
        description: "",
    });

    const changeHandler = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const [errors, setErrors] = useState({});
    useEffect(() => {
        setErrors(EditServiceVal(data));
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

    const [description, setDescription] = useState({
        description: "",
    });

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [buttonDisable, setButtonDisable] = useState(false);
    const Navigate = useNavigate();
    const [EditMassage, setEditMassage] = useState(false);

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
    
    const [image, setImage] = useState({preview: "", data: ""})
    const [status, setStatus] = useState("")
    const [errorMassage, setErrorMassage] = useState(false);
    const [isError, setIsError] = useState("")
    
    const submitHandler = async (event) => {
        event.preventDefault();
        let formeData = new FormData()
        formeData.append('file', image.data)
        // console.log(image.data);
        if (!Object.keys(errors).length) {
            const EDIT_BLOG_DATA = {
                title: data.title,
                description: description
            };
            axios
            .put(
                `https://api.vip4care.ir/blog/edite${id}`,
                EDIT_BLOG_DATA,
                axiosConficPost
                )
                // Uncomment to see the full response log
                .then((response) => console.log(response))
                .catch(error => setIsError(error))
                .then(setButtonDisable(true))
                .then(setEditMassage(true))
                .then(alert("بلاگ اضافه شد!"))
            const response = await fetch(`https://api.vip4care.ir/blog/edite${id}`, {
                method: "put",
                body: formeData,
                headers: {
                    "Dev": "vip4c@reDevelop3r",
                    "Authorization": "Bearer " + userToken.token,
        
                    // "Access-Control-Allow-Origin": "*",
                    // "Access-Control-Allow-Headers":"*",
                    // "Access-Control-Allow-Methods":"*"
                },
            })
                .then((response)=> console.log(response))
                .catch(error => setIsError(error))
    
                if(response) setStatus(response.statusText)
            } else {
                setErrorMassage(true);
                setTouched({
                    title: true,
                });
            }
            
        };
        
        const fileChangeHandler = (event) => {
            const img = {
                preview: URL.createObjectURL(event.target.files[0]),
                data: event.target.files[0]
            }
    
            setImage(img)
        }

    return (
        <div className={styles.container}>
            {data.length !== 0 && (
                <div className={styles.container}>
            <section>
                <p>فهرست</p>
                <button className={styles.section_btn}>
                    <Link to="/deleteServices">حدف خدمات</Link>
                </button>
                <button className={styles.section_btn}>
                    <Link to="/editServices">ویرایش خدمات</Link>
                </button>
                <button className={styles.section_btn}>
                    <Link to="/addServices">اضافه کردن خدمات</Link>
                </button>
                <button className={styles.section_btn}>
                    <Link to="/users">بخش کاربرها</Link>
                </button>
                <button className={styles.section_btn}>
                    <Link to="/addBlog">اضافه کردن بلاگ</Link>
                </button>
                <button className={styles.section_btn}>
                    <Link to="/deleteBlog">حذف بلاگ</Link>
                </button>
                <button className={styles.section_btn}>
                    <Link to="/editBlog">ویرایش بلاگ</Link>
                </button>
                <button className={styles.section_btn}>
                    <Link to="/deleteRequests">درخواست ها</Link>
                </button>
            </section>
                <form className={styles.formContainer} onSubmit={submitHandler}>
                    <h1>مشخصات بلاگ جدید را وارد کنید</h1>
                    <div>
                        {isFilePicked ? (
                            <div>
                                <p>اسم: {selectedFile.name}</p>
                                <p>تایپ: {selectedFile.type}</p>
                                <p>سایز: {selectedFile.size}</p>
                                <p>
                                    lastModifiedDate:{" "}
                                    {selectedFile.lastModifiedDate.toLocaleDateString()}
                                </p>
                            </div>
                        ) : (
                            <p>
                                تصویر مورد نظر برای کارت خدماتی را انتخاب و سپس
                                آپلود کنید
                            </p>
                        )}
                        <input
                            type="file"
                            name="file"
                            onChange={fileChangeHandler}
                        />
                    </div>
                    <div>
                        <p>سرتیتر:</p>
                        <input
                            className={styles.formInput}
                            type="text"
                            name="title"
                            placeholder="سرتیتر کارت را وارد کنید"
                            value={data.title}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div
                            className={
                                errors.title && touched.title
                                    ? styles.formdiv_Active
                                    : styles.formdiv
                            }
                        >
                            {<h6>{errors.title}</h6>}
                        </div>
                    </div>
                    <div>
                        <p>توضیحات:</p>
                        <CKEditor
                            editor={ ClassicEditor }
                            data= {blogDetails && blogDetails.description}
                            onReady={ ( editor ) => {
                                // console.log( "CKEditor5 React Component is ready to use!", editor );
                            } }
                            config={{ckfinder: {
                                // Upload the images to the server using the CKFinder QuickUpload command
                                // You have to change this address to your server that has the ckfinder php connector
                                uploadUrl: 'https://api.vip4care.ir/admin/upload'
                            }}}
                            onChange={ ( event, editor ) => {
                                setDescription(editor.getData())
                                // console.log( { event, editor, data } );
                            } }
                            />
                        <div
                            className={
                                errors.description && touched.description
                                    ? styles.formdiv_Active
                                    : styles.formdiv
                            }
                        >
                            {<h6>{errors.description}</h6>}
                        </div>
                    </div>
                    <div
                        className={
                            buttonDisable
                                ? styles.formButtonsDisabled
                                : styles.formButtons
                        }
                    >
                        <button type="submit" className={styles.submitButton}>
                            تایید کارت جدید
                        </button>
                    </div>
                    <div className={styles.formdiv}>
                        {EditMassage && <h6>کارت جدید با موفقیت ایجاد شد</h6>}
                    </div>
                    <div className={styles.formdiv_Active}>
                        {isError && <h6>{isError}</h6>}
                    </div>
                </form>
                </div>
            )}
        </div>
    );
};

export default EditBlogsDetails;
