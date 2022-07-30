import Item from './Item.js';

const ItemList = ({ products }) => {
    return (
        <ul>
            { products.map(p => <Item key={ p.id } product={ p }/>) }
        </ul>
    );
}

export default ItemList;
