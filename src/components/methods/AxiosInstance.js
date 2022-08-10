import React, { useState } from 'react'
import axios from 'axios'
import showOutput from '../showOutput'


const AxiosInstance = () => {
    const [data, setData] = useState("");

    const axiosInstance = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com"
    })

    const getInstance = () => {
        // axiosInstance.get("/comments").then(res => setData(res));
        // axiosInstance.get("/todos").then(res => setData(res));
        // axiosInstance.get("/photos").then(res => setData(res));
        // axiosInstance.get("/users").then(res => setData(res));
        axiosInstance.get("/albums").then(res => setData(res));
    }
    const htmlTemplate = showOutput(data);


    return (

        <>
            <button className='btn btn-outline-secondary fs-5 mb-3' onClick={getInstance}>Axios Instance</button >
            {!data ? " " : htmlTemplate}
        </>
    )
}


export default AxiosInstance