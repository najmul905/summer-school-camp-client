import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {

  const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.form?.pathname || '/'

const {user,logOut}=useContext(AuthContext)
const handelLogOut=()=>{
  logOut()
  .then((data)=>{console.log(data)})
  .catch(error=>console.log(error.message))
  navigate(from,{replace:true})
}

// const image=user.

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
    {/* <a className="btn btn-ghost normal-case text-xl italic">Summer School</a> */}
    <img className="md:h-14 md:w-14 h-8 w-8 rounded-full" src="study care.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold">
     {navOption}
    </ul>
  </div>
  <div className="navbar-end">
   <div className="mr-2"> {
      user&& <img className=" md:h-12 md:w-12 h-7 w-7 rounded-full" src={user.photoURL} alt="" />
    }</div>
  
<div>
{
  user?<><button className="md:p-2 p-1 rounded bg-orange-400 text-white md:font-bold font-semibold" onClick={handelLogOut}>LogOut</button></>:<><Link to='/logIn'><button className="md:p-2 p-1 rounded bg-orange-400 text-white md:font-bold font-semibold">LogIn</button></Link></>
}
</div>
    


  </div>
</div>
        </div>
    );
};

export default Navbar;