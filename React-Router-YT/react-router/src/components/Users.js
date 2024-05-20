import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";
//useSearchParams -> it's similar to useSearchParams
const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('filter') === 'Active';
  return (
    <div>
      <h2>User 1 </h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet />
      <button onClick={() => setSearchParams({filter:'Active'})}>Active Users</button>
      <button onClick={()=> setSearchParams({})}>Reset Users</button>
      {
        showActiveUsers ?
        <h2>Show all active users</h2>:
        <h2>Show all users</h2>
      }
    </div>
  );
};

export default Users;
