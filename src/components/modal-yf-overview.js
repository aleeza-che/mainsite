/**
 details and summary dropdown component
 */
 import * as React from 'react';
 import { useState } from 'react';
 import Button from 'react-bootstrap/Button';
 import Modal from 'react-bootstrap/Modal';

 function ModalYFOverview() {
   const [show, setShow] = useState(false);
 
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   
   return (
     <>
       <Button variant="primary" onClick={handleShow}>
Bible Overview</Button>
 
       <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
         <Modal.Header closeButton>
           <Modal.Title>General Overview of the Bible</Modal.Title>
         </Modal.Header>
         <Modal.Body> <p>
            <ul><li>The bible is a library written by at least 35 different authors, split into 2 sections called testaments<b>*</b>.<br/><sub><b>*</b> Testament: a person's will, especially the part relating to personal property. </sub><ul><li>Old Testament <ul><li>before the birth of Christ</li><li>39 books</li><li>spans about 2000 years (not including creation: Genesis 1-11 is prehistoric to that)</li><li>Originally written in Hebrew (some early manuscripts are written in Biblical Aramaic)</li></ul></li><li>New Testament<ul><li>after the birth of Christ</li><li>Spans about 100 years</li><li>Originally written in Greek</li></ul></li></ul></li> <li>Chapters and verses were added into the scriptures for ease of use, but in some of the books, the breaking points in the chapters may not be seamless. Just something to keep in mind while reading. Dominican, Stephen Langton, thou he was not the first, created the chapter divisions in 1205, which are used today.</li><li>If your translation has them, it may be more readable to follow section headings instead of chapters as breaking points.</li></ul>
          </p>
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
 
 export default ModalYFOverview;