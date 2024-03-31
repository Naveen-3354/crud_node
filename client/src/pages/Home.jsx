import React, { useState, useEffect } from "react";
import useCustomHooks from "./customHooks";

const Home = () => {
  const { list, handleDelete, getUSerdetails, handleEdit, handleChange,handleRadio,gender, setGender,setuserdetails, userdetails} =
    useCustomHooks();

  useEffect(() => {
    getUSerdetails();
  }, []);
  const [isOpen, setIsOpen] = useState(false);

const openDialog = (data) => {setIsOpen(true); setuserdetails(data) };
const closeDialog = () => setIsOpen(false);
  return (
    <div style={{
      width:"100vw",
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
    }}>
      <div className="list" >
        {list.map((data, index) => (
          <div className="box" key={index}>
            <p>Username : {data.username}</p>
            <p>Email : {data.email}</p>
            <p>Number : {data.number}</p>
            <p>Username : {data.username}</p>
            <p>Date of birth : {data.dateOfBirth}</p>
            <div className="button">
              <button className="edit" onClick={()=>openDialog(data)}>
                Edit
              </button>
              <button className="delete" onClick={() => handleDelete(data._id)}>
                delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="dialog-overlay" style={{
          position:"absolute",
          zIndex:'2',
          backgroundColor:"#fff",
          padding:"20px",
          borderRadius:"10px"
        }}>
          <div className="dialog">
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
              checked={userdetails.gender === 'male'}
              onClick={() => setGender(!gender)}
            />
            <span>Male</span>

            <input
              type="radio"
              name="female"
              checked={userdetails.gender === "female"}
              onChange={handleRadio}
              onClick={() => setGender(!gender)}
            />
            <span>Female</span>
          </div>
          {/* <AccountCircleIcon className
            
          /> */}
          <button >Submit</button>
            <button onClick={closeDialog}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
