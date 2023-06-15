import { Link } from "react-router-dom";
import usePopularclsdata from "../../../../../Hooks/UsePopularClsData/usePopularclsdata";

const Populercls = () => {
   const [popularCls]=usePopularclsdata()
   console.log(popularCls)

//    const {id,name,image,description}=popularCls
    
    return (
       <div>
          <div className="text-center w-1/2 mx-auto rounded-md text-white italic bg-indigo-500 p-5">
          <h1 className="text-2xl">See.....</h1>
          <div className="w-1/2 mx-auto "><hr /></div>
          <h1 className="text-5xl font-semibold">Our Popular Class</h1>
        </div>
       
         <div className="grid grid-cols-3 gap-4 my-10 px-5 ">
           {
popularCls.map(data=><div key={data._id}>

<div className="card w-auto bg-base-100 ">
  <figure><img src={data.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {data.class_name}
    </h2>
    <p>{data.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
    <div>
      <Link to="/classDetails " className="bg-cyan-600 py-2 px-1 rounded"><button>Show Details</button></Link>
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