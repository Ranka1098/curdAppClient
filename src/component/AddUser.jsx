import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const AddUser = () => {
  const users = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(users);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target; // Input के name और value को प्राप्त करें
    setUser({ ...user, [name]: value }); // स्टेट को अपडेट करें

    // jo user ka data aa raha usko api me pass karna hai
  };

  //jab form submit karenge to api ko call karke data add kare
  const submitForm = async (e) => {
    e.preventDefault();
    console.log("User data to be sent:", user);
    try {
      const res = await axios.post("http://localhost:8000/createUser", user);
      toast.success(res.data.msg, { position: "top-right" });
      console.log(res);
      navigate("/");
    } catch (error) {
      setError("Failed to add user. Please try again.");
    }
  };

  return (
    <div className="bg-gray-500 p-5 h-screen  ">
      <div className="container mx-auto w-[500px]  bg-white mt-10 p-5 rounded-md shadow-lg">
        <Link to="/" className="text-md">
          <button className="p-2 mb-2 text-white bg-purple-600 rounded-md ">
            Back
          </button>
        </Link>

        <h1 className="text-center font-roboto text-xl ">Add User</h1>
        {/* error */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* form */}

        <form action="" onSubmit={submitForm}>
          <div>
            <label htmlFor="" className="text-bold font-roboto">
              First Name
            </label>
            <input
              type="text"
              name="fname"
              value={user.fname}
              placeholder="first name"
              className="border-[1px] border-black w-full p-1 mb-1"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="" className="text-bold font-roboto">
              Last Name
            </label>
            <input
              type="text"
              name="lname"
              value={user.lname}
              placeholder="last name"
              className="border-[1px] border-black w-full p-1 mb-1"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor=""
              placeholder="Email"
              className="text-bold font-roboto"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              value={user.email}
              placeholder="Email"
              className="border-[1px] border-black w-full p-1 mb-1"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="" className="text-bold font-roboto">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Password"
              className="border-[1px] border-black w-full p-1 mb-3"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white text-center p-2"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
