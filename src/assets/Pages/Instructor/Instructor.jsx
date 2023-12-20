import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";

const Instructor = () => {


    const { data: users = [], } = useQuery(['users'], async () => {
        const res = await fetch('https://school-summer-sport-camp-server.vercel.app/users')
        return res.json()
    })
    const instructor = users.filter(data => data.role == "instructor")
    return (
       <div className="lg:mx-24 md:mx-18 mx-10 mb-8">
         <div className="">
            <Helmet>
                <title> Study Care-Instructor</title>
            </Helmet>
            <div className="text-center my-6 w-1/2 mx-auto rounded-md text-white italic bg-indigo-500 p-5">
          <h1 className="md:text-2xl text-1xl">See.....</h1>
          <div className="w-1/2 mx-auto "><hr /></div>
          <h1 className="lg:text-5xl md:text-3xl font-semibold">Our Instructor</h1>
        </div>

            <div className=" grid md:grid-cols-2 gap-8">

                {
                    instructor.map(data => <div key={data._id}>
                       <div className="flex flex-col rounded-lg shadow-md bg-white overflow-hidden sm:rounded-xl md:rounded-2xl lg:rounded-3xl">
      <img
        src={data.image}
        
        className="w-full h-48 object-cover sm:h-64 md:h-80 lg:h-96"
      />
      <div className="p-6 sm:p-8 md:p-10 lg:p-12">
        <h3 className="text-xl font-bold mb-2 text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl">
          {data.name}
        </h3>
        <p className="text-base text-gray-700 sm:text-lg md:text-xl lg:text-2xl">
          {data.email}
        </p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center bg-gray-100 sm:px-8 md:px-16 lg:px-24">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline sm:text-base md:text-lg lg:text-xl"
        >
          Read more
        </a>
        <button
          className="inline-block px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 sm:px-6 py-3 md:px-8 py-4 lg:px-10 py-5"
        >
          Get Started
        </button>
      </div>
    </div>
                    </div>)
                }
            </div>
        </div>
       </div>
    );
};

export default Instructor;