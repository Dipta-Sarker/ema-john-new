import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
//    const [products, setProducts] = useState([])
const products = useLoaderData()


    const [cart, setCart] = useState([])
console.log('shop', cart)
//    useEffect(() =>{
//     fetch('products.json')
//     .then(res => res.json())
//     .then(data => setProducts(data))
//    },[])

   useEffect(()=>{
    const storedCart = getStoredCart()
    const savedCart = []
    for(const id in storedCart){
        const addedProduct = products.find(product =>product.id === id)
        if(addedProduct){
        const quantity = storedCart[id]
        addedProduct.quantity = quantity;
    
            savedCart.push(addedProduct)
        }
        setCart(savedCart)
    }
   },[products])

   const productAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find(lpd => lpd.id === product.id)
    if(!exists){
     product.quantity = 1;   
     newCart = [...cart , product]
    }
    else{
        const rest = cart.filter(lpd => lpd.id !== product.id);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, exists]
    }
    setCart(newCart)
    addToDb(product.id)
   }


    return (
        <div className='shop'>
          <div className="product-component">
            {
                products.map(product => <Product 
                     key={product.id}
                    single={product}
                    productAddToCart={productAddToCart}
                ></Product>)
            }
            </div>  
            <div className="cart-component">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;