import "./App.scss";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const initialValue = {
    username:"",
    email:"",
    number:"",
    password:"",
    dateOfBirth:""
  }
  const url = "http://localhost:3001/";
  const [list, setlist] = useState([]);
  const [update, setUpdate] = useState(false)

  const [userdetails, setuserdetails] = useState(initialValue);
  useEffect(() => {
    getUSerdetails()
  }, [list]);

  const getUSerdetails = () => {axios.get(url).then((result) => setlist(result.data));};

  const handleChange = (e) => {
    setuserdetails({ ...userdetails, [e.target.name]: e.target.value });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    console.log(userdetails);
     axios.post(url, userdetails).then((result)=>console.log(result)).catch(e=>console.log(e));
  };
  const updateuser = (e)=>{
    e.preventDefault()
    console.log(userdetails);
    axios.put(url+userdetails._id, userdetails).then((res)=>console.log(res))
    getUSerdetails()
  }

  const handleEdit =(data)=>{
    setuserdetails(data)
    console.log(userdetails);
    setUpdate(true)
  }

  const handleDelete =(id)=>{
    axios.delete(url+`${id}`).then((res)=>console.log(res))
    getUSerdetails()
    setuserdetails(initialValue)

  }

  return (
    <div className="App">
      <div className="form">
        <form action="">
          <h1>{update ? "Update" : "Create  "}</h1>
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
          <button onClick={update? updateuser:handleSubmit}>{update? "Update" : "Submit"}</button>
        </form>
      </div>
      <div className="list">
        <table>
          <tbody>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Password</td>
              <td>Number</td>
              <td>Actions</td>
            </tr>

            {list.map((data, x) => (
              <tr key={x}>
                <td>{data._id}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>{data.number}</td>
                <td>
                  <button className="edit" onClick={()=>handleEdit(data)}>Edit</button>
                </td>
                <td>
                  <button className="delete" onClick={()=>handleDelete(data._id)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
