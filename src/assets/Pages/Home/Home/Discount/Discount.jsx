import { useQuery } from "react-query";
import { Link } from "react-router-dom";


const Discount = () => {
    const { data:dis = [], } = useQuery(['dis'], async () => {
        const res = await fetch('https://school-summer-sport-camp-server.vercel.app/class')
        return res.json()
      })
      const classData=dis.filter(item=>item.status=="confirm")
console.log(dis)
    return (
        <div>
             <div className="text-center w-1/2 mx-auto rounded-md my-10 text-white italic bg-indigo-500 p-5">
          <h1 className="md:text-2xl text-1xl">See.....</h1>
          <div className="w-1/2 mx-auto "><hr /></div>
          <h1 className="lg:text-5xl md:text-3xl font-semibold">Our Discount</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto text-center mt-5">
{
    classData.map((item)=> <div key={item._id}>
{
    item?.discount &&<div className="card card-compact md:h-96 h-72  bg-base-100 shadow-xl">
    <figure><img className="md:h-[40vh] md:w-[40vw] h-full w-full" src={item.image} alt="Shoes" /></figure>
    <div className="">
      <h2 className="">
        {item.className}
        <div className="badge badge-secondary"> Discount {item.discount}%</div>
      </h2>
      <div>
          <Link to="classes"><button className="bg-green-600 text-white font-bold p-3 rounded-md">See that</button></Link>
      </div>
    </div>
  </div>
}
    </div>)
}
        </div>
            
        </div>
    );
};

export default Discount;