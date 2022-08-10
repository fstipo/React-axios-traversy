import React, { useState } from 'react'
import axios from 'axios'
import showOutput from '../showOutput'

const Sim = () => {
    const [data, setData] = useState("");
    const htmlTemplate = showOutput(data);
    const getMoreSources = () => {
        // ! For more resources
        axios.all([axios.get("https://jsonplaceholder.typicode.com/todos?_limit=2"), axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")])
            // .then(res => {
            //     console.log(res[0]); console.log(res[1]);
            //     setData(res[1]);
            // })
            // .catch(err => console.log(err));
            // ! Better way
            // .then(axios.spread((todos, post) => setData(todos)));
            .then(axios.spread((todos, post) => setData(post)))
            .catch(err => console.log(err));
    }

    return (
        <>
            <button className='btn btn-outline-dark mb-3' type='button' onClick={getMoreSources}>Simultaneous request</button>
            {!data ? "" : htmlTemplate}
        </>
    )
}

export default Sim;