import React from 'react'

const Header = ({label = 'header par defaut'}) => {
console.log("🚀 ~ file: index.js ~ line 4 ~ Header ~ props", label)

    return (
        <div>
        <h1>{label}</h1>
        </div>
    )
}

export default Header