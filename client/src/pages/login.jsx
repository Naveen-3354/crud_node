import React from "react";
import customHooks from "./customHooks";

const Login = () => {
    const {url,userdetails,setuserdetails,handleChange}= customHooks()
  return (
    <div>
      <form action="">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userdetails.username}
          onChange={handleChange}
        />
        <input
          type="date"
          value={userdetails.dateOfBirth}
          name="dateOfBirth"
          placeholder="Password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
