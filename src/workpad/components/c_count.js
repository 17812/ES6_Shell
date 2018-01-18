import React from 'react'
import ReactDOM from 'react-dom'


class VisibilityApp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count : 0
        }

        this.plusOne=this.plusOne.bind(this);
        this.minusOne=this.minusOne.bind(this);
        this.reset=this.reset.bind(this);
        
    }

    plusOne() {

        // console.log(prevState);

        this.setState((prevState)=>{
            return { 

                count : prevState.count+1
            }
        })
    }

    minusOne (){
        this.setState((prevState)=>{
            return {
                count : prevState.count-1
            }
        })
    }

    reset(){
        this.setState(()=>{
            return {
                count : 0
            }
        })
    }


    render(){


        return(
            <div>
                <p>Count : {this.state.count}</p>
                <ChangeState plusOne={this.plusOne} minusOne={this.minusOne} reset={this.reset}/>
            </div>
        )
    }
}



const ChangeState= (props)=>{
   return (
    <div>
        <button onClick={props.plusOne}>+1</button>
        <button onClick={props.minusOne}>-1</button>
        <button onClick={props.reset}>Reset</button>
    </div>  
   )  
}


ReactDOM.render(<VisibilityApp />, document.getElementById('appRoot'))