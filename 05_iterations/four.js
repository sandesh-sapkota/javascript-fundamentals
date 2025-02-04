// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: 'ruby',
//     swift: 'swift by apple'
// };

// for (const key in myObject) {
//     console.log(`${key}: ${myObject[key]}`);
    
// }


// Map, a built-in JavaScript object that stores key-value pairs where the keys can be any data type (not just strings like in regular objects). 

// Creating an empty Map.

// const countries= new Map();


// Adding Key-Value Pairs Using set().

const countries= new Map();
countries.set('IN','India');
countries.set('Nep','Nepal');
countries.set('Fr','France');

for(const[key,value] of countries){
    console.log(`${key} -> ${value}`);
    
}

console.log(countries.get('Nep'));

console.log(countries.has('Fr'));

console.log(countries.delete('IN'));

console.log(countries.has('IN'));

console.log(countries.size);


// Methods:
// .set(key, value) → Add data.

// .get(key) → Retrieve data.

// .has(key) → Check if a key exists.

// .delete(key) → Remove a key.

// .size → Get the number of key-value pairs.

// .clear() → Remove all pairs.


