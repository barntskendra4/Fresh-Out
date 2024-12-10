import React from 'react';
import NavBar from '../nav/Navbar'
import Logo from './images/Logo.png';
import Carousel from 'react-bootstrap/Carousel';
import Pizza from './images/pizzarolls.jpg';
import Sweetrice from './images/sweetrice.webp';
import Popcorn from './images/popcornballs.jpg';
import Accordion from 'react-bootstrap/Accordion';
import { FaStar, FaRegStar } from "react-icons/fa";
import './home.css';

const Home = () => {
  return (
    <section>
      <article className='logoBox'>
        <img src={Logo} alt="Freshout the gate food truck logo" className='logo' />
      </article>
      <NavBar />
      <section className='carouselBox'>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="pics"
              src={Sweetrice}
              alt="First slide"
            />
            <article className='caption'>
              <h1 className='title'>CATERING</h1>
              <p>Book our truck for your special Event</p>
            </article>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="pics"
              src={Popcorn}
              alt="Second slide"
            />
            <article className='caption'>
              <h1 className='title'>SCHEDULE</h1>
              <p >Check our Schedule to see when we will be in a neighborhood near you.</p>
            </article>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="pics"
              src={Pizza}
              alt="Third slide"
            />
            <article className='caption'>
              <h1 className='title'>STAY CONNECTED</h1>
              <p>subscribe to get updates</p>
            </article>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className='intro'>
        <h1>Welcome to Fresh out the Gate 🍽️</h1>
        <article>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quae aliquid sequi explicabo animi nemo inventore voluptatum dolorem voluptatibus ea repudiandae repellendus, ex veniam, porro ipsa? Tempore ratione debitis beatae.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quae aliquid sequi explicabo animi nemo inventore voluptatum dolorem voluptatibus ea repudiandae repellendus, ex veniam, porro ipsa? Tempore ratione debitis beatae.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quae aliquid sequi explicabo animi nemo inventore voluptatum dolorem voluptatibus ea repudiandae repellendus, ex veniam, porro ipsa? Tempore ratione debitis beatae.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quae aliquid sequi explicabo animi nemo inventore voluptatum dolorem voluptatibus ea repudiandae repellendus, ex veniam, porro ipsa? Tempore ratione debitis beatae.
        </article>
      </section>
      <section className='qaBox'>
        <h2 className='questions'>Frequently Asked Questions </h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Do you do special events?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What are business hours?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Where are you located?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>What Career opportunities do you have available?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Do you have a recipe book for purchase?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
      <br />
      <section>
        <h2 className="heading">Customer Ratings</h2>
        <p>4.1 average based on 254 reviews.</p>
        <span className="fa fa-star checked"><FaStar /></span>
        <span className="fa fa-star checked"><FaStar /></span>
        <span className="fa fa-star checked"><FaStar /></span>
        <span className="fa fa-star checked"><FaStar /></span>
        <span className="fa fa-star checked"><FaRegStar /></span>
        <hr />
        <section className="row">
          <section className="side">
            <article><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></article>
          </section>
          <section className="middle">
            <article className="bar-container">
              <div className="bar-5"></div>
            </article>
          </section>
          <section className="side right">
            <article>150</article>
          </section>
          <section className="side">
            <article><FaStar /><FaStar /><FaStar /><FaStar /></article>
          </section>
          <section className="middle">
            <article className="bar-container">
              <div className="bar-4"></div>
            </article>
          </section>
          <section className="side right">
            <article>63</article>
          </section>
          <section className="side">
            <article><FaStar /><FaStar /><FaStar /></article>
          </section>
          <section className="middle">
            <article className="bar-container">
              <div className="bar-3"></div>
            </article>
          </section>
          <section className="side right">
            <article>15</article>
          </section>
          <section className="side">
            <article><FaStar /><FaStar /></article>
          </section>
          <section className="middle">
            <article className="bar-container">
              <div className="bar-2"></div>
            </article>
          </section>
          <section className="side right">
            <article>6</article>
          </section>
          <section className="side">
            <article><FaStar /></article>
          </section>
          <section className="middle">
            <article className="bar-container">
              <div className="bar-1"></div>
            </article>
          </section>
          <section className="side right">
            <article>2</article>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Home