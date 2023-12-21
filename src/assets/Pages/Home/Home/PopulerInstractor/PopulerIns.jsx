

import { useQuery } from "react-query";

const PopulerIns = () => {


const { data: users = [], } = useQuery(['users'], async () => {
  const res = await fetch('https://school-summer-sport-camp-server.vercel.app/users')
  return res.json()
})
const instructor = users.filter(data => data.role == "instructor")

    return (
        <div className="">
          <div className="my-5 text-center w-1/2 mx-auto rounded-md text-white italic bg-indigo-500 p-5">
          <h1 className="md:text-2xl text-1xl">See.....</h1>
          <div className="w-1/2 mx-auto "><hr /></div>
          <h1 className="lg:text-5xl md:text-3xl font-semibold">Our Popular Instructor</h1>
        </div>
            <div className="md:grid md:md:grid-cols-2 md:gap-12 ">
            {
                instructor.map(data=> <div key={data._id}>



<div className="md:flex bg-white shadow-2xl p-4  my-2 rounded-md items-center md:justify-between">
  <div>
    <img className=" h-24 w-20 rounded-t-box rounded-b-box"  src={data.image} alt="" />
  </div>
  <div className="">
    <h1 className="text-1xl font-bold"><span className="font-bold">Name:</span> <span className="font-semibold">{data.name}</span></h1>
    <h3 ><span className="Font-semibold">Email:</span> <span className="font-thin">{data.email}</span></h3>
  </div>
</div>


                </div>)
            }
        </div>
        </div>
    );
};

export default PopulerIns;