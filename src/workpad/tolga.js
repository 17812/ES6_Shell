import React from 'react'
import ReactDOM from 'react-dom'


class Main extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            options : ['One', 'Two', 'Three']
        }
    }

    


render(){

    return (
        <div> 
            <h1>React Todo Application</h1>
        <Options options={this.state.options}/>
        </div>
    )
}

}



const Options = (props) =>{
    return(
        // <div>props.options.map((todo)=> <Todo key={todo} todoText={todo} /> ) </div>
        <div>props.options.map((todo)=> return <p>{todo}</p> ) </div>
    )
}

const Todo = (props)=>{
    return (
        <div>
            <p>props.todoText</p>
        </div>
    )
}







































ReactDOM.render(<Main />, document.getElementById('appRoot'))