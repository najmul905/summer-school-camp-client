import usePopularclsdata from "../../../../../Hooks/UsePopularClsData/usePopularclsdata";

const Populercls = () => {
   const [popularCls]=usePopularclsdata()
   console.log(popularCls)

//    const {id,name,image,description}=popularCls
    
    return (
        <div className="grid grid-cols-3 max-auto">
           {
popularCls.map(data=><div key={data.id}>

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
  </div>
</div>
</div>)
           }
        </div>
    );
};

export default Populercls;