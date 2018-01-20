import React from 'react'

import TodoForm from './TodoForm'
import WhatShouldIDo from './WhatShouldIDo'
import TodosComp from './TodosComp'
import RemoveAll from './RemoveAll'
import Header from './Header'

export default class ToDoApp extends React.Component {

 state = {
        todos: props.todos
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         todos: props.todos
    //     }

    //     this.feelingLucky = this.feelingLucky.bind(this)
    //     this.handleRemoveAll = this.handleRemoveAll.bind(this)
    //     this.handleNewTodo = this.handleNewTodo.bind(this)
    //     this.handleRemoveSingle=this.handleRemoveSingle.bind(this)

    // }

    componentDidMount(){

            try{
                const json = localStorage.getItem('todos');
                const todos = JSON.parse(json)
                if(todos){
                this.setState(()=>({todos}))
                }
            }    
             catch(e){
                //Do nothing at this point
                
            }
        }

    componentDidUpdate (prevState, prevProps){
       if(prevState.todos.length !== this.state.todos.length){
           console.log('length of the arrray changed.');
       }
       const json = JSON.stringify(this.state.todos);
       localStorage.setItem('todos', json);
    }

    componentWillUnmount(){
        console.log('componetWillUnMount')
    }

    feelingLucky() {

        const luckyNumber = Math.floor(Math.random() * this.state.todos.length);
        alert(this.state.todos[luckyNumber])

    }

    handleRemoveAll() { this.setState(() => ({ todos : [] })) }

    handleRemoveSingle(todoRemove){

        this.setState((prevState)=>{
            return {
            todos : prevState.todos.filter((todo)=> todoRemove !== todo)
            }
        })

        // console.log('todo', todoRemove)

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
        console.log(testtting)
        return (
            <div>
                {/* <Header title={title} subtitle={subtitle}/> */}
                <Header />
                <WhatShouldIDo feelingLucky={this.feelingLucky} todoCount={!this.state.todos.length > 0} />
                {this.state.todos.length===0 &&<p>Please add todo to get started!</p>}
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