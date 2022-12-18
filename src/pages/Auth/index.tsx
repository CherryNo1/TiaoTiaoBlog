import React from 'react'

function isAuth() {
    const token = localStorage.getItem('Token')
    return (
        token != null
    )
}

export default isAuth 