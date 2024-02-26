import useCustomHooks from "./customHooks";

const Popup = () => {
    const { userdetails, gender,setGender, handleRadio, handleChange, handleUpdate } =
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
        backgroundColor:"rgba(0, 0, 0, 0.404)"
      }}
    >
      <h2
        style={{
          margin: "0px",
        }}
      >
        Update
      </h2>
      <div className="form">
        <form action="">
          <input
            type="text"
            name="username"
            placeholder="Username"
            // value={userdetails.username}
            // onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            // value={userdetails.email}
            // onChange={handleChange}
          />
          <input
            type="text"
            name="number"
            placeholder="Number"
            // value={userdetails.number}
            // onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            // value={userdetails.password}
            // onChange={handleChange}
          />
          <input
            type="date"
            name="dateOfBirth"
            placeholder="Password"
            // value={userdetails.dateOfBirth}
            // onChange={handleChange}
          />
          <div className="radio">
            <input
              type="radio"
              name="male"
            //   onChange={handleRadio}
            //   checked={gender.male}
            //   onClick={() => setGender(!gender)}
            />
            <span>Male</span>

            <input
              type="radio"
              name="female"
            //   checked={gender.female}
            //   onChange={handleRadio}
            //   onClick={() => setGender(!gender)}
            />
            <span>Female</span>
          </div>
          <button >update</button>
        </form>
      </div>
      
    </div>
  );
};

export default Popup;
