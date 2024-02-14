document.getElementById("delete").addEventListener('click',function(){
    
    const target=document.getElementById('id');
    const id = parseInt(target.value);
    const pr=document.querySelectorAll('.pr') 
    if (pr.length==0)
    {
        alert('Comment Box Empty')
        return
    }
    
    if(id>count)
    {
        alert('Your Input Id has not commented Yet')
        return
    }
    //pr[id-1].parentNode.removeChild(pr[id-1])
    let Found=true;
    for (let i = 0; i < pr.length; i++) {
        const p = pr[i];
        const ptext = p.innerText;
        
        
        if (ptext.includes(id.toString())) {
            p.parentNode.removeChild(p);
            return; 
        }
        else
        {
             Found=false;
        }
    }
    if(!Found)
    {
        alert('Id Not Matched Or Already Deleted')
    }
})




document.getElementById("myForm").addEventListener("submit", function(event) {
    
    event.preventDefault();
})