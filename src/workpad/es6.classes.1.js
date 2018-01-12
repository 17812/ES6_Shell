import React from 'react'
import ReactDOM from 'react-dom'



class Person {
    constructor (name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }

    getGreeting(){
        return `Hi. I am ${this.name}`;
    }
}

class Student extends Person{

    constructor(name,age,major){
        super(name,age);
        this.major=major ;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription (){
        let description = super.getDescription();

        return this.hasMajor()?`${description} majors in ${this.major}`:this.description
    }

}

class Traveller extends Person {

    constructor(name,age,location){
        super(name,age);
        this.location=location
    }

    getGreeting(){
        let greeting = super.getGreeting();
        return `${greeting} I am visiting from ${this.location}`
    }
}

// const me = new Person('Tolga',26);
// const me = new Student('Tolga', 27, 'Math');

// console.log(me);
// console.log(me.getDescription());

const me = new Traveller('andrew', 27, 'Philadelphia')

console.log(me);
console.log(me.getGreeting());