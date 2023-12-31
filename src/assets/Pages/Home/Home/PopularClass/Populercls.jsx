import { useQuery } from "react-query";
import { Link } from "react-router-dom";
// import usePopularclsdata from "../../../../../Hooks/UsePopularClsData/usePopularclsdata";

const Populercls = () => {
  //  const [popularCls]=usePopularclsdata()
  //  console.log(popularCls)

  const { data: cart = [], } = useQuery(['cart'], async () => {
    const res = await fetch('https://school-summer-sport-camp-server.vercel.app/class')
    return res.json()
  })

  const popularCls = cart.filter(item => item.status == "confirm")


  //    const {id,name,image,description}=popularCls

  return (
    <div>
      <div className="text-center w-1/2 mx-auto rounded-md text-white italic bg-indigo-500 p-5">
        <h1 className="md:text-2xl text-1xl ">See.....</h1>
        <div className="w-1/2 mx-auto "><hr /></div>
        <h1 className="lg:text-5xl md:text-3xl font-semibold">Our Popular Class</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto text-center mt-4">
        {
          popularCls.map(data => <div key={data._id}>

            <div className="card card-compact md:h-96 h-72  bg-base-100 shadow-xl ">
              <figure><img className="md:h-[40vh] md:w-[40vw] h-full w-full" src={data.image} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  {data.className}
                </h2>
                <h1>{data.instructorName}</h1>

                <div className="card-actions justify-end">
                  <div className="badge badge-outline bg-orange-500 text-white">Price: {data.price}Taka</div>
                  <div className="badge badge-outline bg-orange-700 text-white">Available seats: {data.seats}</div>
                </div>
                <div>
                  <Link to={`/classDetails/${data._id}`}  className="bg-cyan-600 py-2 px-1 rounded"><button >Show Details</button></Link>
                </div>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default Populercls;