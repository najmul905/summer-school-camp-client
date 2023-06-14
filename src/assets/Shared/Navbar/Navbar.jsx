import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {

const {user,logOut}=useContext(AuthContext)
const handelLogOut=()=>{
  logOut()
  .then(()=>{})
  .catch(error=>console.log(error.message))
}

    const navOption=<>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/instructor">Instructor</Link></li>
    <li><Link to="/classes">Classes</Link></li>
   {user && <li><Link to="/dashboard">Dashboard</Link></li>}
     
    </>
    return (
        <div>
            <div className="navbar bg-orange-200 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
        {navOption}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold">
     {navOption}
    </ul>
  </div>
  <div className="navbar-end">
  
{
  user?<><button onClick={handelLogOut}>LogOut</button></>:<><Link to='/logIn'><button>LogIn</button></Link></>
}
    


  </div>
</div>
        </div>
    );
};

export default Navbar;