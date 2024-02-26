//scoped functions

function stopwatch()
{
    let counter=0;
    return function()
    {
        counter++
        return counter;
    }
}
stopwatch();
console.log(stopwatch());
console.log(stopwatch());
const watch=stopwatch();
watch();
watch();
console.log(watch())
console.log(watch())


function greeting(handler,name)
{
    handler(name);
}
function handler(name)
{
    console.log('good',name)
}

greeting(handler,'abc')