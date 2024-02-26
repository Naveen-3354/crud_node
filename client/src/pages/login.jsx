import React from "react";
import useCustomHooks from "./customHooks";
import { Link } from "react-router-dom";

const Login = () => {
  const { userdetails, handleLogin, handleChange } =
    useCustomHooks();
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h2>Login</h2>
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={userdetails.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          value={userdetails.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button onClick={handleLogin}>Submit</button>
      </form>
      <div
        className="div"
        style={{
          cursor: "pointer",
        }}
      >
        <Link to="/register">
          <p>/ Register</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
