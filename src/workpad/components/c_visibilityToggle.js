import React from 'react'
import ReactDOM from 'react-dom'


class VisiblityToggle extends React.Component{

    constructor(props){
        super(props);
        this.makeItVisible=this.makeItVisible.bind(this);

        this.state={
            isVisible : false
        }
    }

    makeItVisible(){

        console.log('clicked makeItVisible')

        this.setState((prevState)=>{
            return {
                isVisible : !prevState.isVisible 
            }
        })
    }


    render(){

        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.makeItVisible}>{this.state.isVisible? 'Hide Details' : 'Show Details'} </button>
                {this.state.isVisible &&<div>
                     <p>You really want to see the details...</p>
                    </div>}
            </div>
        )
    }


}



ReactDOM.render(<VisiblityToggle />, document.getElementById('appRoot'));