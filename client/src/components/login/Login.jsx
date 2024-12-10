import React from 'react'
import Navbar from '../nav/Navbar';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {

  return (
    <section>
      <Navbar />
      <section>
        <section class="back">
        </section>
        <form action="http://localhost:3000/signedin" class="login">
          <h1>Login</h1>
          <label for="email"><b>Email</b></label>
          <input
            id="email"
            type="text"
            placeholder="Enter Email"
            name="email"
            required
          />
          <label for="psw"><b>Password</b></label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <button type="submit" class="btn">Login</button>
          <p> New Customer?{" "}
            <Link to={"/create"}> Register </Link>
          </p>
        </form>
      </section>
    </section>
  )
}

export default Login