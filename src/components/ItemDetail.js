import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import CartContext from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ description, id, image, name, price, stock }) => {
    const [quantity, setQuantity] = useState(0);

    const { addItem, getProductQuantity } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantity(quantity);

        const itemToAdd = {
            id, name, price, quantity
        }

        addItem(itemToAdd);
    }

    const productQuantity = getProductQuantity(id);

    return (
        <>
            <h2>{ name }</h2>
            <p>{ description }</p>
            <img src={ image } alt={ name } style={{ width: '512px' }}/>
            <p>{ price }</p>
            {
                quantity === 0 ? (
                    <ItemCount onAdd={ handleOnAdd } stock={ stock } initial={ productQuantity }/>
                ) : (
                    <Link to="/cart">Finalizar Compra</Link>
                )
            }
        </>
    );
}

export default ItemDetail;
