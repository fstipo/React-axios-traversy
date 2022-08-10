import React, { useState, useEffect } from 'react'
import axios from 'axios'
import showOutput from '../showOutput'
import { interceptors } from '../interceptors'

const Get = () => {
    const [data, setData] = useState("");

    const getTodos = () => {
        // * LONGER VERSION
        // axios({
        //     method: "get",
        //     url: "https://jsonplaceholder.typicode.com/todos",
        //     params: {
        //         _limit: 5
        //     }
        // })
        //     .then(res => {
        //         console.log(res);
        //         setData(res);
        //     })
        //     .catch(err => console.log(err))
        // * SHORTER VERSION
        // axios.get("https://jsonplaceholder.typicode.com/posts", { params: { _limit: 2 } })
        //     .then(res => setData(res))
        //     .catch(err => console.log(err));
        // * SHORTER VERSION - SHORTING PARAMS - BEST PRACTICE
        // axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
        // after 5ms stop
        // axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5", { timeout: 5 })
        // after 5s stop
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5", { timeout: 5000 })
            .then(res => setData(res))
            .catch(err => console.log(err));
        // * DEFAULT - Without GET
        // axios("https://jsonplaceholder.typicode.com/todos?_limit=5")
        //     .then(res => setData(res))
        //     .catch(err => console.log(err));
    }

    const htmlTemplate = showOutput(data)

    return (
        <>
            <button className='btn btn-outline-primary fs-5 mb-3' onClick={getTodos}>GET request</button >
            {!data ? " " : htmlTemplate}
        </>
    )
}

export default Get