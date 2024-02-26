import React from "react";

const Home = () => {
    
  const [list, setlist] = useState([]);


  useEffect(() => {
    getUSerdetails();
  },[]);

  const getUSerdetails = () => {
    axios.get(url).then((result) => setlist(result.data));
  };

  

  const handleEdit = (data) => {
    setuserdetails(data);
    console.log(userdetails);
    setUpdate(true);
  };

  const handleDelete = (id) => {
    axios.delete(url + `${id}`).then((res) => console.log(res));
    getUSerdetails();
    setuserdetails(initialValue);
  };
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
