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
            <Todos todos={this.state.options}/>
        </div>
    )
}

}



class Todos extends React.Component {

    render(){
        return (
            <div>
            <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
            {this.props.todos.map((todos)=> <Todo key={todos} todoText={todos} />)}
            <Todo />
            </div>
        )
    }
}

const Todo = (props)=>{
    return (
        <div>
            <p>props.todoText</p>
        </div>
    )
}







































ReactDOM.render(<Main />, document.getElementById('appRoot'))