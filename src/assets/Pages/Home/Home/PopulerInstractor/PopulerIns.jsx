import usePopularins from "../../../../../Hooks/UsePopularIns/usePopularins";

const PopulerIns = () => {
const [popuarIns]=usePopularins()
console.log(popuarIns)

    return (
        <div>
            <h1>This is Popular instraction section</h1>
            <div className="grid grid-cols-3 gap-4">
            {
                popuarIns.map(data=> <div key={data.id}>

<div className="card w-96 glass">
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