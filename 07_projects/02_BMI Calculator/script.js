const form= document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const height= parseFloat(document.querySelector('#height').value)
    const weight= parseFloat(document.querySelector('#weight').value)
    const results= document.querySelector('.results')
    
    if(height ==='' || height<0 || isNaN(height)){
        results.innerHTML= `Please give a valid height ${height}`
    }
    else if(weight ==='' || weight<0 || isNaN(weight)){
        results.innerHTML= `Please give a valid weight ${weight}`
    }
    else{
        results.innerHTML= `The BMI is: ${(weight/((height/100)**2)).toFixed(2)}`
    }
    
})