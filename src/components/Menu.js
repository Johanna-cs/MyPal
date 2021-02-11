import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'


const Menu = () => {

    return (
    <div className='menu_navbar'>
        <div className='menu_login'>
            <Link to={{
                    pathname: '/login'
                }}>
                    <button className='menu_icn'><p> Connexion </p></button>
                </Link>
        </div>
        <div className='menu_stores'>
            <Link to={{
                    pathname: '/stores'
                }}>
                    <button className='menu_icn'><p> Les libraires </p></button>
                </Link>
        </div>
        <div className='menu_profile'>
            <Link to={{
                    pathname: '/profil'
                }}>
                    <button className='menu_icn'><p> Mon espace </p></button>
                </Link>
        </div>
    </div>
    )
}

export default Menu