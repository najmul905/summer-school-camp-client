import { Link } from "react-router-dom";
import usePopularclsdata from "../../../../../Hooks/UsePopularClsData/usePopularclsdata";

const Populercls = () => {
   const [popularCls]=usePopularclsdata()
   console.log(popularCls)

//    const {id,name,image,description}=popularCls
    
    return (
       <div>
        <h1>This is Popular class section</h1>
         <div className="grid grid-cols-3 max-auto">
           {
popularCls.map(data=><div key={data._id}>

<div className="card w-96 bg-base-100 shadow-xl">
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