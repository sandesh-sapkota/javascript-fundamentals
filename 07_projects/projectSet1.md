# Projects related to DOM

## Project Link
[Click Here] (https://github.com/sandesh-sapkota/javascript-fundamentals/tree/main/06_dom)

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
