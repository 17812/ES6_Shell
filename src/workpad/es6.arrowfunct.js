// const square = function (x) {
//     return x*x;
// }

// console.log('square', square(5));


// const squareArrow = (x) => {
//     return x*x
// }

// const square = (x) => x*x ; //another way to write a basic function

/* ES6 functions are anonymous 
ES5 you can giver it a name function < of the function>
*/


// console.log('squareArrow', squareArrow(5));



// const getFirstName = (name) => {
//     const firstName = name.split(' ')[0];
//     return firstName;
// }

const getFirstName = (name) => name.split(' ')[0];

console.log('first name', getFirstName('Tolga Dane'));