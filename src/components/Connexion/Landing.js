import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './landing.css'
import mainIllu from '../assets/icons/illustration_1.jpg'
import ModalSoon from '../Modals/ModalSoon'


const Landing = () => {

    // Affichage de la Modal Soon
    const [modalShow, setModalShow] = useState(true);

        return (
            <div className='Landing_page'>
                
                <div className='landing_header'>
                    <h1 className='title'> Bienvenue sur My Pal </h1>
                    <div className='slogan_box'>
                    <h3 className='slogan'> Découvre des bouquins et ajoute-les à ta Pile à Lire ! </h3>
                    </div>
                </div>
                <div className='landing_center'>
                    <img className='Main_illu' src={mainIllu} alt='Readers books illustration' /> 
                </div>
                
                <div className='landing_bottom'>
                <div className='login' > 
                        <button type='button' id='loginBtn' onClick={() => setModalShow(!modalShow)} > Connexion </button>
                </div>

                <div>
                    <Link to="/home" style={{ textDecoration: "none" }}>
                            <button type='button' id='palBtn'> Parcourir </button>
                    </Link>
                </div>
                
                
                </div>
                {modalShow === false ?
                    <ModalSoon />  
                    : null} 
                {/* <div className='create' >
                    <p>Pas encore membre ?
                    <Link to='/register' style={{ textDecoration: "none" }}>
                        <a href='/register' style={{ textDecoration: "none" }} id='signUp' > S'enregistrer </a>
                    </Link> 
                    </p>
                </div> */}
            
            </div>
        )
    
}
export default Landing 