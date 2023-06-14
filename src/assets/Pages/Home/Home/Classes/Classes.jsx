import { useEffect } from "react";
import { useState } from "react";

const Classes = () => {

const [cart,setCart]=useState([])

useEffect(()=>{
    fetch('http://localhost:5000/class')
    .then(res=>res.json())
    .then(data=>setCart(data))
},[])

const classData=cart.filter(item=>item.status=="confirm")
console.log(classData)
    return (
        <div>
   <h1>{cart.length}</h1>


   <div className="grid grid-cols-3 gap-5 mx-auto text-center">
   {
classData.map(data=> <div key={data._id}>

<div >
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={data.image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{data.className}</h2>
    <h2 className="card-title">{data.InstructorName}</h2>
    <p>{data.price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add the Class</button>
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