


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './login.css'
import {Link,useNavigate} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import { handleError, handleSuccess } from '../utils';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => setIsSignUp(!isSignUp);
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
})

const navigate = useNavigate();

const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
}

const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
        return handleError('email and password are required')
    }
    try {
        const url = `http://localhost:8080/auth/login`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        });
        const result = await response.json();
        const { success, message, jwtToken, username, error } = result;
        if (success) {
            handleSuccess(message);
            localStorage.setItem('token', jwtToken);
            localStorage.setItem('loggedInUser', username);
            
            
            setTimeout(() => {
                navigate('/welcome')
            }, 1000)
        } else if (error) {
            const details = error?.details[0].message;
            handleError(details);
        } else if (!success) {
            handleError(message);
        }
        console.log(result);
    } catch (err) {
        handleError(err);
    }
}

  return (
    <div className="center-wrapper">
    <div className={`auth-container ${isSignUp ? 'active' : ''}`} id="auth-container">
      <div className="signup-section">
        
      </div>

      <div className="signin-section">
        <form className="auth-form" onSubmit={handleLogin}>
          <h1>Log In</h1>
          <div className="icon-links">
            <a href="#" className="icon-link">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </div>
          <span>or use email for password</span>
          <input onChange={handleChange} type="text" placeholder="Enter the Email" name ="email"className="auth-input" value={loginInfo.email} />
          <input onChange={handleChange} type="password" placeholder="Enter the Password"  name ="password"className="auth-input" value={loginInfo.password} />
          <a href="#">Forgot password?</a>
          <button>Log In</button>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle-panel">
          <div className="panel-message message-right">
            <h1>Hello, User!</h1>
            <p>If you don't have an account</p>
            <button className="transparent" ><Link  style={{color:'white'}}to="/signin">Sign Up</Link></button>
            
          </div>
        </div>
      </div>
    </div>
    <ToastContainer/>
    </div>
  );
};

export default Login;

