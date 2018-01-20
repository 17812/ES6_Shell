import React from 'react'


const WhatShouldIDo = (props) => {
    return (
        <div>
            <button disabled={props.todoCount} onClick={props.feelingLucky}>feeling lucky</button>
        </div>
    )
}

export default WhatShouldIDo