import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const MyForm = (props) => {

  console.log(props);

  const [name, setName] = useState();
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate name and email
    let isValid = true;

    if (name.trim() === '') {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (email.trim() === '') {
      setEmailError('Email is required');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (isValid) {
      // Perform form submission logic
      /// API call and navigate to some other component upon successful login

      try {
        const response = await fetch('http://localhost:3000/posts', {
          method: 'POST',
          headers: {
            observe: 'response',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: name,
            description: email,
          }),
        });
        console.log("ooo", response)
        if (!response.ok) {
          throw new Error('API request failed');
        }

        const data = await response.json();
        console.log('API response:', data);
        console.log('Form submitted');
      } catch (error) {
        console.error('API error:', error);
      }
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation regex pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  return (
    <div className="container">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${nameError ? 'is-invalid' : ''}`}
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <div className="invalid-feedback">{nameError}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${emailError ? 'is-invalid' : ''}`}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="invalid-feedback">{emailError}</div>}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;