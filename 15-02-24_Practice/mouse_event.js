const ball = document.getElementById('ball');
const container=document.body;
let initialleft,initialtop;

container.addEventListener('mousemove',function(e){

    // if(!initialleft && !initialtop)
    // {
    //     initialleft=e.clientX
    //     initialtop=e.clientY
    // }
    

const left = e.clientX;
const top = e.clientY;


const offset = -10; 
const ballWidth = ball.offsetWidth; //that returns the width of an element
const ballHeight = ball.offsetHeight;
const adjustedLeft = left - ballWidth / 2 - offset;
const adjustedTop = top - ballHeight / 2 - offset;

ball.style.transform = `translate(${adjustedLeft}px, ${adjustedTop}px)`;

    
    
})