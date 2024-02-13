let iswhite=true;
const button=document.getElementsByTagName('button')[0]
button.innerText="Light Mode"
const updttxt=document.getElementById('h1');
button.onclick=switchcolor
function switchcolor()
{
    if(iswhite)
    
    {
    document.body.style.backgroundColor='black'
    button.innerText="Dark Mode"
    updttxt.style.color='white'
    
}

    else{
    document.body.style.backgroundColor='white'
    button.innerText="Light Mode"
    updttxt.style.color='black'
}
    iswhite= !iswhite;
    
}

document.getElementById('btn').addEventListener('click',function(){
    document.body.style.backgroundColor='red'
    updttxt.style.color='white'
})

document.getElementById('updt').addEventListener('click',function(){

    const inptfld= document.getElementById('inpt');
    const inpttxt=inptfld.value;
    //const updttxt=document.getElementById('h1');
    updttxt.innerText=inpttxt;
    inptfld.value ='';

})