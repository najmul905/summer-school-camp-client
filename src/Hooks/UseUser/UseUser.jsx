import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../Provider/AuthProvider";

const UseUser = () => {
    const{user,loading}=useContext(AuthContext)
    if(loading){
        <>loading...</>
    }

const{data:person=[]}=useQuery(['person'],async()=>{
  
    const res= await   fetch( `https://school-summer-sport-camp-server.vercel.app/users/${user.eamil}`)
    return res.json()
})

    return [person]
};

export default UseUser;