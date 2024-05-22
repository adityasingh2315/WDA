import React, { useState } from 'react';
import { signUp } from "./components/services/user_service";
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("object");

    const response = await fetch('http://localhost:9090/', {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    if (!response.ok) {
      setError("User already Exists");
      console.log(error);
    }
    if (response.ok) {
      setFormData({ email: '', password: '' });
      setError('');
      console.log('User created', json);
      navigate('/login');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: 'url(https://www.desktopbackground.org/download/1440x900/2013/04/17/562362_high-quality-hd-latest-hd-wallpaper-hd-hd-wallpapers-n_2560x1600_h.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {error ? <div style={{ color: 'red' }}>{error}</div> : null}

      <form style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px',
        borderRadius: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
        border: '4px solid black',
        transition: 'transform 0.2s ease-in-out',
      }} onSubmit={handleSubmit}>
        <p style={{
          display: 'inline',
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: 'white'
        }}>Sign Up</p>
        <input
          type="text"
          name="name"
          placeholder="Username"
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '15px',
            margin: '10px 0',
            borderRadius: '10px',
            border: '2px solid black',
            outline: 'none',
            transition: 'border 0.3s ease-in-out',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white'
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '15px',
            margin: '10px 0',
            borderRadius: '10px',
            border: '2px solid black',
            outline: 'none',
            transition: 'border 0.3s ease-in-out',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white'
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '15px',
            margin: '10px 0',
            borderRadius: '10px',
            border: '2px solid black',
            outline: 'none',
            transition: 'border 0.3s ease-in-out',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white'
          }}
        />
        <button style={{
          width: '100%',
          padding: '15px',
          marginTop: '10px',
          borderRadius: '10px',
          border: '2px solid black',
          backgroundColor: 'darkblue',
          color: 'white',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease-in-out'
        }}>Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
