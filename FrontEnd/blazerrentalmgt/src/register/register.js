import React, { useState } from 'react';
import Header2 from '../components/header/header';
import './register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(newEmail)) {
      setEmailError('');
    } else {
      setEmailError('Please enter a valid email address.');
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password and confirm password match
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      return;
    }

    // Form submission logic here
    // Submit the form or perform any other actions
  };

  return (
    <>
      <Header2 />
      <div className="container border p-4 mt-5 bg-light col-4 rounded custom-background">
        <div className="text-center fw-bold fs-1 text-primary">User Register</div>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-secondary">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          {/* Email Address */}
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
              required
            />
            {emailError && <div className="invalid-feedback">{emailError}</div>}
          </div>
          {/* Password */}
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
              minLength="8"
              required
            />
            {passwordError && <div className="invalid-feedback">{passwordError}</div>}
          </div>
          {/* Confirm Password */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label text-secondary">
              Confirm Password
            </label>
            <input
              type="password"
              className={`form-control ${password !== confirmPassword
                ? 'is-invalid'
                : ''}`}
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              {password !== confirmPassword && (
                <div className="invalid-feedback">Passwords do not match.</div>
              )}
            </div>
            <button type="submit" className="btn btn-dark justify-content-center">
              Register
            </button>
          </form>
        </div>
      </>
    );
  }
  
  export default Register;
  
