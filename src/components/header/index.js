import React from 'react'

const Header = ({label = 'header par defaut'}) => {
    return (
        <div>
        <h1>{label}</h1>
        </div>
    )
}

export default Header