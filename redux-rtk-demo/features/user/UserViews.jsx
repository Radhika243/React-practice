import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {fetchUsers} from './userSlice';

const UserViews = () => {
  const user = useSelector((state)=>state.user)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
    return (
        <div>
          <h2>List of users</h2>
          {user.loading && <h2>Loading....</h2>}
          {!user.loading && user.error ?  <h2>ERROR:{user.error}</h2> : null}
          {!user.loading && user.users.length ? (
            <ul>
             {
               user.users.map(user=>{
                return <li key={user.id}>{user.name}</li>
               })
             }
            </ul>
          ):null}

        </div>
      )
    
}

export default UserViews
