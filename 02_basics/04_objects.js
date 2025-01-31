// const tinderUser = new Object()

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userFullname: {
      firstname: "sandesh",
      lastname: "sapkota",
    },
  },
};

// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};
// console.log(obj3);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));

//****Object de-structure */

const course ={
  coursename: "js in nepali",
  price: "990",
  courseInstructor: "sandy"
}

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);


