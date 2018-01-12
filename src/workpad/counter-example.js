import React from 'react'
import ReactDOM from 'react-dom'


class Counter extends React.Component{

    constructor(props){
        super(props);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handlePlusOne=this.handlePlusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);

        this.state={
            count : 0
        }
    }

    handlePlusOne() {
         this.setState((prevState)=>{
             return {
                 count : prevState.count+1
             }
         })
    }

    handleMinusOne() {
        this.setState((prevState)=>{
            return {
                count : prevState.count-1
            }
        })
    }

    handleReset(){
        this.setState((prevState)=>{
            return {
                count : 0
            }
        })
    }


    render(){

        return (

        <div>
        <h1>Count :{this.state.count}</h1>
        <button onClick={this.handlePlusOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
        </div>
        )
    }






}



ReactDOM.render(<Counter />,
    document.getElementById('appRoot'));