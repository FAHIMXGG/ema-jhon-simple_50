import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Shop.css'
const Shop = () => {

    const [produtcs, setProduct] = useState([]);

    //put data
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('/src/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    // get data
    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    produtcs.map(product => <Product 
                    key={product.id}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
                
            </div>
            <div className="cart-container">
                <h4>Order Summery</h4>
                <p>selected item {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;