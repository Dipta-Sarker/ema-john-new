import {getStoredCart } from '../utilities/fakedb';


export const ProductsAndCartLoaders = async () =>{
    const productsData = await fetch('products.json') ;
    const products = await productsData.json();

    const sevedCard = getStoredCart()
    
    const previousCard = []
    for(const id in sevedCard){
        const addedProduct = products.find(product => product.id === id)
        if(addedProduct){
            const quentity  = sevedCard[id]
            addedProduct.quentity= quentity;
            previousCard.push(addedProduct)
            
        }
        console.log(previousCard)
    }
    return {products, previousCard}
}