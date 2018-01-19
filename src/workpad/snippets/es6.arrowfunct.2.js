/**************
arguments object is no longer bound with arrow functions


const test = function(a,b){
    console.log(arguments);
    return a+b;
}

test(1,2);

 ***************/








/**************
arrow functions can access THIS variable of the object. e.g

arrow functions use parent's scope therefore when used on object property it uses its parent where this for the object does not exist.


const user = {
    name : 'Andrew',
    cities : ['New York', 'Philadelphia', 'Dublin'],
    printPlacesLived :  ()=> {
        this.cities.forEach((city)=>{
            console.log(this.name+' lived in '+city)
        })
    }

}

const user = {
    name : 'Andrew',
    cities : ['New York', 'Philadelphia', 'Dublin'],
    printPlacesLived : function () {
        this.cities.forEach((city)=>{
            console.log(this.name+' lived in '+city)
        })
    }
}

user.printPlacesLived();

 ***************/



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



// console.log('squareArrow', squareArrow(5));



// const getFirstName = (name) => {
//     const firstName = name.split(' ')[0];
//     return firstName;
// }

// const getFirstName = (name) => name.split(' ')[0];

// console.log('first name', getFirstName('Tolga Dane'));

**/



/****
 *  ES6 FUNCTION SCOPE

const multiplier = {
    numberArray : [1,2,3],
    multiplyBy : 2,
    multiply(){
        return this.numberArray.map((num)=> this.multiplyBy*num)
    }
}

console.log(multiplier.multiply());

**/