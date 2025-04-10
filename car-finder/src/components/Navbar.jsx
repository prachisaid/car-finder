import React from 'react' 
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='header'>
                <div className='logo'>
                    FirstRay
                </div>
                <ul className='lists'>
                    <li> <NavLink to='/'> Home </NavLink> </li>
                    <li> <NavLink to='/wishlist'> Wishlist </NavLink> </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar