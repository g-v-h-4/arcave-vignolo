import { getProductById } from '../asyncMock.js';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail.js';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();

    useEffect(() => {
        getProductById('1')
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <h1>Detalle</h1>
            {/*<h2>{ product?.name }</h2>*/}
            <ItemDetail { ...product }/>
        </>
    );
}

export default ItemDetailContainer;
