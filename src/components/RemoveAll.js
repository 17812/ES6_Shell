import React from 'react'

const RemoveAll = (props) => {
    return (
        <div>
            <p>
                <button onClick={props.handleRemoveAll}>RemoveAll</button>
            </p>
        </div>
    )
}

export default RemoveAll