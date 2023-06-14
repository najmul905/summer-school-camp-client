
import { useQuery } from "react-query";

const AddInstructor = () => {

    const {data: users = [],refetch}=useQuery(['users'],async()=>{
        const res=await fetch('http://localhost:5000/users');
        return res.json()
    })
    
    console.log(users)




// handelInstructor
const handelInstructor=(data)=>{
    fetch( `http://localhost:5000/users/instructor/${data._id}`,{
        method:"PATCH"
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount){
            refetch
        }
       
        console.log(data)})

}
// handelAdmin
const handelAdmin=(data)=>{
    fetch( `http://localhost:5000/users/admin/${data._id}`,{
        method:"PATCH"
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount){
            refetch
        }
       
        console.log(data)})

}
// handelDelete
const handelDelete=(data)=>{

  fetch(`http://localhost:5000/users/${data._id}`,{
    method:'DELETE'
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.modifiedCount){
      refetch
    }
  })

}

    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         <th>#</th>
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Make Instructor</th>
        <th>Make Admin</th>
        <th>Delete User</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
            users.map((data,index)=> <tr key={data._id} >
       
                <th>
                  <h1>{index+1}</h1>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={data.image} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{data.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  
                 <div>
                    <h1>{data.email}</h1>
                 </div>
                </td>
               
                <th>
                    {
                        data.role==='instructor'?'Instructor': <button onClick={()=>handelInstructor(data)} className="btn btn-ghost btn-xs bg-lime-300">Make instructor</button>
                    }
                 
                </th>
                <th>
                  {

                    data.role==='admin'?'Admin':<button onClick={()=>handelAdmin(data)} className="btn btn-ghost btn-xs bg-lime-500">Make Admin</button>
                  }
                </th>
                <th>
                  <button onClick={()=>handelDelete(data)} className="btn btn-ghost btn-xs bg-red-700 text-white">Delete</button>
                </th>
              </tr>)
        }
     
     
    </tbody>
    {/* foot */}
    
  </table>
</div>
        </div>
    );
};

export default AddInstructor;