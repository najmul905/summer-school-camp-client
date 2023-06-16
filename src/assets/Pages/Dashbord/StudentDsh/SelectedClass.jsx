import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../../Provider/AuthProvider";

const SelectedClass = () => {
const {user}=useContext(AuthContext)

    const { data: data = [], } = useQuery(['data'], async () => {
        const res = await fetch('https://school-summer-sport-camp-server.vercel.app/userData')
        return res.json()
      })
      const usersData=data.filter(item=>item.userEmail==user.email)
console.log(usersData)
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Class Name</th>
        <th>Instructor Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
     {
        usersData.map((data,index)=>  <tr key={data._id}>
            <th>{index+1}</th>
            <td>{data.className}</td>
            <td>{data.instructorName}</td>
            <td>{data.price}</td>
          </tr>)
     }

    
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default SelectedClass;