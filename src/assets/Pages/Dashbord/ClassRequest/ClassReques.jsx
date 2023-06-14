// import { useEffect } from "react";
// import { useState } from "react";
import { useQuery } from "react-query";

const ClassReques = () => {
// const [cart,setCart]=useState([])
// useEffect(()=>{
//     fetch('http://localhost:5000/class')
//     .then(res=>res.json())
//     .then(data=>setCart(data))
// },[])

const {data: cart = [], refetch}=useQuery(['cart'],async()=>{
    const res=await fetch('http://localhost:5000/class');
    return res.json()
})
// handelUpdate
const status="confirm"

const handelUpdate=(id)=>{
    const update={status}
    fetch(`http://localhost:5000/class/${id}`,{
    method:"PUT",
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(update)
})
.then(res=>res.json())
.then(data=>{
    if(data.modifiedCount){
refetch
    }
    console.log(data)
})

    
}

// handelDelete
const handelDelete=(id)=>{
console.log(id)
fetch(`http://localhost:5000/class/${id}`,{
    method:"DELETE"
})
.then(res=>res.json())
.then(data=>{
    if(data.deletedCount){
refetch
    }
    console.log(data)
})

}




    return (
        <div>
            { cart.length}
           {
cart.map(data=><div key={data._id}>

<div className="card card-side bg-base-100 my-4 w-full shadow-xl">
  <figure><img className="w-52 rounded" src={data.image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{data.className}</h2>
    <h2 className="card-title">{data.instructorName}</h2>
    <p>{data.price}</p>
    <div className="card-actions justify-end">
    {
        data.status=="confirm"?"confirm": <button onClick={()=>handelUpdate(data._id)} className="btn btn-primary">Click to Confirm</button>
    }
      <button onClick={()=>handelDelete(data._id)} className="btn btn-primary">Delete</button>
     <div>
     <button >
    
     </button>
     </div>
    </div>
  </div>
</div>
</div>)

           }
        </div>
    );
};

export default ClassReques;