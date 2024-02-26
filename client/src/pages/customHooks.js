import React,{useState} from 'react'

const customHooks = () => {
    const initialValue = {
        username: "",
        email: "",
        number: "",
        password: "",
        dateOfBirth: "",
        gender: "",
      };
      const url = "http://localhost:3001/";
      const [userdetails, setuserdetails] = useState(initialValue);
      const handleChange = (e) => {
        setuserdetails({ ...userdetails, [e.target.name]: e.target.value });
      };
  return (
    {url, userdetails, setuserdetails,handleChange}
  )
}

export default customHooks