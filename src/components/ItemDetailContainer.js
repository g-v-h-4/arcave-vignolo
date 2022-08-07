import { getProductById } from '../asyncMock.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.js';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();

    const { productId } = useParams();

    useEffect(() => {
        getProductById(productId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.log(error);
            });
    }, [productId]);

    return (
        <>
            <h1>Detalle</h1>
            {/*<h2>{ product?.name }</h2>*/}
            <ItemDetail { ...product }/>
        </>
    );
}

export default ItemDetailContainer;
