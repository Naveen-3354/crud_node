import useCustomHooks from "./customHooks";
import { Link } from "react-router-dom";

const Popup = () => {
    const { userdetails, gender,setGender, handleRadio, handleChange, handleRegister } =
    useCustomHooks();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h2
        style={{
          margin: "0px",
        }}
      >
        Register
      </h2>
      <div className="form">
        <form action="">
          <h1
            style={{
              margin: "0px",
            }}
          >
            Create
          </h1>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={userdetails.username}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={userdetails.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="number"
            value={userdetails.number}
            placeholder="Number"
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            value={userdetails.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <input
            type="date"
            value={userdetails.dateOfBirth}
            name="dateOfBirth"
            placeholder="Password"
            onChange={handleChange}
          />
          <div className="radio">
            <input
              type="radio"
              name="male"
              onChange={handleRadio}
              checked={gender.male}
              onClick={() => setGender(!gender)}
            />
            <span>Male</span>

            <input
              type="radio"
              name="female"
              checked={gender.female}
              onChange={handleRadio}
              onClick={() => setGender(!gender)}
            />
            <span>Female</span>
          </div>
          <button onClick={handleRegister}>Submit</button>
        </form>
      </div>
      <Link to="/">
        <p>/ Login</p>
      </Link>
    </div>
  );
};

export default Popup;
