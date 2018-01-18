import React from 'react'
import ReactDOM from 'react-dom'


const person = {
    name : 'Tolga',

    getName()  {
        return this.name
    }



}

// const getName = person.getName(); 

// const getName = person.getName.bind(); // error obj is not defined.
// const getName = person.getName.bind(this); 
const getName = person.getName.bind({name : 'Andrew'});

console.log(getName);


// console.log(person.getName())
 
