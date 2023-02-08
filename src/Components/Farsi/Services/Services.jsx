import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

// Context
import { ServicesContext } from './ServicesContextProvider/ServicesContextProvider';

// Components
import Service from './Service/Service';

// Styles
import styles from './Services.module.css'

const Services = () => {

    const [services, setServices] = useState();

    useEffect(() => {
        const getServices = async () => {

            const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pblVzZXJuYW1lIjoic2luYWtoIiwiaWF0IjoxNjcwMzUxNTE4LCJleHAiOjE2NzEyMTU1MTh9.zUx8Imt-8g7RecOZ39Jez3esTRJ-huQP99uGmArPVqA"
            const response = await axios.get("https://api.vip4care.ir/addService/getServices", {
                "Content-Type": "application/json",
                // "Dev": "vip4c@reDevelop3r",
                // "Authorization": "Bearer " + jwtToken,
                // "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Headers":"*",
                // "Access-Control-Allow-Methods":"*"
            })
                .then((response)=> {
                    setServices(response.data.services)
                    console.log(response);
                })
        };
        
        getServices();
    }, []);

    return ( 
        <div className={styles.container}>
            {
                services?.map(service => <  Service key={service._id} productData={service} />)
            }
        </div>
     );
}
 
export default Services;