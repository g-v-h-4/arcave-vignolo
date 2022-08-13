import { getProducts, getProductsByCategory } from '../asyncMock.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList.js';


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        if (!categoryId) {
            getProducts().then(products => { setProducts(products) })
        } else {
            getProductsByCategory(categoryId).then(products => {
                setProducts(products)
            })
        }
    }, [categoryId]);

    return (
        <>
            <h1>{ greeting }</h1>
            <ItemList products={ products }/>
        </>
    );
}

export default ItemListContainer;
