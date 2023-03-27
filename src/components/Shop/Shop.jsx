import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {

    const [products, setProduct] = useState([]);

    //put data
    const [cart, setCart] = useState([]);
    //core data
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    // local storage
    useEffect(()=>{
        //console.log('products',products);
        const storedCart = getShoppingCart();
        
        const savedCart = [];
        //console.log(storedCart);
        // step 1
        for(const id in storedCart){
            //console.log(id);
            // step 2 get the product by using id
            const addedProduct = products.find(product => product.id === id);
            //console.log(addedProduct);
            // step 3: get quantity of the product
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4" add the added product to the saved cart
                savedCart.push(addedProduct);
            }
        }
        //step 5 set the cart
        setCart(savedCart);
    }, [products])

    // get data
    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product 
                    key={product.id}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;