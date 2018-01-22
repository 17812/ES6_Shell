/*
global scope name decleration

*/

var nameVar = 'Joe';
var nameVar = 'Ken'; 

console.log('nameVar', nameVar);

let letVar = 'Julie';
// let letVar = 'Joe';
letVar = 'Joe' ;

console.log ('letVar', letVar);

const constVar = 'andrew';
// const constVar = 'yo';
// constVar = 'yo';

//var is function scoped. 

//let and const are block scoped.

var fullName = 'Joe Anderson'

//code block example
if (fullName){
    // var firstName = fullName.split(' ')[0];
    const firstName = fullName.split(' ')[0];
    let firstName = fullName.split(' ')[0];
}

console.log(firstName);