import { Button, Navbar, Modal } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from '../../CartContext';

function NavComponent() {
    const cart = useContext(CartContext);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // adds up all product.quantity to show total amount of products in cart
    // seems not to be working yet.... 
    const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <div>
            <Navbar expand='sm'>
                <Navbar.Brand href='/'>
                    E-Commerce Store
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Button onClick={handleShow}> Cart ({ productCount }) </Button>
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