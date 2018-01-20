import React from 'react'

import TodoForm from './TodoForm'
import WhatShouldIDo from './WhatShouldIDo'
import TodosComp from './TodosComp'
import RemoveAll from './RemoveAll'
import Header from './Header'
import {Jumbotron, Container, Button, Row, Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ToDoApp extends React.Component {

    state = {
        todos: []
    }

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

    feelingLucky =()=> {

        const luckyNumber = Math.floor(Math.random() * this.state.todos.length);
        alert(this.state.todos[luckyNumber])

    }

    handleRemoveAll=()=> { this.setState(() => ({ todos : [] })) }

    handleRemoveSingle=(todoRemove)=>{

        this.setState((prevState)=>{
            return {
            todos : prevState.todos.filter((todo)=> todoRemove !== todo)
            }
        })

        // console.log('todo', todoRemove)

    }

    handleNewTodo=(newTodo) => {

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
            <Container className="text-center">
                      <Jumbotron>
                            <h1 className="display-3">Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr className="my-2" />
                            <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                            <p className="lead">
                            <Button color="primary">Learn More</Button>
                            </p>
                        </Jumbotron>
                {/* <Header title={title} subtitle={subtitle}/> */}
                     <Header />
                     <WhatShouldIDo feelingLucky={this.feelingLucky} todoCount={!this.state.todos.length > 0} />
                    {this.state.todos.length===0 &&<p>Please add todo to get started!</p>}
                    <RemoveAll handleRemoveAll={this.handleRemoveAll} />
                    <TodosComp todos={this.state.todos} handleRemoveSingle={this.handleRemoveSingle}/>
                    <TodoForm handleNewTodo={this.handleNewTodo} />
            </Container>
        )
    }
}

ToDoApp.defaultProps = {
    todos: ['todo one', 'todo two', 'todo three']
}