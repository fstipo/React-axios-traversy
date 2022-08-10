import React, { useState } from 'react'
import axios from 'axios'
import showOutput from '../showOutput';

const Transform = () => {
    const [data, setData] = useState("");

    const transformResponse = () => {
        const options = {
            method: "post",
            url: "https://jsonplaceholder.typicode.com/todos",
            data: { title: "Hello World" },
            // ! This is working with response or request
            transformResponse: axios.defaults.transformResponse.concat(data => {
                data.title = data.title.toUpperCase();
                return data;
            }
            )
        }
        axios(options)
            .then(res => setData(res))
            .catch(err => console.log(err));

    }

    const htmlTemplate = showOutput(data);
    return (
        <>
            <button className='btn btn-outline-secondary mb-3 fs-5' type='button' onClick={transformResponse}>Transform request</button>
            {!data ? "" : htmlTemplate}
        </>
    )
}

export default Transform;