import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const useCustomHooks = () => {
  const navigate = useNavigate();
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
  const [update, setUpdate] = useState(false);
  const [list, setlist] = useState([]);
  const handleChange = (e) => {
    setuserdetails({ ...userdetails, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userdetails);
    axios
      .post(url + `login`, userdetails)
      .then(() => navigate("/home"))
      .catch((e) => console.log(e));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(userdetails);
    axios
      .post(url + `register`, userdetails)
      .then(() => navigate("/"))
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

  const handleDelete = (id) => {
    axios.delete(url + `${id}`).then((res) => console.log(res));
    getUSerdetails();
    setuserdetails(initialValue);
  };
  const getUSerdetails = () => {
    axios.get(url).then((result) => setlist(result.data));
  };
  const handleEdit = (data) => {
    setuserdetails(data);
  };
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
  return {
    url,
    gender,
    handleRadio,
    userdetails,
    setuserdetails,
    handleChange,
    handleLogin,
    handleRegister,
    handleDelete,
    getUSerdetails,
    setGender,
    list,
    handleEdit,
  };
};

export default useCustomHooks;
