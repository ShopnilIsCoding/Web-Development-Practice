const SingleCoffee = ({ coffee }) => {
  return (
    <div className="bg-gray-600 text-white p-4 rounded-xl flex justify-between items-center">
      <div className="flex flex-col justify-between h-full px-6">
        <h1 className="text-3xl font-serif font-bold"> {coffee.name}</h1>
        <p className="text-xl font-semibold">Price :{coffee.price}</p>
        <p className="text-xl font-semibold">Quantity :{coffee.quantity}</p>
      </div>
      <div className="flex flex-col gap-2 justify-between h-full">
        <button className="btn btn-circle btn-success btn-outline font-bold">View</button>
        <button className="btn btn-circle btn-info btn-outline font-bold">Edit</button>
        <button className="btn btn-circle btn-error btn-outline text-xl font-bold">X</button>
      </div>
    </div>
  );
};

export default SingleCoffee;
