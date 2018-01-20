import React from 'react'
import ReactDOM from 'react-dom'
// import './styles/style.scss'
import ToDoApp from './components/TodoApp'






ReactDOM.render(<ToDoApp todos={['one', 'two', 'three']} />, document.getElementById('appRoot'))