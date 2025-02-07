// const bird= document.querySelector('#bird')
// bird.onclick=()=>{
//     alert('This is the Blue bird')
// }

// const bird= document.querySelector('#bird')
// bird.addEventListener("click",(e)=>{
//     alert('This is the Blue Bird!')
// })

   //type, timeStamp, defaultPrevented
    // target, toElement, srcElement
    // clientX, clientY, screenX, screenY
    // altKey, ctrlKey, shiftKey, keyCode

const bird= document.querySelector('#bird')
bird.addEventListener("click",(e)=>{
    console.log(e);
    },false)

    //***Event Bubbling (top to bottom like bubbles formation ) */
    
    const parent= document.querySelector('#parent')
    const child= document.querySelector('#child')

    parent.addEventListener('click',()=>{
        console.log('Parent Clicked!');
        alert('Parent Clicked!')
    })

    child.addEventListener('click',()=>{
        console.log('Child Clicked!');
        alert('Child Clicked!')
    })

    //******Event Delegation ****/

    const list= document.querySelector('#list')
    list.addEventListener('click', (e)=>{
        console.log("Clicked on:",e.target.textContent);
        
    })

    //******e.preventDefault() */
    const link= document.querySelector('#google')
    link.addEventListener('click',(e)=>{
        e.preventDefault();
    })
