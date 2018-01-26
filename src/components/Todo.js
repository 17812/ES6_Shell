import React from 'react'
import {Button,Row,Col,Container} from 'reactstrap'


const Todo = (props) => (

        <Row>
            <Col md="4"></Col>
            <Col md="4" className="text-left"> {props.todoText}</Col>
            <Col md="2"><Button className="button button--link text-right" onClick={(e)=>{props.handleRemoveSingle(props.todoText)}}>Remove</Button></Col>
            <Col md="2"></Col>
        </Row>  
    
)
export default Todo