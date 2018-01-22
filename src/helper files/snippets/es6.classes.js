//class was a reseved word in JS before but we could not do anything about it. 
//in js you can create class names in lowercase but it is common practice to create it uppercase.
//this.name refers to the name variable of the instance of class Car
//es6 function defaults are listed in the arguments list
//es6 template strings ${x} back ticks inside curly braces, I can write any js expressions that I want
//write a person class .. name and age then method to get description of that person then create student class (specialized person) that extends this class and adds student specific features.
//when you call the super class constructor, you need to pass the variabls to super() ...list constructor variables..

// '' empty string is a false value.. type in the console.. you will get false
// if you !'' , it will yield to true.. !!undefined you get false



class Car {

    constructor(make='volvo',color='red'){
        this.make=make;
        this.color=color;
    }


    getDescription() {

        return `car model is ${this.make} and car color is ${this.color}`;

    }
}

class SUV extends Car {

    constructor(make,color,awd=true){
        super(make,color);
        this.awd=awd;
    }

    getDescription (){
        return `my suv is ${this.make}, ${this.color} color ${this.awd?',it has 4 wheel drive':',it is 2 wheel drive'}`
    }

    hasAwd (){
        return !!this.awd;
    }


}

const mySUV = new SUV('bmw', 'black');

console.log(mySUV.getDescription());
console.log('does my suv have awd '+mySUV.hasAwd())