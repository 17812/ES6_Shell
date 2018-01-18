import React from 'react'
import ReactDOM from 'react-dom'

class VisibilityApp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isVisible : false
        }

        this.changeVisibility=this.changeVisibility.bind(this);
    }

    changeVisibility(){
        this.setState((prevState)=>{
            return{
                isVisible : !prevState.isVisible
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Visiblity Toggle</h1>
                <ControlButton isVisible={this.state.isVisible} changeVisibility={this.changeVisibility}/>
            </div>
        )
    }

}

const ControlButton=(props)=>{
    return(
        <div>
            <button onClick={props.changeVisibility}>{props.isVisible?'Show Details':'Hide Details'}</button>
            {props.isVisible&&<p>Here I am </p>}
            </div>
    )
}


ReactDOM.render(<VisibilityApp />, document.getElementById('appRoot'))