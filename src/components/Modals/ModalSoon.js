import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap';

import './ModalsCss.css'

const ModalSoon = () => {


  // Modal fermée par défaut
  const [show, setShow] = useState(true)

  // Ouvrir/fermer la modal 
  const handleClose = () => setShow(!show)
  const handleShow = () => setShow(true)


  return (
    <>

      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <div className="container_modal">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title><h4>Bientôt !</h4></Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <p style={{ textAlign: "center"}}>La création de compte n'est pas encore disponible.</p>
            </Modal.Body>
          <Modal.Footer>
          <Link to="/home" style={{ textDecoration: "none"}}>
            <Button id='loginBtn' variant="light" onClick={handleClose}>
              Parcourir My Pal
            </Button>
          </Link>
          </Modal.Footer>
        </Modal>
        </div>
</>
  );
}

export default ModalSoon; 