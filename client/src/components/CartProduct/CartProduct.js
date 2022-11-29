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
            <h3>{ productData.name }</h3>
            <p>Qty: { quantity }</p>
            <p>${ (quantity * productData.price) }</p>
            <Button size='sm' onClick={ () => cart.deleteFromCart(id) }>Remove</Button>
        </div>
    );
};

export default CartProduct;