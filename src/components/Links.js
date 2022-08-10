import React from 'react'
import { Link } from "react-router-dom"

const Links = () => {

    return (
        <>
            <div className='mt-5 d-flex gap-2 text-center justify-content-center align-items-center'>
                <Link to="get" className='btn btn-primary fw-bold'>GET</Link>
                <Link to="post" className='btn btn-info text-white fw-bold'>POST</Link>
                <Link to="put" className='btn btn-warning text-white fw-bold'>PUT/PATCH</Link>
                <Link to="delete" className='btn btn-danger fw-bold'>DELETE</Link>
                <Link to="sim" className='btn btn-dark fw-bold'>Sim Request</Link>
                <Link to="headers" className='btn btn-secondary fw-bold'>Custom Headers</Link>
                <Link to="transform" className='btn btn-secondary fw-bold'>Transform</Link>
                <Link to="error" className='btn btn-secondary fw-bold'>Error Handling</Link>
                <Link to="cancel" className='btn btn-secondary fw-bold'>Cancel</Link>
            </div>
            <div className='border-bottom mt-5'></div>
        </>
    )
}

export default Links