import { useQuery } from "react-query";
import { Link, Outlet } from "react-router-dom";

const Dashbord = () => {

  const {data: users = []}=useQuery(['users'],async()=>{
    const res=await fetch('http://localhost:5000/users');
    return res.json()
})
console.log(users)
const isAdmin=false
const isInstructor=true
// const isUser=false
const dashboardLink=<>

{
  isAdmin &&<><li><Link to="/dashboard/instructor">Manage User</Link></li>
  <li><Link to="/dashboard/classrequest">Manage Classes</Link></li>
  </> || isInstructor &&<><li><Link to="/dashboard/addclass">Add class</Link><Link to="/dashboard/myclass">My class</Link></li> 
  </> ||<><li><Link to="/dashboard/selectedClass">My Selected Class</Link></li>
  <li><Link to="/dashboard/enrolledClass">My Enrolled Class</Link></li>
  </>
}
</>

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