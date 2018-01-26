import React from 'react'
import {Button, Row, Col} from 'reactstrap'


const RemoveAll = (props) => (
        <div>
        <p></p>
        <p></p>
            <Row>
                <Col md="4"></Col>
                <Col md="4" className="widget-header text-left text-success">Your actions</Col>
                <Col md="2" className="widget-header text-right"><Button onClick={props.handleRemoveAll} className="button button--link">RemoveAll</Button></Col> 
                <Col md="2"></Col>               
            </Row>
        </div>
    )


export default RemoveAll