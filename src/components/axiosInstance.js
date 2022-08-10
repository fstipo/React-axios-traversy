import axios from 'axios'
import React from 'react'
const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

axiosInstance.get("/comments").then(res => console.log(res))