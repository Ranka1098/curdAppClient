import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const UpdateUser = () => {
  // handle multiple input fileds
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const navigate = useNavigate();
  // get id from user
  const { id } = useParams();
  console.log("user id :", id);

  // get data from the user id
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`http://localhost:8000/singleUser/${id}`);
      console.log(res);
      setUser(res.data.data);
    };
    getUser();
  }, [id]);

  //

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // jab mein from submit karu to user update ho jana chahiye
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:8000/updateUser/${id}`,
        user
      );
      navigate("/");
      toast.success(res.data.msg, { position: "top-right" });
      console.log(res);
    } catch (error) {}
  };

  return (
    <>
      <div className="bg-gray-600 p-5 h-screen">
        <div className="container mx-auto p-5 bg-white w-[500px] mt-10">
          <Link to="/" className="bg-purple-600 p-2 text-white rounded-md">
            Back
          </Link>

          <h1 className="text-center text-xl ">Update user</h1>

          <form action="" onSubmit={formSubmitHandler}>
            {/* first name */}
            <div>
              <label htmlFor="">First Name</label>
              <input
                type="text"
                placeholder="Enter first Name"
                name="fname"
                value={user.fname}
                onChange={handleInput}
                className="border-[1px] border-black w-full mb-3"
              />
            </div>
            {/* last name */}
            <div>
              <label htmlFor="">last Name</label>
              <input
                type="text"
                placeholder="Enter last Name"
                name="lname"
                value={user.lname}
                onChange={handleInput}
                className="border-[1px] border-black w-full mb-3"
              />
            </div>
            {/* email */}
            <div>
              <label htmlFor="">email</label>
              <input
                type="text"
                placeholder="Enter email"
                name="email"
                value={user.email}
                onChange={handleInput}
                className="border-[1px] border-black w-full mb-3"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full p-2 bg-green-600 text-white"
            >
              Update User
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
