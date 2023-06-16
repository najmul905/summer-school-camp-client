import { useQuery } from "react-query";
import { Link } from "react-router-dom";


const Discount = () => {
    const { data:dis = [], } = useQuery(['dis'], async () => {
        const res = await fetch('http://localhost:5000/class')
        return res.json()
      })
      const classData=dis.filter(item=>item.status=="confirm")
console.log(dis)
    return (
        <div>
             <div className="text-center w-1/2 mx-auto rounded-md my-10 text-white italic bg-indigo-500 p-5">
          <h1 className="text-2xl">See.....</h1>
          <div className="w-1/2 mx-auto "><hr /></div>
          <h1 className="text-5xl font-semibold">Our Discount</h1>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-10">
{
    classData.map((item)=> <div key={item._id}>
{
    item?.discount &&<div className="card w-auto bg-base-100 shadow-xl">
    <figure><img className="h-50 w-full" src={item.image} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">
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