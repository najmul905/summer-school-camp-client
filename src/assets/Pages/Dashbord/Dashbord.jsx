// import { useContext, } from "react";
import { Link, Outlet } from "react-router-dom";
// import UseUser from "../../../Hooks/UseUser/UseUser";
// import { AuthContext } from "../../../Provider/AuthProvider";

const Dashbord = () => {

//  const[person]=UseUser
  


const isAdmin=true
const isInstructor=false
 

const dashboardLink=<>

{
  isAdmin &&<><li><Link className="bg-green-300" to="/dashboard/instructor">Manage User</Link></li>
  <li><Link className="bg-green-300" to="/dashboard/classrequest">Manage Classes</Link></li>
  </> || isInstructor &&<><li ><Link className="bg-green-300" to="/dashboard/addclass">Add class</Link><Link className="bg-green-300" to="/dashboard/myclass">My class</Link></li> 
  </> ||<><li><Link className="bg-green-300" to="/dashboard/selectedClass">My Selected Class</Link></li>
  <li><Link className="bg-green-300" to="/dashboard/enrolledClass">My Enrolled Class</Link></li>
  </>
}
</>
// if(isLoading){
//   return 'loading...'
// }
    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-orange-300 text-base-content">
      {/* Sidebar content here */}
      {dashboardLink}

      
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashbord;