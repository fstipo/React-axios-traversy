import React, { useState, useEffect } from "react";
import axios from "axios";
import showOutput from "../showOutput";

// ! When we use DELETE - we need ID
const Delete = () => {
    const [data, setData] = useState("");
    const deleteTodo = () => {
        axios.delete("https://jsonplaceholder.typicode.com/todos/4")
            .then(res => setData(res))
            .catch(err => console.log(err));
    }

    const htmlTemplate = showOutput(data);
    return (
        <>
            <button className='btn btn-outline-danger mb-3 fs-5' type="button" onClick={deleteTodo}>DELETE</button>
            {!data ? "" : htmlTemplate}
        </>
    )
}

export default Delete;