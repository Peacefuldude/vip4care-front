import React, { createContext, useState, useEffect } from 'react'

// API
import { getRequests } from '../api/api';

export const BlogsContext = createContext();

const RequestsContextProvider = (props) => {

    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setRequests(await getRequests());
        }

        fetchAPI();

    }, []);

    return ( 
        <requestsContext.Provider value={requests}>
            {props.children}
        </requestsContext.Provider>
     );
}
 
export default RequestsContextProvider;