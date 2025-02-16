const desc= Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(desc);

// console.log(Math.PI);
// Math.PI= 5cls
// console.log(Math.PI);

const tea= {
    name: 'ginger tea',
    price: 250,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(tea, 'name'));

Object.defineProperty(tea, 'name', {
    writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(tea, 'name'));

