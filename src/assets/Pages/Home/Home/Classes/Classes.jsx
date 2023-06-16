import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../../../Provider/AuthProvider";
const Classes = () => {

const {user}=useContext(AuthContext)

const { data: cart = [], } = useQuery(['cart'], async () => {
  const res = await fetch('https://school-summer-sport-camp-server.vercel.app/class')
  return res.json()
})

const handelUserData=(data,)=>{
  console.log(data,user)
  const item={ className:data.className,id:data._id,instructorName:data.instructorName,price:data.price,userEmail:user.email}
fetch('https://school-summer-sport-camp-server.vercel.app/userData',{
  method:"POST",
  headers:{
    'content-type':"application/json"
  },
  body:JSON.stringify(item)
})
.then(res=>res.json())
.then(data=>console.log(data))
// console.log(item)
}
const classData=cart.filter(item=>item.status=="confirm")
console.log(classData)
    return (
        <div>
    <div className="text-center my-6 w-1/2 mx-auto rounded-md text-white italic bg-indigo-500 p-5">
          <h1 className="text-2xl">See.....</h1>
          <div className="w-1/2 mx-auto "><hr /></div>
          <h1 className="text-5xl font-semibold">Our Class</h1>
        </div>


   <div className="grid grid-cols-3 gap-5 mx-auto text-center">
   {
classData.map(data=> <div key={data._id}>

<div >
<div className="card card-compact w-auto px-5 bg-base-100 shadow-xl">
  <figure><img src={data.image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">Sports Name: {data.className}</h2>
    <h2 className="card-title">Instructor Name: {data.instructorName
}</h2>
    <p> Price: {data.price}taka</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handelUserData(data)} className="btn btn-primary">Add the Class</button>
    </div>
    <div>
    {
      data.discount &&<div className="badge badge-secondary">Discount {data.discount}%</div>
    }
    </div>
  </div>
</div>
</div>
</div>)

   }
   </div>
        </div>
    );
};

export default Classes;