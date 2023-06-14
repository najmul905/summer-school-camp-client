
import { useQuery } from "react-query";

const AddInstructor = () => {

// handelInstructor
const handelInstructor=(data)=>{
    
}
// handelAdmin
const handelAdmin=(data)=>{

}
// handelDelete
const handelDelete=(data)=>{

}


// const{data:users=[]}=useQuery({queryKey:['users'],queryFn:async()=>{
//     const res=await fetch('http://localhost:5000/users');
//     return res.json
// }})

const {data: users = []}=useQuery(['users'],async()=>{
    const res=await fetch('http://localhost:5000/users');
    return res.json()
})

console.log(users)

    


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
                  <button onClick={()=>handelInstructor(data)} className="btn btn-ghost btn-xs bg-lime-300">Make instructor</button>
                </th>
                <th>
                  <button onClick={()=>handelAdmin(data)} className="btn btn-ghost btn-xs bg-lime-500">Make Admin</button>
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