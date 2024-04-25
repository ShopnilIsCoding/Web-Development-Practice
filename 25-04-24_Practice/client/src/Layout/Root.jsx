import { Link, useLoaderData } from "react-router-dom";
import SingleCoffee from "../components/SingleCoffee";

const Root = () => {
    const data=useLoaderData()
    return (
        <div className="w-screen h-screen space-y-8 flex flex-col items-center justify-center">
           <h1 className="text-5xl"> Hi Everyone!!</h1>
            <Link to={'/add-coffee'}><button className="btn text-3xl btn-outline btn-warning">ADD COFFEE</button></Link>
            <div className="grid grid-cols-3 gap-4">
                {data.map(coffee=><SingleCoffee key={coffee._id} coffee={coffee}></SingleCoffee>)}
            </div>
        </div>
    );
};

export default Root;