import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../../Provider/AuthProvider";

const MyClass = () => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        <>loading....</>
    }
    const { data: data = [] } = useQuery(['data'], async () => {
        const res = await fetch('https://school-summer-sport-camp-server.vercel.app/class');
        return res.json()
    })

    const instructorData = data.filter(item => item.email === user?.email)

    console.log(instructorData)


    return (
        <div>

            <div className="">
                {
                    instructorData.map(data => <div key={data._id}>
<div className="card card-side bg-base-100 my-4  shadow-xl">
  <figure><img className="w-52 rounded" src={data.image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{data.className}</h2>
    <h2 className="card-title">{data.instructorName}</h2>
   
    <div className="card-actions justify-end">
  
  {
    data.status=="null"?<><h1>Pending..</h1></>:<><h1>Approved</h1></>
  }
    </div>
  </div>
</div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyClass;