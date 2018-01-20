import React from 'react'
import Todo from './Todo'



const TodosComp = (props) => {

    return props.todos.map((todo) => <Todo handleRemoveSingle={props.handleRemoveSingle} key={todo} todoText={todo} />)

}

export default TodosComp