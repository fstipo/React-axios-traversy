import React, { useState } from 'react'
import axios from 'axios'
import showOutput from '../showOutput';

const Headers = () => {
    const [data, setData] = useState("");

    const customHeaders = () => {
        // ! Custom headers - for some authorization -JWT - token
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: "someToken"
            }
        }

        // *Short version
        axios.post("https://jsonplaceholder.typicode.com/todos",
            {
                title: "Short title",
                completed: false
            }, config
        )
            .then(res => setData(res))
            .catch(err => console.log(err));

    }

    const htmlTemplate = showOutput(data);
    return (
        <>
            <button className='btn btn-outline-secondary mb-3 fs-5' type='button' onClick={customHeaders}>Custom Headers request</button>
            {!data ? "" : htmlTemplate}
        </>
    )
}

export default Headers;