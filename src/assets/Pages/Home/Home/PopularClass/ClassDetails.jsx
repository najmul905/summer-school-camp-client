import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const ClassDetails = () => {
    const {id}=useParams()
    console.log(id)

    const { data: cart = [], } = useQuery(['cart'], async () => {
        const res = await fetch('http://localhost:5000/class')
        return res.json()
      })

      const data=cart.find(item=>item._id==id)
      console.log(data)
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl my-10">
  <figure><img src={data.image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Class Name: {data.className}</h2>
    <h2 className="card-title">Instructor Name: {data.instructorName}</h2>
    <h2 className="card-title">Instructor Email: {data.email}</h2>
    <h2 className="card-title">Class Price: {data.price}</h2>
    <div className="badge badge-secondary"> Discount {data.discount}%</div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ClassDetails;