import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    return (
        <section className='cartItem'>
            <article>
                <img src={productImage} className='cartPic' />
            </article>
            <section className='description'>
                <p>
                    <b className='productName'>{productName}</b>
                </p>
                <p className='price'>${price}</p>
                <article className='countHandler'>
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input
                        value={cartItems[id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button onClick={() => addToCart(id)}> + </button>
                </article>
            </section>
        </section>
    );
};
