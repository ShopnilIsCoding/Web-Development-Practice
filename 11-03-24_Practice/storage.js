const handleclick=()=>
{
    const productfield=document.getElementById('i1');
    const quantityfield=document.getElementById('i2');
    const name=productfield.value;
    const quantity=quantityfield.value;
    productfield.value='';
    quantityfield.value='';
    // console.log(name,quantity);
    show(name,quantity);
    saveToStorage(name,quantity);
}
const show=(name,quantity)=>
{
    const ul=document.getElementById('container');
    const li=document.createElement('li');
    li.innerHTML=`${name} : ${quantity}`;
    ul.appendChild(li);
}

const getCart=()=>
{
    let cart={};
    const storageCart=localStorage.getItem('cart');
    if(storageCart)
    {
        cart=JSON.parse(storageCart);
    }
    return cart;
}

const saveToStorage=(name,quantity)=>
{
    const cart=getCart();
    cart[name]=quantity;
    const cartSting=JSON.stringify(cart);
    localStorage.setItem('cart',cartSting);
}
const displayInitial=()=>
{
    const savedCart=getCart();
    console.log(savedCart);
    for(items in savedCart)
    {
        show(items,savedCart[items])
        console.log(items);
        console.log(savedCart[items]);
    }
}
displayInitial();