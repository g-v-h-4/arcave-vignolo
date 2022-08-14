import { Link } from 'react-router-dom';
import { useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ description, image, name, price, stock }) => {
    const [quantity, setQuantity] = useState(0);

    const handleOnAdd = (qty) => {
        setQuantity(qty);
    }

    return (
        <>
            <h2>{ name }</h2>
            <p>{ description }</p>
            <img src={ image } alt={ name } style={{ width: '512px' }}/>
            <p>{ price }</p>
            {
                quantity === 0 ? (
                    <ItemCount onAdd={ handleOnAdd } stock={ stock }/>
                ) : (
                    <Link to="/cart">Finalizar Compra</Link>
                )
            }
        </>
    );
}

export default ItemDetail;
