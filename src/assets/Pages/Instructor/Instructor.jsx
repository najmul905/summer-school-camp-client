import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";

const Instructor = () => {


    const { data: users = [], } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })
    const instructor = users.filter(data => data.role == "instructor")
    return (
        <div>
            <Helmet>
                <title> SSSC-Home</title>
            </Helmet>
            <div className="text-center my-6 w-1/2 mx-auto rounded-md text-white italic bg-indigo-500 p-5">
          <h1 className="text-2xl">See.....</h1>
          <div className="w-1/2 mx-auto "><hr /></div>
          <h1 className="text-5xl font-semibold">Our Instructor</h1>
        </div>

            <div className="mx-10">

                {
                    instructor.map(data => <div key={data._id}>
                        <div className="card card-side bg-base-100  my-5">
                            <figure><img className="h-40 w-40 rounded-full p-4" src={data.image} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.name}</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Instructor;