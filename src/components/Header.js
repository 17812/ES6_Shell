import React from 'react'

const Header = (props) => (
        <div>
            <h1>{props.title}</h1>
            <h6>{props.subtitle}</h6>
            <p></p>
        </div>
    )


Header.defaultProps = {
    title: 'Todo Tracking Application',
    subtitle: 'Put your life in the hands of a computer'
}

export default Header