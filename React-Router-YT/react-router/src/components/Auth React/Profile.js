// import React from 'react'
// import { useAuth } from './auth';
// import {useNavigate} from 'react-router-dom';


// const Profile = () => {
//     const auth = useAuth();
//     const navigate = useNavigate();

//     const handleLogout = () =>{
//         auth.logout();
//         navigate('/')
//     }
//   return (
//     <div>
//       <h2>Welcome {auth.user}</h2>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   )
// }

// export default Profile

import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

 const Profile = () => {
  const navigate = useNavigate()
  const auth = useAuth()
  const handleLogout = () => {
    auth.logOut()
    navigate('/')
  }
  return (
    <div>
      Welcome {auth.user}.
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile;
