

import { useQuery } from "react-query";

const PopulerIns = () => {


const { data: users = [], } = useQuery(['users'], async () => {
  const res = await fetch('http://localhost:5000/users')
  return res.json()
})
const instructor = users.filter(data => data.role == "instructor")

    return (
        <div>
          <div className="text-center w-1/2 mx-auto rounded-md text-white italic bg-indigo-500 p-5">
          <h1 className="text-2xl">See.....</h1>
          <div className="w-1/2 mx-auto "><hr /></div>
          <h1 className="text-5xl font-semibold">Our Popular Instructor</h1>
        </div>
            <div className="grid md:grid-cols-3 mt-5 gap-4 px-5">
            {
                instructor.map(data=> <div key={data._id}>

<div className="card w-auto glass">
  <figure><img className="h-40 w-full" src={data.image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{data.name}</h2>
    <p>{data.email}</p>
   
  </div>
</div>
                </div>)
            }
        </div>
        </div>
    );
};

export default PopulerIns;