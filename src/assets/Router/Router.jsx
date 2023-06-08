import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Instructor from "../Pages/Instructor/Instructor";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        { path:"/", element:<Home></Home>},
        {path:"instructor", element:<Instructor></Instructor>}
      ]
    },
  ]);