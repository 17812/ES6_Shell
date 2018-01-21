import React from 'react'
import {Button} from 'reactstrap'


const  WhatShouldIDo = (props)=> (


        <div>
        <p></p>
            <Button color="success" disabled={props.todoCount} onClick={props.feelingLucky}>click if you feel lucky</Button>
            <p></p>
        </div>
    

)

export default WhatShouldIDo