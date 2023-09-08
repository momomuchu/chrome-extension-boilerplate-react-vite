import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };
  
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '400px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    textAlign: 'center', // Center the content horizontally within the form
  };
  
  const inputGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '10px',
    width: '80%',
  };
  
  const labelStyle = {
    fontWeight: 'bold',
    marginBottom: '5px',
  };
  
  const inputStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    width: '100%',
  };
  
  const buttonStyle = {
    padding: '10px',
    width: '80%',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your authentication logic here
    // For this example, let's just log the inputs
    console.log('Username:', username);
    console.log('Password:', password);

  };

  return (
    <div style={containerStyle}>
      <h2>Welcome to SideGuide</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div style={inputGroupStyle}>
          <label style={labelStyle} htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </div>
      </form>
      <Link to="/home">Home</Link>
      <Footer/>
    </div>
  );
};

export default Login;
