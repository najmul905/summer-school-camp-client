import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

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
   <ul className="md:flex md:items-center">
   <li className="mr-3 font-semibold"><Link to="/">Home</Link></li>
    <li className="mr-3 font-semibold"><Link to="/instructor">Instructor</Link></li>
    <li className="mr-3 font-semibold"><Link to="/classes">Classes</Link></li>
   {user && <li className="mr-3 font-semibold"><Link to="/dashboard">Dashboard</Link></li>}
   </ul>
    </>

    const[open,setOpen]=useState(false)
    return (
        <div>
            <div className="flex items-center justify-between md:px-10 px-2 py-4 bg-white ">
  <div className="navbar-start">
    <img className="md:h-14 md:w-14 h-8 w-8 rounded-full" src="study care.png" alt="" />
  </div>

  <div onClick={()=>setOpen(!open)} className='text-2xl text-black left-12 px-2 bg-white  absolute md:static md:hidden'>
            {open? <AiOutlineClose></AiOutlineClose>:<BiMenu></BiMenu>
            }
            </div>
  <div className={`md:mt-0 transition-all z-10  left-12 px-2 bg-white  absolute md:static ${open?'top-16':'top-[-200px]'} `}>
    
     {navOption}
   
  </div>
  <div className="flex items-center">
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