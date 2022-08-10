import React from 'react'
import Moment from 'moment'
import axios from 'axios'

// ? INTERCEPTING REQUESTS & RESPONSES
// ? Like a logger with data

export const interceptors = () => {
    axios.interceptors.request.use(config => {
        console.log(`Method: ${config.method.toUpperCase()}`);
        console.log(`URL: ${config.url}`);
        console.log(`Time: ${Moment().format('MM/DD/YYYY, h:mm:ss a')}`);
        // return config;
    }, error => {
        return Promise.reject(error);
    });

}

