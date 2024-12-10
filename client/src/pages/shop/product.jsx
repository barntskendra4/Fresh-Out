import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import './shop.css'
export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
    return (
        <section className='product'>
            <img src={productImage} className='cartImg'></img>
            <article>
                <p name='productName'>{productName}</p>
                <p name='price'><b>${price}</b></p>
            </article>
            <button className='addToCartBttn' onClick={() => addToCart(id)}>Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>} </button>
        </section>
    )
}
