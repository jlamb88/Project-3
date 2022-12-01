import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from "../../CartContext";
import { useContext } from 'react';

function ProductCard (props) {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(product.image);

    return (
        <Card >
            <Card.Body >
                <Card.Img variant="top" src={product.image} />
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                {/* checks product quantity to determine which buttons to show */}
                { productQuantity > 0 ?
                    <div>
                        <Form as={Row}>
                            <Form.Label column='true' sm='6'> In Cart: {productQuantity} </Form.Label>
                            <Col sm='6'>
                                <Button variant ='outline-secondary' sm='6' onClick={ () => cart.addOne(product.id)} className='mx-2'>+</Button>
                                <Button variant ='outline-secondary' sm='6' onClick={ () => cart.removeOne(product.id)}className='mx-2'>-</Button>
                            </Col>
                        </Form>
                        <Button variant='outline-danger' onClick={ () => cart.deleteFromCart(product.id)} className='my-2'>Remove All</Button>
                    </div>
                    :
                    <Button variant='secondary' onClick={ () => cart.addOne(product.id) }> Add To Cart </Button>
                }
            </Card.Body>
        </Card>
    )
};

export default ProductCard;