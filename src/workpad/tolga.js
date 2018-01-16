import React from 'react'
import ReactDOM from 'react-dom'


class Main extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            todos : ['One', 'Two', 'Three']
        }
        this.handleRemoveAll=this.handleRemoveAll.bind(this);
    }

handleRemoveAll (){
    this.setState(()=>{
        return{
            todos : []
        }
    }
    )
}

    


render(){

    const title='ToDo Manager'
    const subtitle='Let the Machine make the decisions for you.'

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

        <button >RemoveAll</button>
        {props.todos.map((todo)=>{
            return <p key={todo} todotext={todo}>{todo}</p>
        })}

        </div>



    )
}












ReactDOM.render(<Main />, document.getElementById('appRoot'))