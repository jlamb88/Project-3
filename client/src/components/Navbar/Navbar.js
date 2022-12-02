import { Button, Navbar, Modal } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from '../../CartContext';
import CartProduct from '../CartProduct/CartProduct';

function NavComponent() {
    const cart = useContext(CartContext);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // checkout function for checkout button w/ POST route.
    const checkout = async () => {
        await fetch('http://localhost:3000/checkout', { // this address will need to change
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ items: cart.items })
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if (response.url) {
                window.location.assign(response.url) // sends user to Stripe
            }
        });
    };

    // adds up all product.quantity to show total amount of products in cart
    const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
    console.log(cart);
    return (
        <div>
            <Navbar bg='transparent' expand='sm'>
                <Navbar.Toggle /> {/* Hamburger Button */}
                <Navbar.Collapse className='justify-content-end'> {/* Everything for the Hamburger goes in here */}
					<Navbar.Brand className='navbarText' href='/'>Home</Navbar.Brand>
                    <Navbar.Brand className='navbarText' href='/about'>About</Navbar.Brand>
                    <Navbar.Brand className='navbarText' href='/store'>Store</Navbar.Brand>
                    <Navbar.Brand className='navbarText' href='/user'>Login</Navbar.Brand>
                    <Button variant='secondary' className='navbarText' onClick={handleShow}>Cart ({productCount}) </Button> 
                </Navbar.Collapse>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className='modalTitleText'>Shopping Cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* If there are products, map over current, else show cart is empty */}
                        {productCount > 0 ?
                            <div className='modalText'>
                                <p>In Cart: </p>
                                {cart.items.map((currentProduct, index) => (
                                    // gives product info to the cart modal to display
                                    <CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity}>Total</CartProduct>
                                ))}
                                {/* total cost limited to 2 decimals */}
																<br></br>
                                <h2 className='totalh2'>Total: ${cart.getTotalCost().toFixed(2)}</h2>
                                {/* checkout button */}
                                <Button variant='success' onClick={checkout}>Checkout</Button>
                            </div>
                            :
                            <div className='modalText'>
                                <p>Your Cart Is Empty!</p>
                            </div>
                        }
                    </Modal.Body>
                </Modal>

            </Navbar>
        </div>
    );
};

export default NavComponent;