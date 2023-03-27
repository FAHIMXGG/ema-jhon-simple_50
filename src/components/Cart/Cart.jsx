import React from 'react';
import './cart.css'
const Cart = ({cart}) => {
    //const cart = props.cart; // o1
    //const {cart} = props; // o2

    // calculate
    let total = 0;
    let totalShipping = 0;
    for (const product of cart ){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping
    }
    const tax = total *0.07;
    const grandTotal = total + totalShipping + tax

    return (
        <div className='cart'>
            <h4>Order Summery</h4>
                <p>Selected item {cart.length}</p>
                <p>Total Price: ${total} </p>
                <p>Total Shipping: ${totalShipping}</p>
                <p>Tax ${tax.toFixed(2)}</p>
                <h6>Grand Total: ${grandTotal.toFixed(2)} </h6>
        </div>
    );
};

export default Cart;