import React, { createContext, useState, useEffect } from 'react'

// API
import { getBlogs } from '../api/api';

export const ServicesContext = createContext();

const BlogsContextProvider = (props) => {

    const [Blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setBlogs(await getBlogs());
        }

        fetchAPI();

    }, []);

    return ( 
        <BlogsContext.Provider value={Blogs}>
            {props.children}
        </BlogsContext.Provider>
     );
}
 
export default BlogsContextProvider;