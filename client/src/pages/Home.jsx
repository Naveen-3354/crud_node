import React, { useState, useEffect } from "react";
import axios from "axios";
import useCustomHooks from "./customHooks";

const Home = () => {
  const { list, handleDelete, getUSerdetails, handleEdit } =
    useCustomHooks();

  useEffect(() => {
    getUSerdetails();
  }, []);

  return (
    <div>
      <div className="list">
        {list.map((data, index) => (
          <div className="box" key={index}>
            <p>Username : {data.username}</p>
            <p>Email : {data.email}</p>
            <p>Number : {data.number}</p>
            <p>Username : {data.username}</p>
            <p>Date of birth : {data.dateOfBirth}</p>
            <div className="button">
              <button className="edit" onClick={() => handleEdit(data)}>
                Edit
              </button>
              <button className="delete" onClick={() => handleDelete(data._id)}>
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
