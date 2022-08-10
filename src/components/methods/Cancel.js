import React, { useState } from 'react'
import axios from 'axios'
import showOutput from '../showOutput'

const Cancel = () => {
    const [data, setData] = useState("");
    const source = axios.CancelToken.source()
    const cancelToken = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5", { cancelToken: source.token })
            .then(res => setData(res))
            .catch(thrown => {
                if (axios.isCancel(thrown)) {
                    console.log("Request canceled:", thrown.message);
                }
            })
        if (true) {
            source.cancel("⛔ ABORT!!!! ⛔")
        }
    }
    const htmlTemplate = showOutput(data)

    return (
        <>
            <button className='btn btn-outline-secondary fs-5 mb-3' onClick={cancelToken}>Cancel Token</button >
            {!data ? " " : htmlTemplate}
        </>
    )
}

export default Cancel;