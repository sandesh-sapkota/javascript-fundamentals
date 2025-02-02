//****Basic syntax for Switch statement in js */

// switch (expression) {
//   case value1:
    // Code to execute if expression === value1
    // break;
//   case value2:
    // Code to execute if expression === value2
    // break;
//   default:
  // Code to execute if no case matches
// }

let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  case "Sunday":
    console.log("It's a holiday!");
    break;
  default:
    console.log("It's a regular day.");
}

