import React from 'react'
import {Button,Row,Col,Container} from 'reactstrap'


const Todo = (props) => (
        <Row className="text-left">
            <Col md="4"></Col>
            <Col md="4"> {props.todoText}</Col>
            <Col md="4">
                <Button size="sm" color="warning" onClick={(e)=>{props.handleRemoveSingle(props.todoText)}}>Remove</Button>
                <p></p>
            </Col>
        </Row>    

)
export default Todo