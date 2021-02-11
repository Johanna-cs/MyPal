import React, { useState } from "react"
import avatar_2 from './images/avatar_2.svg'
import BookMyPal from '../Books_Result/BookMyPal'
import Axios from 'axios'
import Menu from '../Menu'
import ReturnButton from '../Common/ReturnButton'
import './profil.css'


const Profil = (props) => {

  const getUser = (e) => {
    e.preventDefault()
    Axios
    .get("http://localhost:4000/mypal/users/:id")
    .catch((err) => console.error(err))

  }
  return (
    <>
      
      <div className="Profil-page">
        <div className='Profil_header'>
        <ReturnButton />
          <div className='Profil-avatar'>
              <img src={avatar_2} className='avatar' alt='mon avatar'/>
          </div>
          <h4> {props.prenom}Johanna Lovelace {props.nom} </h4>
          </div>
          <div className="Profil-infos">
            <p> {props.pseudo} Johnana, {props.age}31 ans</p>
            <p> {props.bio} Passionnée de roman d'aventures ! </p>
          </div>
        
      </div>
      <h4 id='mypalTitle'>Mes prochaines lectures</h4>
      <div className='mypal'> 
          
          <BookMyPal 
          title='Au Loin'
          edition=' 10 / 18'
          author='Hernàn Diaz'
          />
          <BookMyPal title='Au Loin'
          edition=' 10 / 18'
          author='Hernàn Diaz' />
          
          <BookMyPal title='Au Loin'
          edition=' 10 / 18'
          author='Hernàn Diaz' />
      </div>
      <Menu />
    </>
  );
}

export default Profil