import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const navigate = useNavigate();

  const [input, setInputs] = useState({ });


  const handleuser = (e) => {
    e.preventDefault();

    const items = JSON.parse(localStorage.getItem("items"));

    console.log("helo", items);

    localStorage.setItem("items", JSON.stringify([...items, input]));

navigate('/home')
  };

//   const validate =(values)=>{
//     const errors ={}
//     if(!values.name){
//         errors.name= "username is required !"
//     }
//     if(!values.email){
//         errors.email= "email is required !"
//     }
//   return errors
// }

  

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="container">
      <h2 className="text-center">Add user</h2>
      <form className="w-25 mx-auto bg-secondary p-5" onSubmit={handleuser}>
        <div class="form-group mb-4">
          <label for="exampleInputEmail1" className="mb-2 text-white">
            Name:
          </label>
          <input
            type="text"
            name="name"
            class="form-control m-10"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            value={input.name}
            onChange={handleChange}
       required />
        </div>
        <div class="form-group ">
          <label for="exampleInputPassword1" className="mb-2 text-white">
            Email:
          </label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            value={input.email}
            onChange={handleChange}
          required />
        </div>
        <button type="submit" class="btn btn-primary m-4 w-75">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddUser;
