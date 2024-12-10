import React from 'react'
import { useNavigate } from 'react-router-dom';
import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsCart4 } from "react-icons/bs";
import { BsQrCodeScan } from "react-icons/bs";

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <section className='navBar'>
            <nav className='gate'>
                <Navbar.Brand href="/">Fresh Out The Gate</Navbar.Brand>
                <section>
                    <button onClick={() => navigate("/cart")} className='cartBtn'><BsCart4 className='cart'/></button>
                    <button className='codeBtn' onClick={() => navigate("/comingsoon")}><BsQrCodeScan className='code' /></button>
                </section>
            </nav>
            <Navbar expand="md" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand />
                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href='/menu'>Menu</Nav.Link>
                            <Nav.Link onClick={() => navigate("/shop")}>Order Now</Nav.Link>
                            <Nav.Link href="/schedule">Truck Schedule</Nav.Link>
                            <Nav.Link href="/reserve"> Book a Reservation</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/photos">Photos</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/create">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>

    )
}

export default NavBar;