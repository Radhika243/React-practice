import React from 'react'
import {useParams} from 'react-router-dom';

function User(props) {
    const {userid} = useParams()

    return (
        <>
             <div className='bg-pink-400 py-6 justify-center text-3xl text-sky-800'>User:{userid}</div>
        </>
    )
}

export default User;
