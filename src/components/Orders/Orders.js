import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Orders = () => {
    const {products,  previousCard}= useLoaderData()
    const [cart, setCart] = useState( previousCard)
   console.log(cart.length)
    return (
        <div className='shop'>
           <div className='product-component'>

           </div>
           <div className='cart-component'>
            <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Orders;