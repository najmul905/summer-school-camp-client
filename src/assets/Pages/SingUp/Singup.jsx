import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";

const image_hosting_token=import.meta.env.VITE_IMAG2_TOKEN

const Singup = () => {
const {createUser,updateUserProfile}=useContext(AuthContext)
const img_hosting_url=`https://api.imgbb.com/1/upload?key=${image_hosting_token}`

const {register,handleSubmit,formState: { errors },
  } = useForm();
  const onSubmit=data=>{
    console.log(data)
   
  const formData= new FormData();
  formData.append('image',data.image[0])
  fetch(img_hosting_url,{
      method:'POST',
  body:formData
     
  })
  .then(res=>res.json())
  .then(postData=>{
  if(postData.success){
  const image=postData.data.display_url
  
  const{email,name,password,confirmPassword}=data

  if(password===confirmPassword){
    console.log(name,email,password)
    createUser(email,password)
    .then(result=>{
        const user=result.user
        console.log(user)
const users={name:name,email:email,image:image}
        fetch('http://localhost:5000/users',{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(users)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

        console.log(user)
        updateUserProfile(name,image)
        .then(res=>{console.log(res.user)})
        .catch(err=>console.log(err.message))
    })
    .catch(error=>console.log(error.message))
}
else{
    alert('Do not match your password and confirm password')
}

  }
  })
  
  }
  console.log(errors)

    


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
            <input type="text" {...register("name")} name="name" placeholder="name" required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" {...register("email")} name="email" required placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password")}  placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm password</span>
          </label>
          <input type="password" {...register("confirmPassword")} placeholder="password" className="input input-bordered" />
        </div>
        <div className="my-4 text-center">
        <input type="file" {...register("image")} name="image" className="file-input file-input-bordered file-input-lg w-full max-w-xs" />
        </div>


        <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default Singup;