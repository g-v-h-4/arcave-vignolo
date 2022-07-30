import { getProducts } from "../asyncMock.js";
import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList.js';


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(products => { setProducts(products) })
    }, []);

    return (
        <>
            <h1>{ greeting }</h1>
            <ItemList products={ products }/>
        </>
    );
}

export default ItemListContainer;
