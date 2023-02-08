import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

// Components
import BlogCard from './Blog/BlogCard';

// Styles
import styles from './Blogs.module.css'

const Blogs = () => {

    const [blogs, setBlogs] = useState();

    useEffect(() => {
        const getblogs = async () => {

            const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pblVzZXJuYW1lIjoic2luYWtoIiwiaWF0IjoxNjcwMzUxNTE4LCJleHAiOjE2NzEyMTU1MTh9.zUx8Imt-8g7RecOZ39Jez3esTRJ-huQP99uGmArPVqA"
            const response = await axios.get("https://api.vip4care.ir/blog/get", {
                "Content-Type": "application/json",
                "Dev": "vip4c@reDevelop3r",
                "Authorization": "Bearer " + jwtToken,
                // "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Headers":"*",
                // "Access-Control-Allow-Methods":"*"
            })
                .then((response) => setBlogs(response.data.blogs))
                // .then((response)=> console.log(response.data.blogs))
        };
        
        getblogs();
    }, []);

    return ( 
        <div className={styles.container}>
            {
                blogs?.map(blog => <  BlogCard key={blog._id} productData={blog} />)
            }
        </div>
     );
}
 
export default Blogs;