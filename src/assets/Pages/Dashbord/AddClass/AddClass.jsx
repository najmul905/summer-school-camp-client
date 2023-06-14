import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../Provider/AuthProvider";
const image_hosting_token=import.meta.env.VITE_IMAG_TOKEN


const AddClass = () => {

const {user}=useContext(AuthContext)
const {email,displayName}=user
const status=null

const img_hosting_url=`https://api.imgbb.com/1/upload?key=${image_hosting_token}`

const {register,handleSubmit,formState: { errors },
  } = useForm();
const onSubmit=data=>{
   console.log(data.className,data.instructorName,data.image,data.price,data.seats)
const formData= new FormData();
formData.append('image',data.image[0])
fetch(img_hosting_url,{
    method:'POST',
body:formData
   
})
.then(res=>res.json())
.then(postData=>{
if(postData.success){
const imgUrl=postData.data.display_url
const{className,instructorName,price,seats,}=data
const item={email,className,instructorName,price: parseFloat(price),seats,image:imgUrl,status}

console.log(item)
fetch('http://localhost:5000/class',{
  method:"POST",
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(item)
})
.then(res=>res.json())
.then(data=>console.log(data))

}


})


}
  console.log(errors)

    return (
        <div>
            <h1>This is add class</h1>
            <div className="  rounded  bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full p-10">
        <div className="text-3xl text-amber-500 font-bold text-center">
            <h3>Add a New Class</h3>
        </div>
        <div className="flex m-4">
        <div className="form-control m-2">
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input type="text" {...register("className")} name="className" placeholder="Class Name" className="input input-bordered" />
        </div>
        <div className="form-control m-2">
          <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
          <input type="text" defaultValue={displayName} disabled {...register("instructorName")} name="instructorName" placeholder="Instructor Name" className="input input-bordered" />
         
        </div>
        </div>
        <div className="flex m-4">
        <div className="form-control m-2">
          <label className="label">
            <span className="label-text">Available Seats</span>
          </label>
          <input type="number" {...register("seats")} name="seats" placeholder="Available Seats" className="input input-bordered" />
        </div>
        <div className="form-control m-2">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" {...register("price")} name="price" placeholder="Price" className="input input-bordered" />
         
        </div>
        </div>
        <div className="my-4 text-center">
        <input type="file" {...register("image")} name="image" className="file-input file-input-bordered file-input-lg w-full max-w-xs" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add The Class<address></address></button>
        </div>
      </form>
    </div>
  </div>

        
    );
};

export default AddClass;