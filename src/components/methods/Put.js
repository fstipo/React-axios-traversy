import React, { useState } from "react";
import axios from "axios";
import showOutput from "../showOutput";


// ! When we use Put or Patch - we need ID
const Put = () => {
    const [data, setData] = useState("");
    const updateTodo = () => {
        // ! With put we change whole object
        // axios.put("https://jsonplaceholder.typicode.com/todos/4", {
        //     title: "Updated TODO",
        //     completed: true
        // })
        //     .then(res => setData(res))
        //     .catch(err => console.log(err));
        // ! With patch we change only differences
        // ! Best practice - use patch
        axios.patch("https://jsonplaceholder.typicode.com/todos/4", {
            title: "Updated TODO",
            completed: true
        })
            .then(res => setData(res))
            .catch(err => console.log(err));
    }

    const htmlTemplate = showOutput(data);
    return (
        <>
            <button className='btn btn-outline-warning  mb-3 fs-5' type="button" onClick={updateTodo}>PUT/PATCH</button>
            {!data ? "" : htmlTemplate}
        </>
    )
}

export default Put;