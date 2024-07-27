/**
 details and summary dropdown component
 */
 import * as React from 'react';
 import { useState } from 'react';
 import Button from 'react-bootstrap/Button';
 import Modal from 'react-bootstrap/Modal';

 function ModalButtons() {
   const [show, setShow] = useState(false);
 
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   
   return (
     <>
       <Button variant="primary" onClick={handleShow}>
The Kings and Prophets of the Kingdoms of Israel and Judah</Button>
 
       <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
         <Modal.Header closeButton>
           <Modal.Title>The Kings and Prophets of the Kingdoms of Israel and Judah</Modal.Title>
         </Modal.Header>
         <Modal.Body>  <img src="https://withgladness.com/wp-content/uploads/2024/01/18x24-300.jpg" id="img-1" alt="Chart of the Kings and Prophets of Israel and Judah by Josh Byers"/>
</Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
             Close
           </Button>
         </Modal.Footer>
       </Modal>
     </>
   );
 }
 
 export default ModalButtons;