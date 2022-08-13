import ItemCount from './ItemCount';

const ItemDetail = ({ description, image, name, price }) => {
    return (
        <>
            <h2>{ name }</h2>
            <p>{ description }</p>
            <img src={ image } alt={ name } style={{ width: '512px' }}/>
            <p>{ price }</p>
            <ItemCount/>
        </>
    );
}

export default ItemDetail;
