function randomColor(){
    let color='#'
    let letters='0123456789ABCDEF'
    for(let i=0; i<6; i++){
        color = color + letters[Math.floor(Math.random()*16)];
    }
    return color;
}



let start= document.querySelector('#start');
let stop= document.querySelector('#stop');
let changeColor;

start.addEventListener('click',()=>{
    changeColor= setInterval(()=>{
        document.body.style.backgroundColor=randomColor();
    },1000);
})

stop.addEventListener('click',()=>{
    clearInterval(changeColor);
})
