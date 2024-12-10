import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product';
import Navbar from '../../components/nav/Navbar';
import './shop.css';

const Shop = () => {
    return (
        <section>
            <Navbar />
            <section className='shopBody'>
            <header>
                <h1>Place your order</h1>
                <i>Order Now</i>
            </header>
            <section className='shop'>
                <article className='shopBox'>
                    <section className='products'>
                        {PRODUCTS.map((product) => (
                            <Product data={product} />
                        ))}
                    </section>
                </article>
            </section>
            </section>
        </section>
    )
}


export default Shop;