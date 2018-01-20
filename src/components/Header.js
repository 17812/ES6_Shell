import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h6>{props.subtitle}</h6>
        </div>
    )
}

Header.defaultProps = {
    title: 'Todo Tracking Application',
    subtitle: 'Put your life in the hands of a computer'
}

export default Header