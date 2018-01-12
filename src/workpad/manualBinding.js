import './utils'

import React from 'react'
import ReactDOM from 'react-dom'






const user = {
    name : 'John Rambo',
    age : 17,
    location : 'Hollywood'
    
}

const app = {
    title : 'Indecision app',
    subtitle : 'put you life in the hands of the computer',
    options : ['one', 'two']
}

const getLocation = function(location){
    if(location){
        return <p> user location : {location}</p>
    }
    //implicit undefined handled by React
}

const getOptions = function(options){
    if(options.length>0){
       return <p>Here are your opitons:
                    <ol>
                    <li>{options[0]}</li>
                    <li>{options[1]}</li>
                    </ol>
                </p>;
    }
}

const template2 = (
    <div>
    <p>{(app.subtitle) && app.subtitle}</p>
    <p>{getOptions(app.options)}</p>
    </div>
)

let count=0;

const plusOne = () =>{
    count++;
    renderCounterapp();
}

const minusOne = () =>{
    count--;
    renderCounterapp();
}

const reset = () =>{
    count=0;
    renderCounterapp();
}

/*jsx does not have built-in data binding*/
 



const template = (
    <div>
        //Ternary operator
        <h1>{(user.name) ? user.name : 'user name is undefined'}</h1>
        // Logical AND
        <p>{(user.age && user.age>18) && 'Age : '+user.age}</p>
        <p>{getLocation(user.location)}</p>
    </div>
);







const renderCounterapp = ()=>{

    const template3 = (
        <div>
            <h1>Count: {count}</h1>
             <button onClick={plusOne} className="button">+1</button>
             <button onClick={minusOne} className="button">-1</button>
             <button onClick={reset} className="button">reset</button>
    
    
        </div>
    )  

    ReactDOM.render(template3,
        document.getElementById('root'));

}

renderCounterapp();