import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../../Provider/AuthProvider";

const SelectedClass = () => {
const {user}=useContext(AuthContext)

    const { data: data = [], } = useQuery(['data'], async () => {
        const res = await fetch('http://localhost:5000/userData')
        return res.json()
      })
      const usersData=data.filter(item=>item.userEmail==user.email)
console.log(usersData)
    return (
        <div>
            <h1>This is selected class</h1>
        </div>
    );
};

export default SelectedClass;