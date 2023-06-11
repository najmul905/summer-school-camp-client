import { Link, Outlet } from "react-router-dom";

const Dashbord = () => {
const dashboardLink=<>
<li><Link to="/dashboard/selectedClass">My Selected Class</Link></li>
<li><Link to="/dashboard/enrolledClass">My Enrolled Class</Link></li>


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
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      {dashboardLink}
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashbord;