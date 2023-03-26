import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Shop.css'
const Shop = () => {

    const [produtcs, setProduct] = useState([]);

    useEffect(()=>{
        fetch('/src/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    produtcs.map(product => <Product 
                    key={product.id}
                    product = {product}
                    ></Product>)
                }
                
            </div>
            <div className="cart-container">
                <h4>Order Summer</h4>
            </div>
        </div>
    );
};

export default Shop;