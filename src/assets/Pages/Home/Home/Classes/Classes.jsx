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
        <div className="lg:mx-24 md:mx-20 mx-10">
    <div className="text-center my-6 w-1/2 mx-auto rounded-md text-white italic bg-indigo-500 p-5">
          <h1 className="md:text-2xl text-1xl">See.....</h1>
          <div className="w-1/2 mx-auto "><hr /></div>
          <h1 className="lg:text-5xl md:text-3xl font-semibold">Our Class</h1>
        </div>


   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto text-center mt-5">
   {
classData.map(data=> <div key={data._id}>

<div >
<div className="card card-compact md:h-96 h-72  bg-base-100 shadow-xl">
  <figure><img className="md:h-[40vh] md:w-[40vw] h-full w-full" src={data.image} alt="" /></figure>
  <div className="">
    <h2 className=""><span className="font-semibold">Sports Name:</span> {data.className}</h2>
    <h2 className=""><span className="font-semibold">Instructor Name:</span> {data.instructorName
}</h2>
    <p> <span className="font-semibold">Price: </span>{data.price}taka</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handelUserData(data)} className="bg-rose-400 p-1 md:p-2 mr-2 rounded-md text-white font-semibold md:font-bold">Enroll Now</button>
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