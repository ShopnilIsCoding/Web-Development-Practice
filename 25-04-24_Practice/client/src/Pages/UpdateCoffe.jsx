import { Link, useLoaderData } from "react-router-dom";


const UpdateCoffe = () => {
    const handleUpdate=(e)=>
    {
        e.preventDefault();
        fetch(`http://localhost:3000/coffees/${coffee._id}`,
    {
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:e.target.name.value,
            price:e.target.price.value,
            quantity:e.target.quantity.value,
        })
    })
    }
    const coffee=useLoaderData()
    return (
        <div className="w-screen h-screen flex items-center gap-10 justify-center">
            <Link to={'/'} className="btn">Home</Link>
            <form className="flex flex-col justify-center items-center gap-3" onSubmit={handleUpdate}>
                <input className="p-2" placeholder="name" type="text" name="name" defaultValue={coffee.name} required />
                <input className="p-2" placeholder="price" type="text" name="price" defaultValue={coffee.price} required />
                <input className="p-2" placeholder="quantity" type="text" name="quantity" defaultValue={coffee.quantity} required />
                <input type="submit" value="Update" className="btn btn-success btn-outline " />
            </form>
        </div>
    );
};

export default UpdateCoffe;