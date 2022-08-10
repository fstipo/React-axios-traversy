import React, { useState } from 'react'
import axios from 'axios'
import showOutput from '../showOutput';

const Post = () => {
    const [data, setData] = useState("");

    const addTodo = () => {
        // *Longer version
        // axios({
        //     method: "post",
        //     url: "https://jsonplaceholder.typicode.com/todos",
        //     data: {
        //         title: "My new title",
        //         body: "My new body"
        //     }
        // }).then(res => setData(res))
        //     .catch(err => err);
        // *Short version
        axios.post("https://jsonplaceholder.typicode.com/todos",
            {
                title: "Short title",
                completed: false
            }
        )
            .then(res => setData(res))
            .catch(err => console.log(err));

    }

    const htmlTemplate = showOutput(data);
    return (
        <>
            <button className='btn btn-outline-info mb-3 fs-5' type='button' onClick={addTodo}>POST request</button>
            {!data ? "" : htmlTemplate}
        </>
    )
}

export default Post