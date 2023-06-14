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
import Classes from "../Pages/Home/Home/Classes/Classes";
import AddInstructor from "../Pages/Dashbord/AddInstrunctor/AddInstructor";
import ClassReques from "../Pages/Dashbord/ClassRequest/ClassReques";
import AddClass from "../Pages/Dashbord/AddClass/AddClass";
import MyClass from "../Pages/Instructor/MyClass.jsx/MyClass";

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
        path:"classes",
        element:<Classes></Classes>
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
},
{
  path:"instructor",
  element:<AddInstructor></AddInstructor>
},
{
  path:"classrequest",
  element:<ClassReques></ClassReques>
},
{
  path:"addclass",
  element:<AddClass></AddClass>
},
{
  path:"myclass",
  element:<MyClass></MyClass>
}
          ]
        }

      ]
    },

  ]);