function add(num1,num2)
{
    console.log(arguments);//only work in functions
}

add(1,5,8,98,43)
//same output
const products=
{
    '0':1,
    '1':5,
    '2':8,
    '3':98,
    '4':43
}
console.log(products);

const arrays =[
    {id:1,name:'shopnil',address:'jhenidah'},
    {id:2,name:'Rahim',address:'dhaka'},
    {id:3,name:'kariM',address:'khulna'}
]
for (const obj of arrays) {
    //obj.name=obj.name.toLowerCase();
    if(obj.name.toLowerCase().includes('m'))
    {
        console.log("found");
    }
    else
    console.log("not found")
}