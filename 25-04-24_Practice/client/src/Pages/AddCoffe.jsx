const AddCoffe = () => {

    const handleAdd=(e)=>
    {
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const price=form.price.value;
        const quantity=form.quantity.value;
        const newCoffee={
            name,
            price,
            quantity
        }
        fetch('http://localhost:3000/coffees',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

    }
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <form className="flex flex-col justify-center items-center gap-3" onSubmit={handleAdd}>
                <input className="p-2" placeholder="name" type="text" name="name" required />
                <input className="p-2" placeholder="price" type="text" name="price" required />
                <input className="p-2" placeholder="quantity" type="text" name="quantity" required />
                <input type="submit" value="ADD" className="btn btn-success btn-outline " />
            </form>
        </div>
    );
};

export default AddCoffe;