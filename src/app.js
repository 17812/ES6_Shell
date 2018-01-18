import React from 'react'
import ReactDOM from 'react-dom'

class ToDoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: props.todos
        }

        this.feelingLucky = this.feelingLucky.bind(this)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handleNewTodo = this.handleNewTodo.bind(this)
        this.handleRemoveSingle=this.handleRemoveSingle.bind(this)

    }

    feelingLucky() {

        const luckyNumber = Math.floor(Math.random() * this.state.todos.length);
        alert(this.state.todos[luckyNumber])

    }

    handleRemoveAll() { this.setState(() => ({ todos : [] })) }

    handleRemoveSingle(todoRemove){

        this.setState((prevState)=>{
            todos : prevState.todos.filter((todo)=> todoRemove !== todo)
        })

    }

    handleNewTodo(newTodo) {

        if (!newTodo) {
            return 'Enter a valid value to add item'
        } else if (this.state.todos.indexOf(newTodo) >= 1) {
            return 'Same todo already exists'
        } else {
            this.setState((prevState) => {
                return {
                    todos: prevState.todos.concat([newTodo])
                }
            })
        }
    }




    render() {
        return (
            <div>
                {/* <Header title={title} subtitle={subtitle}/> */}
                <Header />
                <WhatShouldIDo feelingLucky={this.feelingLucky} todoCount={!this.state.todos.length > 0} />
                <RemoveAll handleRemoveAll={this.handleRemoveAll} />
                <TodosComp todos={this.state.todos} handleRemoveSingle={this.handleRemoveSingle}/>
                <TodoForm handleNewTodo={this.handleNewTodo} />
            </div>
        )
    }
}

ToDoApp.defaultProps = {
    todos: ['todo one', 'todo two', 'todo three']
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h6>{props.subtitle}</h6>
        </div>
    )
}

Header.defaultProps = {
    title: 'Todo Tracking Application',
    subtitle: 'Put your life in the hands of a computer'
}

const RemoveAll = (props) => {
    return (
        <div>
            <p>
                <button onClick={props.handleRemoveAll}>RemoveAll</button>
            </p>
        </div>
    )
}


const TodosComp = (props) => {

    return props.todos.map((todo) => <Todo handleRemoveSingle={props.handleRemoveSingle} key={todo} todoText={todo} />)

}

const Todo = (props) => {
    return (
        <div>
            {props.todoText}
            <button onClick={(e)=>{props.handleRemoveSingle(props.todoText)}}>Remove</button>
        </div>
    )
}

const WhatShouldIDo = (props) => {
    return (
        <div>
            <button disabled={props.todoCount} onClick={props.feelingLucky}>feeling lucky</button>
        </div>
    )
}

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleNewTodoInput = this.handleNewTodoInput.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleNewTodoInput(e) {

        e.preventDefault();

        // const newTodo='newToDo';

        const newTodo = e.target.elements.newTodoInput.value
        const error = this.props.handleNewTodo(newTodo);


        this.setState(() => ( { error }))

        e.target.elements.newTodoInput.value = ''





    }

    render() {
        return (
            <form onSubmit={this.handleNewTodoInput}>
                {this.state.error && <p>{this.state.error}</p>}
                <input type='text' name='newTodoInput' />
                <button>Add new Todo</button>
            </form>
        )
    }
}







ReactDOM.render(<ToDoApp todos={['one', 'two', 'three']} />, document.getElementById('appRoot'))