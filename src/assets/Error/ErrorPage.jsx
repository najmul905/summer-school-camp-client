import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center h-full w-full p-64 items-center justify-center">
           <h1 className="text-red-700 text-9xl font-bold">404</h1>
           <p className="text-green-500 text-2xl font-bold ">That is a wrong path....</p>
           <div>
            <h1 className="font-bold text-slate-600">Back to Home</h1><Link to='/'><button className="bg-red-700 text-white p-3 rounded-md ">Home</button></Link>
           </div>
        </div>
    );
};

export default ErrorPage;