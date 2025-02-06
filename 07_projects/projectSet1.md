# Projects related to DOM

## Project Link
[Click Here] (https://github.com/sandesh-sapkota/javascript-fundamentals/tree/main/07_projects)

## Solution code

### Project 1: Background Color Changer

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Background Color Switcher</title>
    <style>
        .button{
            display: inline-block;
            border: 2px solid black;
            width: 75px;
            height: 70px;
            border-radius: 10px;
            cursor: pointer;
        }
        #grey{
            background-color: grey;
        }
        #white{
            background-color:aliceblue;
        }
        #blue{
            background-color: blue;
        }
        #yellow{
            background-color: yellow;
        }
    </style>
    <script src="script.js" defer></script>
</head>
<body>
    <nav>
        <a href="#" aria-current="page">Home</a>
        <a href="https://www.youtube.com/@sapkotasandeshofficial" target="_blank">Youtube Channel</a>
    </nav>

    <div class="canvas">
    <h1>Color Scheme Switcher</h1>
    <span class="button" id="grey"></span>
    <span class="button" id="white"></span>
    <span class="button" id="blue"></span>
    <span class="button" id="yellow"></span>

    <h2>
        Try clicking on one of the colors above 
        <span>to change the background color of this page!</span>
    </h2>

</div>
</body>
</html>
```


```javascript
const buttons= document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = 'grey'
        }
        else if(e.target.id === 'white'){
            body.style.backgroundColor = 'aliceblue'
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue'
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow'
        }
        
    })
})

```


### Project 2: BMI Calculator

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="container">
        <h1>BMI Calculator</h1>
        <form>
            <p><label for="height">Height in CM:</label><input type="number" name="height" id="height"></p>
            <p><label for="weight">Weight in KG:</label><input type="number" name="weight" id="weight"></p>
            <button>Calculate</button>
            <div class="results"></div>
            <div class="weight-guide">
                <h3>BMI Weight Guide</h3>
                <p>Under Weight =  Less than 18.6</p>
                <p>Normal Range = 18.6 to 24.9</p>
                OverWeight = Greater than 24.9
            </div>
        </form>
    </div>

</body>
</html>
```

```CSS
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:Arial, Helvetica, sans-serif ;
}

body{
    background-color: rgb(136, 136, 136);
}

.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

h1{
    margin-top: 20px;
}

form{
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* justify-content: center; */
    align-items: center;
}

.weight-guide{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

button{
    width: 35%;
    height: 30px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
}

#height, #weight{
    height: 25px;
}

.results{
    font-weight: 600;
    color: lightgreen;
    font-size: 20px;
}
```

```Javascript
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
```

### Project 3: Digital Clock

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Clock</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="center">
        <div id="banner"><span>Your Local time:</span></div>
        <div id="clock"></div>
    </div>
</body>
</html>
```

```CSS
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: rgb(56, 53, 53);
    color: aliceblue;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;
}

#clock{
    width: 130px;
    height: 55px;
    background-color: orange;
    border-radius: 10px;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: x-large;
    font-weight: 700;
}

html,body{
    height: 100%;
}

span{
    font-size: x-large;
    

}

.center{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

```

```Javascript
const clock= document.querySelector('#clock')

// let date = new Date()
// console.log(date.toLocaleTimeString());

setInterval(()=>{
    let date = new Date()
clock.innerHTML= date.toLocaleTimeString();
},1000);


```