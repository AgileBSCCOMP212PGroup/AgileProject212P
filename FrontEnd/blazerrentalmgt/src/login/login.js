import React, { useState } from 'react';
import './login.css';
import Header2 from '../components/header/header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    // Password validation
    if (e.target.value.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission or login logic
    // For now, just printing the email and password values
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <Header2 />
      <div className="container border p-4 mt-5 bg-light col-4 rounded custom-background">
        <div className="text-center fw-bold fs-1 text-primary">User Login</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-secondary">
              Email address
            </label>
            <input
              type="email"
              className={`form-control ${emailError ? 'is-invalid' : ''}`}
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <div className="invalid-feedback">{emailError}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-secondary">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${passwordError ? 'is-invalid' : ''}`}
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && <div className="invalid-feedback">{passwordError}</div>}
          </div>
          <button type="submit" className="btn btn-dark justify-content-center">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
