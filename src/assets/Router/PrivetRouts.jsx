import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouts = ({children}) => {
const {user,loading}=useContext(AuthContext)
const location=useLocation()


if(loading){
    return <span className="loading loading-bars loading-lg"></span>
}
if(user){
    return children
}
 return <Navigate to='/logIn' state={{form:location}}></Navigate>
};

export default PrivetRouts;