import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import { faCoffee, faBookReader, faCity, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Menu = () => {

    return (
    <div className='menu_navbar'>

            <button className='menu_item'>
                <Link to={{pathname: '/home'}}>
                    <FontAwesomeIcon icon={faSearch}/> 
                </Link>
            </button>

            <button className='menu_item'>
                <Link to={{pathname: '/blog'}}>
                    <FontAwesomeIcon icon={faCoffee}/> 
                </Link>
            </button>

            <button className='menu_item'>
            <Link to={{pathname: '/stores'}}>
                    <FontAwesomeIcon icon={faCity}/>
                </Link>
            </button>

            <button className='menu_item'>
                <Link to={{pathname: '/profil'}}>
                    <FontAwesomeIcon icon={faBookReader}/>
                </Link>
            </button>
                        
            {/* <button className='menu_item'>
                <Link to={{pathname: '/login'}}>
                    <p> Connexion </p>
                </Link>
            </button> */}
    </div>
    )
}

export default Menu