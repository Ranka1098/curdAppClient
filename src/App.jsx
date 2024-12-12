import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GetUser from "./component/GetUser";
import AddUser from "./component/AddUser";
import UpdateUser from "./component/UpdateUser";

const App = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <GetUser />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
    {
      path: "/update/:id",
      element: <UpdateUser />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default App;
