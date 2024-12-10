import React from 'react'
import Navbar from '../nav/Navbar';
import './about.css';
import Tink from './images/Tink.png';
import Kendra from './images/Kendra.png';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const About = () => {
  return (
    <section>
      <Navbar />
      <h1 className='aboutTitle'>About Us</h1>
      <p className='aboutIntro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ut commodi consectetur ipsam omnis perspiciatis facilis. Nobis dolorem sint minima! Dolor, vitae. Maxime quisquam aut magni porro, molestias accusamus architecto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus assumenda odit neque illum dignissimos minima, tempora quae? Quod autem, ipsa, doloremque consequuntur corrupti molestias doloribus eos totam distinctio accusamus fuga!lored
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam magni voluptatem officia sit illo! Sapiente est ex magni inventore eaque voluptatum aperiam laudantium doloribus nihil. Facilis inventore sapiente corporis facere.
      </p>
      <section className='cardBox'>
        <section class="card">
          <img src={Tink} alt="Tink" />
          <h1>Antwanique Crawford</h1>
          <p className="title2">CEO & Founder </p>
          <article className='iconsBox'>
            <FaFacebook size={25} className='fb'/>
            <FaXTwitter size={25} className='x' />
            <FaLinkedin size={25}/>
            <FaGithub size={25} className='git' />
          </article>
          <p><button className='contactBtn'>Contact</button></p>
        </section>
        <section class="card">
          <img src={Kendra} alt="Kendra" />
          <h1>Kendra Barnts</h1>
          <p className="title2">CEO & Founder </p>
          <article className='iconsBox'>
            <FaFacebook size={25} className='fb'/>
            <FaXTwitter size={25} className='x' />
            <FaLinkedin size={25} />
            <FaGithub size={25} className='git' />
          </article>
          <p><button className='contactBtn'>Contact</button></p>
        </section>
      </section>
    </section>
  )
}

export default About;