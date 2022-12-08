import { Button, Checkbox, Radio } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
export default function User() {
    return (
        <div>
            <NavLink to={'/home'}>
                <Button>USER Go Home</Button>
            </NavLink>
        </div>
    )
}
