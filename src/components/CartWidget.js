import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../context/CartContext';


const CartWidget = () => {
    const { getQuantity } = useContext(CartContext);

    const quantity = getQuantity();

    return (
        <Link to="/cart" className="cart-widget">
            <img src="../images/basket-shopping-solid.svg" alt="Cart Widget" className="icon-cart-widget"/>
            <span>{ quantity }</span>
        </Link>
    );
}

export default CartWidget;
