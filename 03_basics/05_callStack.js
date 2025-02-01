function first(){
    console.log('I am first');
}

function second(){
    console.log('I am second');
}

first();
second();
console.log('End of the code');

// | second()       |  (Pushed)2nd
// | first()        |  (Pushed)1st
// | Global context |
// ------------------
// ✅ first() → ✅ second() → ✅ "End of the code"