import React from 'react'
import { interceptors } from './interceptors';

const showOutput = (res) => {
    const int =
        setTimeout(() => {
            console.log("Click me again!");
            interceptors();
        }, 5000);

    return (
        <>
            <div className="card card-body mb-4 text-left">
                <h5>Status: {res.status}</h5>
            </div>
            <div className="card mt-3">
                <div className="card-header">
                    Headers
                </div>
                <div className="card-body">
                    <pre>{JSON.stringify(res.headers, null, 2)}</pre>
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-header">
                    Data
                </div>
                <div className="card-body text-left">
                    <pre>{JSON.stringify(res.data, null, 2)}</pre>
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-header">
                    Config
                </div>
                <div className="card-body">
                    <pre>{JSON.stringify(res.config, null, 2)}</pre>
                </div>
            </div>
            {!res ? int : ""}
        </>
    );
}



export default showOutput