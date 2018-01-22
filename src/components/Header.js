import React from 'react'

const Header = (props) => (
        <div className="header" >
            <h1 className="header_title">{props.title}</h1>
            <h6 className="header__subtitle">{props.subtitle}</h6>
            <p></p>
        </div>
    )


Header.defaultProps = {
    title: 'Todo Tracking Application',
    subtitle: 'Put your life in the hands of a computer'
}

export default Header