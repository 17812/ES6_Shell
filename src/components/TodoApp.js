import React from 'react'

import TodoForm from './TodoForm'
import WhatShouldIDo from './WhatShouldIDo'
import TodosComp from './TodosComp'
import RemoveAll from './RemoveAll'
import Header from './Header'
import FeelingLuckyModal from './feelingLucky-modal'
import {Jumbotron, Container, Button, Row, Col, Modal,l, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
// import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.scss'

export default class ToDoApp extends React.Component {

    state = {
        todos: [],
        modal : false
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

    // componentWillUnmount(){
    //     // console.log('componetWillUnMount')
    // }

    toggle=()=>{
        this.setState({
          modal: !this.state.modal
        });
      }

    feelingLucky =()=> {

        const luckyNumber = Math.floor(Math.random() * this.state.todos.length);
        const selectedTodo = this.state.todos[luckyNumber];

        console.log('selectedTodo', selectedTodo);
        console.log('selectedOption before', this.state.selectedOption);

        this.setState(()=>{ ( {selectedOption : 'tolga'})      
            
        }
    );

        console.log('selectedOption after', this.state.selectedOption);


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
                {/* <Header title={title} subtitle={subtitle}/> */}
                     <Header />
                     <WhatShouldIDo feelingLucky={this.toggle} todoCount={!this.state.todos.length > 0} />
                    {this.state.todos.length===0 &&<p>Please add todo to get started!</p>}
                    <RemoveAll handleRemoveAll={this.handleRemoveAll} />
                    <TodosComp todos={this.state.todos} handleRemoveSingle={this.handleRemoveSingle}/>
                    <TodoForm handleNewTodo={this.handleNewTodo} />
                    <FeelingLuckyModal modal={this.state.modal} toggle={this.toggle} />

            </Container>
        )
    }
}

ToDoApp.defaultProps = {
    todos: ['todo one', 'todo two', 'todo three']
}