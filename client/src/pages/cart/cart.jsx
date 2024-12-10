import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { PRODUCTS } from '../../products'
import { CartItem } from './cart-item';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/nav/Navbar'
import './cart.css'



const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <section>
      <Navbar />
      <section className='cartBox'>
        <section className='item'>
          <section className='cartItems'>
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem data={product} />
              }
            })}
          </section>
        </section>
        {totalAmount > 0 ? (
          <section className='checkout'>
            <p className='subtotalBox'> Subtotal: ${totalAmount} </p>
            <article className='coBtnBox'>
              <button className='coBtn' onClick={() => navigate("/shop")}> Continue Shopping </button>
              <button className='coBtn' onClick={() => navigate("/checkout")}>Checkout</button>
            </article>
          </section>
        ) : (<h1>Your cart is Empty</h1>)}
      </section>
    </section>
  );
};

export default Cart;