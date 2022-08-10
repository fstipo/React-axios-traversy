import React, { useState } from 'react'
import axios from 'axios';
import showOutput from '../showOutput';
import NoPage from './NoPage';

const Error = () => {
    const [data, setData] = useState("");
    const [error, setError] = useState(false);
    const [errorObj, setErrorObj] = useState({});

    const errorHandling = () => {
        axios.get("https://jsonplaceholder.typicode.com/todoss")
            .then(res => setData(res))
            .catch(err => {
                if (err.response) {
                    // ! Server responded with a status other than 200 range
                    setErrorObj(err.response)
                    console.log(err.response);
                    console.log(`Data: ${JSON.stringify(err.response.data)}`);
                    console.log(`Status: ${err.response.status}`);
                    console.log(`Headers: ${JSON.stringify(err.response.headers)}`);
                }
                // ! Load not found component
                if (err.response.status === 404) {
                    setError(true)
                    alert("Error: Page not found!");
                } else if (err.request) {
                    // ! Request was made but no response
                    console.error(err.request);
                }
                else {
                    console.error(err.message)
                }
            }
            );
    }

    const htmlTemplate = showOutput(data)
    const errorTemplate = <div className='display-3 text-bg-danger text-center rounded-4'> Error Status:{errorObj.status
    }</div>



    return (
        <>
            {error ? <NoPage error={errorObj.status} /> : <button className='btn btn-outline-secondary fs-5 mb-3' onClick={errorHandling}>Error Handling</button >}
        </>
    )
}

export default Error;