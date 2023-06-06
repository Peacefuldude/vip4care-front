import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Wizywig
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Context -- not working in new tap, exclusively for opening the link in one click!
// import { ServicesContext } from '../ServicesContextProvider/ServicesContextProvider';

// Functions
import { EditServiceVal } from "../../../../../../Functions/EditServiceVal";

// Styles
import styles from "./EditDetails.module.css";

const EditDetails = ( ...props ) => {

    // Reciving details and preparing it. 
    const { id } = useParams();
    const [cardDetails, setCardDetails] = useState()
    useEffect(()=> {
        axios.get(`https://api.vip4care.ir/addService/getcertain${id}`)
            .then((response)=> {
                setCardDetails(response.data.foundedService)
            })
    }, [])

    // Handlers and States related to the inputs
    const [data, setData] = useState({
        title: "",
        model: "",
        guarantee: "",
        price: "",
        quantity: ""
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
        formeData.append('image', image.data)
        if (!Object.keys(errors).length) {
            const EDIT_SERVICE_DATA = {
                title: data.title,
                description: description
            };
            axios
            .put(
                `https://api.vip4care.ir/addService/edit${id}`,
                EDIT_SERVICE_DATA,
                axiosConficPost
                )
                // Uncomment to see the full response log
                // .then((response) => console.log(response))
                .then(setButtonDisable(true))
                .then(setEditMassage(true))
                .then(alert("بلاگ اضافه شد!"))
                .catch((errors)=> console.log(errors))
            
            const response = await fetch(`https://api.vip4care.ir/addService/edit${id}`, {
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
                // .then((response)=> console.log(response))
                .catch(error => setIsError(error.message))
    
                if(response) setStatus(response.statusText)
            } else {
                setErrorMassage(true);
                setTouched({
                    title: "",
                    model: "",
                    guarantee: "",
                    price: "",
                    quantity: ""
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

        // All below is the ckeditor functions
        function uploadAdapter(loader) {
            return {
              upload: () => {
                return new Promise((resolve, reject) => {
                  const body = new FormData();
                  loader.file.then((file) => {
                    body.append("file", file);
                    // let headers = new Headers();
                    // headers.append("Origin", "http://localhost:3000");
                    fetch('https://api.vip4care.ir/admin/upload', {
                      method: "post",
                      body: body,
                      headers: {
                        "Dev": "vip4c@reDevelop3r",
                        // "Content-Type": "multipart/form-data",
                        // "Access-Control-Allow-Origin": "*",
                        // "Access-Control-Allow-Headers":"*",
                        // "Access-Control-Allow-Methods":"*"
                    },
                      // mode: "no-cors"
                    })
                        .then((response)=> {
                            console.log(response);
                        })
                      .catch(error => console.log(error))
                  });
                });
              }
            };
          }
          function uploadPlugin(editor) {
            editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
              return uploadAdapter(loader);
            };
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
                    <h1>مشخصات کارت جدید را وارد کنید</h1>
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
                        {/* <CKEditor
                            editor={ ClassicEditor }
                            data= {cardDetails && cardDetails.description}
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
                            /> */}
                            <CKEditor
                                config={{
                                  extraPlugins: [uploadPlugin],
                                  allowedContent: true,
                                }}
                                editor={ClassicEditor}
                                data= {cardDetails && cardDetails.description}
                                onReady={(editor) => {}}
                                onBlur={(event, editor) => {}}
                                onFocus={(event, editor) => {}}
                                onChange={(event, editor) => {
                                    console.log(editor.getData())
                                    setDescription(editor.getData())
                                    // handleChange(editor.getData());
                                }}
                                {...props}
                            />
                    </div>
                    <div>
                        <p>مدل کالا:</p>
                        <input
                            className={styles.formInput}
                            type="text"
                            name="model"
                            placeholder="مدل کالا را وارد کنید"
                            value={data.model}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div
                            className={
                                errors.model && touched.model
                                    ? styles.formdiv_Active
                                    : styles.formdiv
                            }
                        >
                            {<h6>{errors.model}</h6>}
                        </div>
                    </div>
                    <div>
                        <p>گارانتی:</p>
                        <input
                            className={styles.formInput}
                            type="text"
                            name="guarantee"
                            placeholder="مدت گارانتی را وارد کنید"
                            value={data.guarantee}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div
                            className={
                                errors.guarantee && touched.guarantee
                                    ? styles.formdiv_Active
                                    : styles.formdiv
                            }
                        >
                            {<h6>{errors.guarantee}</h6>}
                        </div>
                    </div>
                    <div>
                        <p>قیمت:</p>
                        <input
                            className={styles.formInput}
                            type="text"
                            name="price"
                            placeholder="قیمت مدنظر را وارد کنید"
                            value={data.price}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div
                            className={
                                errors.price && touched.price
                                    ? styles.formdiv_Active
                                    : styles.formdiv
                            }
                        >
                            {<h6>{errors.price}</h6>}
                        </div>
                    </div>
                    <div>
                        <p>تعداد:</p>
                        <input
                            className={styles.formInput}
                            type="text"
                            name="quantity"
                            placeholder="تعداد مدنظر را وارد کنید"
                            value={data.quantity}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div
                            className={
                                errors.quantity && touched.quantity
                                    ? styles.formdiv_Active
                                    : styles.formdiv
                            }
                        >
                            {<h6>{errors.quantity}</h6>}
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

export default EditDetails;
