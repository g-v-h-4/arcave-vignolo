import { useState } from 'react';

const ItemCount = ({ onAdd, stock }) => {
    const [count, setCount] = useState(1);

    const decrement = () => {
        if (count > 1)
        {
            setCount(count - 1);
        }
    }

    const increment = () => {
        if (count < stock)
        {
            setCount(count + 1);
        }
    }

    return (
        <div>
            <div>
                Detalle del producto
            </div>
            <div>
                <button onClick={ decrement }>-</button>
                <span>{ count }</span>
                <button onClick={ increment }>+</button>
            </div>
            <div>
                <button onClick={ () => onAdd(count) }>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;
