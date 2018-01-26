import React from 'react'
import {Button} from 'reactstrap'


const  WhatShouldIDo = (props)=> (


        <div>
        <p></p>
            <Button className="button--link" color="secondary" disabled={props.todoCount} onClick={props.feelingLucky}>click if you feel lucky</Button>
            <p></p>
        </div>
    

)

export default WhatShouldIDo    