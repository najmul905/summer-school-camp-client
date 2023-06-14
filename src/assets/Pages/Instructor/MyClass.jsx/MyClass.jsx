import { useQuery } from "react-query";

const MyClass = () => {

    const {data: users = []}=useQuery(['users'],async()=>{
        const res=await fetch('http://localhost:5000/users');
        return res.json()
    })
    console.log(users)

    
    return (
        <div>
          
        </div>
    );
};

export default MyClass;