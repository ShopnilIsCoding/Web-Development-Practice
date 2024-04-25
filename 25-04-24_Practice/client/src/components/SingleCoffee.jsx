import { Link } from "react-router-dom";

const SingleCoffee = ({ coffee,setCoffeeData,coffeeData }) => {
    const handleDelete=()=>
    {
        fetch(`http://localhost:3000/coffees/${coffee._id}`,
    {
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        const remainingCoffees = coffeeData.filter(cof=>cof._id!==coffee._id);
        setCoffeeData(remainingCoffees)
    })
    }
  return (
    <div className="bg-gray-600 text-white p-4 rounded-xl flex justify-between items-center">
      <div className="flex flex-col justify-between h-full px-6">
        <h1 className="text-3xl font-serif font-bold"> {coffee.name}</h1>
        <p className="text-xl font-semibold">Price :{coffee.price}</p>
        <p className="text-xl font-semibold">Quantity :{coffee.quantity}</p>
      </div>
      <div className="flex flex-col gap-2 justify-between h-full">
        <Link to={`/${coffee._id}`}><button className="btn btn-circle btn-success btn-outline font-bold">View</button></Link>
        <Link to={`/update-coffee/${coffee._id}`}><button className="btn btn-circle btn-info btn-outline font-bold">Edit</button></Link>
        <button onClick={handleDelete} className="btn btn-circle btn-error btn-outline text-xl font-bold">X</button>
      </div>
    </div>
  );
};

export default SingleCoffee;
