import React from 'react'
import { Button,Row,Col } from 'reactstrap';


export default class TodoForm extends React.Component {

    state = {
        error: undefined
    }

    componentDidMount() {
        console.log('new todo component did mount')
    }

    handleNewTodoInput=(e)=> {

        e.preventDefault();

        // const newTodo='newToDo';

        const newTodo = e.target.elements.newTodoInput.value
        const error = this.props.handleNewTodo(newTodo);


        this.setState(() => ( { error }))

        if(!error){

        e.target.elements.newTodoInput.value = ''

        }

    }

    render() {
        return (
            <form onSubmit={this.handleNewTodoInput}>
                {this.state.error && <p>{this.state.error}</p>}
                <Row>
                    <Col md="4"></Col>
                    <Col md="6">
                <input type='text' name='newTodoInput' />
                </Col>
                <Col md="2">
                <Button size="sm" color="primary">Add New Todo</Button>
                </Col>
                </Row>
            </form>
        )
    }
}