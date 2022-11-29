import { Button, Container, Navbar, Modal } from 'react-bootstrap';
import { useState } from 'react';

function NavComponent() {
   const [ show, setShow ] = useState(false);
   const handleShow = () => setShow(true);
   const handleClose = () => setShow(false);
   
    return (
        <div>
            <Navbar expand='sm'>
                <Navbar.Brand href='/'>
                    E-Commerce Store
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Button onClick={handleShow}>
                        Cart 0 items
                    </Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>This is the modal body</h1>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default NavComponent;