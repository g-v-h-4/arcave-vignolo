import './Item.css';

const Item = ({ product }) => {
    return (
        <li>
            <h3>{ product.name }</h3>
            <img className="item-image" src={ product.image } alt={ product.name }/>
            <p>${ product.price }</p>
        </li>
    );
}

export default Item;
