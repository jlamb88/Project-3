import Button from 'react-bootstrap/Button';
import { CartContext } from '../../CartContext';
import { useContext } from 'react';
import { getProductData } from '../../productStore';

// will give product information to the shopping cart modal
function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <div>
            <h4>{ productData.name }</h4>
            <p>Qty: { quantity }</p>
            <h4>${ (quantity * productData.price) }</h4>
            <Button variant='danger' size='sm' onClick={ () => cart.deleteFromCart(id) }>Remove</Button>
        </div>
    );
};

export default CartProduct;