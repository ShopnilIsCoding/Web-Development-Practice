import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
    const singleData=useLoaderData()
    return (
        <div className="text-7xl h-screen w-screen flex gap-10 flex-col items-center justify-center">
            <Link to={'/'} className="btn">Home</Link>
            <p>{singleData.name}</p>
            <p>{singleData.price}</p>
        </div>
    );
};

export default Details;