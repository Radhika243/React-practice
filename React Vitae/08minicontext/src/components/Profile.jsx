import React,{useContext} from 'react'
import UserContext from '../context/UserContext';

function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <h1 className='text-center'>Not logged in</h1>
    return (
        <div className='text-3xl text-center'>
            Profile:{user.username}
        </div>
    )
}

export default Profile;
