import React from 'react'
import ReactDOM from 'react-dom'


const getLocation = (location)  => {
    if(location){
        return <p> user location : {location}</p>
    }
    //implicit undefined handled by React
}


const app = {
    title : 'ToDo app',
    subtitle : 'put you life in the hands of the computer',
    options : ['one', 'two']
}

const onFormSubmit = (e)=>{
    e.preventDefault(); //to prevent full page refresh after submit

    console.log(e);
    
    //elements in the form submitted by e are listed by name
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value='';
        render();
        }
}






const getOptions = (options)=>{
    if(options.length>0){
       return <div>
              
             </div> 
                ;
    }
}

const removeAll = ()=>{
    app.options = [];
    render();
}

const onRandomPick = ()=> {
  
        const pick= Math.floor(Math.random() *app.options.length);
        console.log('pick', pick)
        console.log(app.options[pick]);
    
}




const render = ()=>{

    const template2 = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length>0? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length>0 && app.options.length}</p>
            <button disabled={app.options.length===0} onClick={onRandomPick}>Randomly pick todo</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((todos)=> <li key={todos}>{todos}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add</button>
            </form>
        </div>
    )

    ReactDOM.render(template2,
        document.getElementById('appRoot'));



}

render();