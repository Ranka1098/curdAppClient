import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: "Home page",
    },
    {
      path: "/add",
      element: "user add page",
    },
    {
      path: "/update",
      element: "user update page",
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default App;
