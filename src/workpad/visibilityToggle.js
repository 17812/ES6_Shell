import React from 'react'
import ReactDOM from 'react-dom'

let showDetails = false;

const toggleDetails = ()=>{
    if(showDetails){
        showDetails = false;
    }else{
        showDetails =true;
    }

    render();
}






const render = ()=>{

    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetails}>{showDetails?'Hide Details' : 'Show Details'}</button>
            <div>
               {showDetails && <p>Hello I am here...</p>}
            </div>
        </div>
    )
    
    ReactDOM.render(
        template,
            document.getElementById('appRoot')
    )

}

render();