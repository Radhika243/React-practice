import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//value and onChange are controlled by React, so these are controlled components
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted.\n Username : ${username}\n Password:${password} `);
  };
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <br></br>
          <input
            style={{ width: "60%" }}
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            id="name"
            name="username"
            placeholder="Enter username"
          />
          <br></br>

          <label htmlFor="pwd">password </label>
          <input
            style={{ width: "60%" }}
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="pwd"
            name="password"
            placeholder="enter password"
          />
        </div>

        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
