import React, { createContext, useState, useEffect } from 'react'

// API
import { getServices } from '../api/api';

export const BlogsContext = createContext();

const ServicesContextProvider = (props) => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setServices(await getServices());
        }

        fetchAPI();

    }, []);

    return ( 
        <ServicesContext.Provider value={services}>
            {props.children}
        </ServicesContext.Provider>
     );
}
 
export default ServicesContextProvider;