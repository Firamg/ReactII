import React from 'react'
import { NavLink } from 'react-router-dom'
import Pokemon from './img/Pokemon'

function NavBar() {
    const setActive = ({ isActive }) => (isActive ? 'active' : 'noActive')
    return (
        <div className='cols'>
            <div className='col1'>
                <Pokemon/>
            </div>



            <div className='col2'>
                <NavLink className={setActive} end to='/'>
                    Home
                </NavLink>
                {' - '}
                <NavLink className={setActive} to='/pokemones'>
                    Pokemones
                </NavLink>



            </div>


        </div>
    )
}

export default NavBar
