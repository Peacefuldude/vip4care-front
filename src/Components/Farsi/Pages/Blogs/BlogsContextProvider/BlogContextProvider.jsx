import React, { createContext, useState, useEffect } from 'react'

// API
import { getBlogs } from '../api/api';

export const BlogsContext = createContext();

const BlogContextProvider = (props) => {

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
 
export default BlogContextProvider;