import React from 'react'
import Navbar from '../nav/Navbar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Reserve = () => {
  return (
    <section>
      <Navbar />
      <header>
        <h1>Book a Reservation</h1>
        <i>At any destination</i>
      </header>
      <section className='orderForm'>

        <Form action="http://localhost:8080/reserve" method="post">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
              type="email" 
              placeholder="Enter email" 
              name='email' 
              required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
              type="password" 
              placeholder="Password" 
              name='password'
              required />
            </Form.Group>
          </Row>
          <p className='text-center'> New Customer?{" "}
            <Link to={"/create"}> Register Now!</Link>
          </p>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Date Request</Form.Label>
              <Form.Control 
              type='date'
              name='date'
              required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Reservation Address</Form.Label>
              <Form.Control 
              type='text' 
              placeholder="1234 Main St" 
              name='address'
              required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Apartment, suite, floor</Form.Label>
              <Form.Control 
              type='text' 
              placeholder="Apt #1 , suite 2, floor 3" 
              name='apt' />
            </Form.Group>

          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control 
              type='text' 
              placeholder='Omaha' 
              name='city'
              required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose..." name='state' required>
                <option>NE</option>
                <option>IA</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control 
              type='text' 
              placeholder='68111' 
              name='zip' 
              required />
            </Form.Group>

          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    </section>
  )
}

export default Reserve