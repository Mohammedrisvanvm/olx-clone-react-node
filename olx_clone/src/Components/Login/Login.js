import React from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { useNavigate } from 'react-router';

function Login() {
  const Navigate=useNavigate()
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <p onClick={()=>Navigate('/signUp')}>Signup</p>
      </div>
    </div>
  );
}

export default Login;
