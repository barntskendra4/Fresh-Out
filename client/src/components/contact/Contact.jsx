import React from 'react'
import Navbar from '../nav/Navbar';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import { MdLocationPin, MdEmail } from "react-icons/md";
import { FaHome, FaApple, FaSnapchatSquare, FaInstagramSquare, FaLinkedin, FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { HiBuildingOffice } from "react-icons/hi2";
import { FcCellPhone } from "react-icons/fc";
import { BiLogoGmail } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import map from '../../assets/images/map.jpg';
import './contact.css';

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <section>
      <Navbar />
      <header>
        <h1 className='contactTitle'>Contact Me</h1>
        <i>Message us and we will be in touch.</i>
      </header>
      <section className='contactsBody'>        <section>
          <Form action="http://localhost:8080/contact" method="post" noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  name='firstname'
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your first name.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  name='lastname'
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your last name.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    name='email'
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" name='city' required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" name='state' required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" placeholder="Zip" name='zip' required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Comments (Optional)</Form.Label>
                <Form.Control as="textarea" rows={3} name='comments' />
              </Form.Group>

            </Row>
            <button className='formSubmit'>Submit</button>
          </Form>
          <section className='acc'>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <article className='contactInfo'>
                    <MdLocationPin />
                    <p className='mediaIconTag'>Location</p>
                  </article>

                </Accordion.Header>
                <Accordion.Body>
                  <p className='ne'>Located in Omaha, NE</p>
                  <article>
                    <img src={map} alt="map" className='map' />
                  </article>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <article className='contactInfo'>
                    <FaPhoneAlt />
                    <p className='mediaIconTag'>Phone Number</p>
                  </article>
                </Accordion.Header>
                <Accordion.Body>
                  <article className='contactInfo'>
                    <FaHome className='con' />
                    <p className='num'>402-456-7878</p>
                  </article>
                  <article className='contactInfo'>
                    <HiBuildingOffice className='con' />
                    <p className='num'>402-909-3030</p>
                  </article>
                  <article className='contactInfo'>
                    <FcCellPhone className='con' />
                    <p className='num'>402-813-3732</p>
                  </article>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <article className='contactInfo'>
                    <MdEmail />
                    <p className='mediaIconTag'>Social Media</p>
                  </article>
                </Accordion.Header>
                <Accordion.Body>
                  <article className='contactInfo'>
                    <FaApple className='con' />
                    <p className='num'>freshout@iCloud.com</p>
                  </article>
                  <article className='contactInfo'>
                    <BiLogoGmail className='con' />
                    <p className='num'>freshout@gmail.com</p>
                  </article>
                  <article className='contactInfo'>
                    <FaSnapchatSquare className='con' />
                    <p className='num'>Fresh_Out</p>
                  </article>
                  <article className='contactInfo'>
                    <FaInstagramSquare className='con' />
                    <p className='num'>@Fresh.Out</p>
                  </article>
                  <article className='contactInfo'>
                    <FaSquareXTwitter className='con' />
                    <p className='num'>Fresh Out</p>
                  </article>
                  <article className='contactInfo'>
                    <FaLinkedin className='con' />
                    <p className='num'>FreshOut_</p>
                  </article>
                  <article className='contactInfo'>
                    <FaFacebookSquare className='con' />
                    <p className='num'>FreshOut TheGate</p>
                  </article>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Contact;
