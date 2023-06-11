import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Instructor from "../Pages/Instructor/Instructor";
import Login from "../Pages/SingIn/Login";
import Singup from "../Pages/SingUp/Singup";
import ClassDetails from "../Pages/Home/Home/PopularClass/ClassDetails";
import PrivetRouts from "./PrivetRouts";
import Dashbord from "../Pages/Dashbord/Dashbord";
import SelectedClass from "../Pages/Dashbord/StudentDsh/SelectedClass";
import EnrolledClass from "../Pages/Dashbord/StudentDsh/EnrolledClass";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
           path:"/", 
           element:<Home></Home>
          },
        {
          path:"instructor",
           element:<Instructor></Instructor>
          },
        {
          path:"logIn",
          element:<Login></Login>
        },
        {
          path:"singUp",
          element:<Singup></Singup>
        },
        {
          path:"classDetails",
          element:<PrivetRouts><ClassDetails></ClassDetails></PrivetRouts>

        },
        {
          path:"dashboard",
          element:<Dashbord></Dashbord>,
          children:[
{
  path:'selectedClass',
  element:<SelectedClass></SelectedClass>
},
{
  path:"enrolledClass",
  element:<EnrolledClass></EnrolledClass>
}
          ]
        }

      ]
    },

  ]);