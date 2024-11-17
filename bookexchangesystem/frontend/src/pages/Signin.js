import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './login.css';
import {Link, useNavigate} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';

const Signin = () => {
  const [isSignUp, setIsSignUp] = useState(true); // Set to true to show "Sign Up" by default

  const toggleSignUp = () => setIsSignUp(!isSignUp);

  const [signupInfo, setSignupInfo] = useState({
    username: '',
    email: '',
    phone:'',
    location:'',
    password: ''
})

const navigate = useNavigate();
const handleChange = (e) => {
    const { name, value } = e.target;
    //console.log(name, value);
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
}
    //console.log('info',signupInfo);
const handleSignup = async (e) => {
    e.preventDefault();
    const { username,email,phone,location,password } = signupInfo;
    if (!username || !email || !phone || !location || !password) {
        return handleError('All the Feilds are required')
    }
    try {
      const url = `http://localhost:8080/auth/signin`;
      const response = await fetch(url, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(signupInfo)
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
          handleSuccess(message);
          setTimeout(() => {
              navigate('/login')
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
        <form className="auth-form" onSubmit={handleSignup}>
          <h1>Create Account</h1>
          <div className="icon-links">
            <a href="#" className="icon-link">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </div>
          <span>or use email for registration</span>
          <input onChange={handleChange} type="text" placeholder="Enter the Name" name ="username"className="auth-input" value={signupInfo.username} />
          <input onChange={handleChange} type="text" placeholder="Enter the Email" name ="email"className="auth-input"value={signupInfo.email}  />
          <input onChange={handleChange} type="text" placeholder=" Enter the Phone" name ="phone"className="auth-input"value={signupInfo.phone}  />
          <input onChange={handleChange} type="text" placeholder="Enter the Location" name ="location"className="auth-input"value={signupInfo.location}  />
          <input onChange={handleChange} type="password" placeholder="Enter the Password"  name ="password"className="auth-input"value={signupInfo.password}  />
          <button>Sign Up</button>
        </form>
      </div>

      <div className="signin-section">
        
      </div>

      <div className="toggle-container">
        <div className="toggle-panel">
          <div className="panel-message message-left">
            <h1>Welcome User!</h1>
            <p>If you already have an account</p>
            <button className="transparent" ><Link  style={{color:'white'}}to="/login">Log In</Link></button>
          </div>
          
        </div>
      </div>
    </div>
    <ToastContainer/>
    </div>
  );
};

export default Signin;
