// const json='{"abcd" : "1" }'
// const js=JSON.parse(json);
// console.log(js);
const url='https://jsonplaceholder.typicode.com/users';
function LoadData()
{
    
    fetch(url)
    .then(r=>r.json())
    .then(data=>consoledata(data))
    
}

//method-2
const LoadData2=async()=>{
    const res= await fetch(url);
    const data=await res.json();
    consoledata(data);
}


function consoledata(data)
{
    const ul=document.getElementById('ul');
    for (const user of data) {
        const li=document.createElement('li');
        li.innerText=user.email;
        ul.appendChild(li);
    }
   
}