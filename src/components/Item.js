import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <li>
            <h3>{ product.name }</h3>
            <img className="item-image" src={ product.image } alt={ product.name }/>
            <p>${ product.price }</p>
            <Link to={`/detail/${product.id}`}>Ver detalle</Link>
        </li>
    );
}

export default Item;
