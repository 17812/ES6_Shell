import React from 'react'
import ReactDOM from 'react-dom'


//with react components you have to implement render method. that is not the case with stateless functional components where you just return jsx.
//classes vs stateless functional components

//<Header /> uppercase letter H is how react differentiates between html element and react component.
//<Option /> is identical to <Option></Option>

class TodoApp extends React.Component{
    constructor(){
        super();
        this.whatShouldIDo=this.whatShouldIDo.bind(this)
        this.addNewTodo=this.addNewTodo.bind(this)
        this.state = {
            todoList : ['todo 1', 'todo 2', 'todo 3']
        }

    }

    whatShouldIDo() {
        alert ('clicked what should I do')
    }

    addNewTodo(newTodo) {
        this.setState((prevState)=>{

            return ({
                todoList : prevState.todoList.concat(newTodo)
            })

        })
    }
   
    
    render(){
        const title = 'Track your todos in this simple application.'
        return (
            <div>
                <h1>{title}</h1>
                <Header />
                <WhatShouldIDo whatShouldIDo={this.whatShouldIDo}/>
                <TodoList todoList={this.state.todoList}/>
                <NewTodo addNewTodo={this.addNewTodo}/>
            </div>
        )
    }
}

const TodoList =(props)=>{

   return  props.todoList.map((todo)=>{
        return <Todo key={todo} todoText={todo}/>
         

     })
}

const Todo = (props)=>{
    return (
        <div>
            {props.todoText}
        </div>
    )
}

const Header = ()=>{

    return (
        <p>Hello from header component..</p>
    )

}

const WhatShouldIDo = (props)=>{
    return (
        <div>
            <button onClick={props.whatShouldIDo}>WhatShouldIDo</button>
        </div>
    )
}

class NewTodo extends React.Component {
    constructor(){

        super();
        // this.handleNewTodo=this.handleNewTodo.bind(this)

    }

    handleNewTodo(e){

        e.preventDefault();

        const newTodo = e.target.elements.newTodoInput.value.trim()

        if(newTodo){
            alert (`new todo is ${newTodo}`)
        }

    }
    render(){

        return  (
            <div>
                <form onSubmit={this.handleNewTodo}>
                    <input type="text" name="newTodoInput"/>
                    <button>Add New Todo</button>
                </form>
            </div>
        );
    }
        
}

ReactDOM.render(<TodoApp />, document.getElementById('appRoot'))










