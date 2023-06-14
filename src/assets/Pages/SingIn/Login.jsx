import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const Login = () => {
    const {logIn,GoogleLogIn}=useContext(AuthContext)

    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.form?.pathname || '/'
    console.log(location)

const handelLogIn=(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value
    logIn(email,password)
    .then(res=>{
        console.log(res.user)
        
    })
    .catch(error=>console.log(error.message))
    navigate(from,{replace:true})
    
}

// google

const handelGoogle=()=>{
GoogleLogIn()
.then(result=>{
  const googleUser=result.user
  console.log(googleUser);
  const users={name:googleUser.displayName,image:googleUser.photoURL,email:googleUser.email}

// save users
fetch('http://localhost:5000/users',{
                  method:"POST",
                  headers:{
                    'content-type':'application/json'
                  },
                  body:JSON.stringify(users)
                })
                .then(res=>res.json())
                .then(data=>console.log(data))



})
.catch((error) => {
  console.log(error)
});
}
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelLogIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" required placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" required placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div>
            <h1>If You are in new ..<Link className="font-bold text-orange-300" to="/singUp"><a href="">create a new account</a></Link>
</h1>
<div className="my-4 text-center ">
<button className="bg-indigo-500 p-2 rounded text-white" onClick={handelGoogle}>LonIn google google</button>
</div>
        </div>
      </form>
    </div>
  </div>
</div>
<div>
  
</div>
        </div>
    );
};

export default Login;