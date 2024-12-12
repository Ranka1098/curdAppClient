import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-hot-toast";
import axios from "axios";

const GetUser = () => {
  const [user, setUser] = useState([]);

  //api se user ka data lekar aana hai
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:8000/getAllUser");
      setUser(res.data.data);
    };
    getData();
  }, []);

  const deleteUser = async (userId) => {
    const res = await axios.delete(
      `http://localhost:8000/deleteUser/${userId}`
    );
    console.log(res);
    // data delete hone ke baad state se bhi remove karna hai
    setUser((prevUser) => prevUser.filter((user) => user._id !== userId));
    toast.success(res.data.message, { position: "top-right" });
  };

  return (
    <div className="  bg-gray-400 h-screen p-5  ">
      <div className="container mx-auto bg-white p-5 mt-5">
        <Link to="/add">
          <button className="bg-purple-700  p-2 text-white rounded-md mb-5">
            Add User
          </button>
        </Link>
        {/* -------------------------------------------------------------------------- */}
        <table className="w-full border-collapse border border-black">
          <thead className="bg-blue-400">
            <tr className="text-left text-gray-700">
              <th className="px-4 py-2 border border-gray-300">Sr. No</th>
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">Email</th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.map((data, index) => {
              return (
                <tr className="text-left text-gray-700" key={index}>
                  <td className="px-4 py-2 border border-gray-300">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {data.fname} {data.lname}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {data.email}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <button
                      onClick={() => deleteUser(data._id)}
                      className="p-1 bg-red-500 text-white rounded-sm mr-5"
                    >
                      <AiOutlineDelete className="text-2xl" />
                    </button>
                    <Link to={`/update/` + data._id}>
                      <button className="p-1 bg-green-500 text-white rounded-sm">
                        <FaRegEdit className="text-2xl" />
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetUser;
