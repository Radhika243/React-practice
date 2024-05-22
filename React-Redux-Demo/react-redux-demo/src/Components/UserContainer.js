import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./Redux";

function UserContainer({ userdata, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  return userdata.loading ? (
    <h2>loading</h2>
  ) : userdata.error ? (
    <h2>{userdata.error}</h2>
  ) : (
    <>
       <div>
      <h2>Users List</h2>
      <div>
        {userdata &&
          userdata.users &&
          userdata.users.map(user => <p>{user.name}</p>)}
      </div>
    </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userdata: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
