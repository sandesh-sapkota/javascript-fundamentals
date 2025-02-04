//****Chaining in array methods */

// const myNumbers= [1,2,3,4,5,6,7,8,9,10];

// const newNums= myNumbers
//               .map((num)=> num*10)
//               .map((num)=>num+1)
//               .filter((num)=>num>=40);

//               console.log(newNums);

const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 30, active: false },
  { name: "Charlie", age: 22, active: true },
];

const activeUserNames = users
  .filter((user) => user.active === true)
  .map((user) => user.name);

console.log(activeUserNames);
