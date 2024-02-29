// task-1
function telljoke()
{
    console.log('joking');   
}

const jokeinterval=setInterval(telljoke,2000);
      
setTimeout(()=>
{
    clearInterval(jokeinterval);
},10000
)

// task-2

const fetching=async()=>
{
    const url='https://v2.jokeapi.dev/joke/Programming?type=single'
    try
    {
    const res=await fetch(url);
    const data= await res.json();
    console.log("data fetched");
    }
    catch(err)
    {
        console.log("error",err);
    }
}
fetching();