import usePopularins from "../../../../../Hooks/UsePopularIns/usePopularins";

const PopulerIns = () => {
const [popuarIns]=usePopularins()
console.log(popuarIns)

    return (
        <div>
          <div className="text-center w-1/2 mx-auto rounded-md text-white italic bg-indigo-500 p-5">
          <h1 className="text-2xl">See.....</h1>
          <div className="w-1/2 mx-auto "><hr /></div>
          <h1 className="text-5xl font-semibold">Our Popular Instructor</h1>
        </div>
            <div className="grid grid-cols-3 mt-5 gap-4 px-5">
            {
                popuarIns.map(data=> <div key={data._id}>

<div className="card w-auto glass">
  <figure><img src={data.image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{data.name}</h2>
    <p>{data.details}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
                </div>)
            }
        </div>
        </div>
    );
};

export default PopulerIns;