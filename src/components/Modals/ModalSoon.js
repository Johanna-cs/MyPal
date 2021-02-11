import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'bootstrap';

import './ModalsCss.css'

const ModalSoon = (props) => {
  const {
    className
  } = props;

  // Modal fermée par défaut
  const [modal, setModal] = useState(true);
  
  // Ouvrir/fermer la modal 
  const toggle = () => setModal(!modal);

  return (
    <div className="container_modal">
      <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
        <h4>Bientôt !</h4>
          <p style={{ textAlign: "center"}}>La création de compte n'est pas encore disponible.</p>
        </ModalBody>
        <ModalFooter>
        <Link to="/home" style={{ textDecoration: "none"}}>
          <Button id='loginBtn' color="light" onClick={toggle}>Parcourir My Pal</Button>
        </Link>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalSoon;