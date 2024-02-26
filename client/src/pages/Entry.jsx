import React from "react";
import customHooks from "./customHooks";

const Entry = () => {
  const {url,userdetails,setuserdetails,handleChange}= customHooks()
  const [update, setUpdate] = useState(false);
  const [gender, setGender] = useState({
    male: false,
    female: false,
  });

 
  const handleRadio = (e) => {
    setGender(() => {
      if (e.target.name === "male") {
        setuserdetails({ ...userdetails, gender: "male" });
        return { male: true, female: false };
      }
      setuserdetails({ ...userdetails, gender: "female" });
      return { male: false, female: true };
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userdetails);
    axios
      .post(url, userdetails)
      .then((result) => console.log(result))
      .catch((e) => console.log(e));
  };

  const updateuser = (e) => {
    e.preventDefault();
    axios
      .put(url + userdetails._id, userdetails)
      .then((res) => console.log(res));
    getUSerdetails();
    setuserdetails(initialValue);
    setUpdate(false);
  };
  return (
    <div>
      <div className="form">
        <form action="">
          <h1>{update ? "Update" : "Create"}</h1>
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
          <button onClick={update ? updateuser : handleSubmit}>
            {update ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Entry;
