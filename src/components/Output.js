import React from 'react'
import Layout from './Layout'
import Get from './methods/Get'
import Post from './methods/Post'
import Put from './methods/Put'
import Delete from './methods/Delete'
import Sim from './methods/Sim'
import Headers from './methods/Headers'
import Transform from './methods/Transform'
import Error from './methods/Error'
import Cancel from './methods/Cancel'
import NoPage from './methods/NoPage'
import AxiosInstance from './methods/AxiosInstance'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

const Output = () => {
    return (
        <>

            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path='/get' element={<Get />} />
                    <Route path='/post' element={<Post />} />
                    <Route path='/put' element={<Put />} />
                    <Route path='/delete' element={<Delete />} />
                    <Route path='/sim' element={<Sim />} />
                    <Route path='/headers' element={<Headers />} />
                    <Route path='/transform' element={<Transform />} />
                    <Route path='/error' element={<Error />} />
                    <Route path='/cancel' element={<Cancel />} />
                    <Route path='/instance' element={<AxiosInstance />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>

            <Outlet />
        </>
    )
}

export default Output