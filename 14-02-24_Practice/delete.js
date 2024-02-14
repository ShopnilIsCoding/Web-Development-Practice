document.getElementById('delete').addEventListener('click',function(){
    const target=document.getElementById('id');
    const id = target.value;
    const pr=document.querySelectorAll('.p') 
    if (pr.length==0)
    {
        console.log("empty")
    }
    else
    console.log(pr.length)

})