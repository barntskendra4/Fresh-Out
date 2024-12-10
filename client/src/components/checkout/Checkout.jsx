import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { FaUserCircle, FaRegAddressCard, FaCcMastercard, FaCcDiscover, FaCcAmex, FaCcVisa } from "react-icons/fa";
import { BiSolidInstitution } from "react-icons/bi";
import { FaEnvelopesBulk } from "react-icons/fa6";
import Navbar from '../nav/Navbar';
import './checkout.css'

const Checkout = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <main>
      <Navbar />
      <section className="row">
        <section className="col-75">
          <section className="container">
            <form action="http://localhost:8080/checkout" method='post'>
              <section className="row">
                <article className="col-50">
                  <h3>Billing Address</h3>
                  <label for="fname"><i className="fa fa-user"><FaUserCircle /></i> Full Name</label>
                  <input type="text" id="fname" name="firstname" placeholder="John M. Doe" required />
                  <label for="email"><i className="fa fa-envelope"><FaEnvelopesBulk /></i> Email</label>
                  <input type="text" id="email" name="email" placeholder="john@example.com" required />
                  <label for="addy"><i className="fafa-address-card-o"><FaRegAddressCard /></i> Address</label>
                  <input type="text" id="addy" name="address" placeholder="542 W. 15th Street" required />
                  <label for="city"><i className="fa fa-institution"><BiSolidInstitution /></i> City</label>
                  <input type="text" id="city" name="city" placeholder="New York" required />
                  <section className="row">
                    <article className="col-50">
                      <label for="state">State</label>
                      <input type="text" id="state" name="state" placeholder="NY" required />
                    </article>
                    <article className="col-50">
                      <label for="zip">Zip</label>
                      <input type="text" id="zip" name="zip" placeholder="10001" required />
                    </article>
                  </section>
                </article>
                <section className="col-50">
                  <h3>Payment</h3>
                  <label for="fname">Accepted Cards</label>
                  <section className="icon-container">
                    <article><FaCcVisa /></article>
                    <article><FaCcAmex /></article>
                    <article><FaCcMastercard /></article>
                    <article><FaCcDiscover /></article>
                  </section>
                  <label for="cname">Name on Card</label>
                  <input type="text" id="cname" name="cardname" placeholder="John More Doe" required />
                  <label for="ccnum">Credit card number</label>
                  <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" required />
                  <label for="expmonth">Exp Month</label>
                  <input type="text" id="expmonth" name="expmonth" placeholder="September" required />
                  <section className="row">
                    <article className="col-50">
                      <label for="expyear">Exp Year</label>
                      <input type="text" id="expyear" name="expyear" placeholder="2018" required />
                    </article>
                    <article className="col-50">
                      <label for="cvv">CVV</label>
                      <input type="text" id="cvv" name="cvv" placeholder="352" required />
                    </article>
                  </section>
                </section>
              </section>
              <label>
                <input type="checkbox" checked="checked" name="sameadr" required /> Shipping address same as billing
              </label>
              <input value="Process order" className="btn" type="submit" />
            </form>
          </section>
        </section>
        <section className="col-25">
          <article className="container">
            <p name='subtotal'> Subtotal: ${totalAmount} </p>
          </article>
        </section>
      </section>
    </main>
  )
}

export default Checkout