import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Singup = () => {
const {createUser}=useContext(AuthContext)

    const handelSubmit=(event)=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const confirmPassword=form.ConfirmPassword.value;
        if(password===confirmPassword){
            console.log(name,email,password)
            createUser(email,password)
            .then(result=>{
                const user=result.user
                console.log(user)
            })
            .catch(error=>console.log(error.message))
        }
        else{
            alert('Do not match your password and confirm password')
        }
       
        
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <form onSubmit={handelSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" required className="input input-bordered" />
        </div>
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
          <input type="text" name="password" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm password</span>
          </label>
          <input type="text" name="ConfirmPassword" placeholder="password" className="input input-bordered" />
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