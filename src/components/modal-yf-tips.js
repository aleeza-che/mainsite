/**
 details and summary dropdown component
 */
 import * as React from 'react';
 import { useState } from 'react';
 import Button from 'react-bootstrap/Button';
 import Modal from 'react-bootstrap/Modal';

 function ModalYFTips() {
   const [show, setShow] = useState(false);
 
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   
   return (
     <>
       <Button variant="primary" onClick={handleShow}>
       Helpful Hints &amp; Tips</Button>
 
       <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
         <Modal.Header closeButton>
           <Modal.Title>Helpful Bible Hints &amp; Tips</Modal.Title>
         </Modal.Header>
         <Modal.Body>  <div>
        <p>
            <ul><li>Get a journal to take notes as you read so sharing will be easier.</li><li>The Bible books Genesis, Exodus, Leviticus, Numbers and Deuteronomy are attributed to Moses as their author. In Jewish tradition, Moses is one of the greatest prophets and the one who gave Israel their initial law. So, all 5 of the books attributed to him are under the section of books in the Bible library called "The Law" &mdash; in Hebrew, Torah.</li><li>Most of the names in most English bible translations are not in their original spelling. Some are translated and transliterated and sometimes many times over. For instance, the english name John in Hebrew is actually Yochanan.</li></ul>
          </p>

        </div>
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
 
 export default ModalYFTips;