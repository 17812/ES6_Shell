import React from 'react'
import {Button} from 'reactstrap'


const RemoveAll = (props) => (
        <div>
        <p></p>
        <p></p>
            <p>
                <Button color="danger" onClick={props.handleRemoveAll}>RemoveAll</Button>
            </p>
            <p></p>
            <p></p>
        </div>
    )


export default RemoveAll