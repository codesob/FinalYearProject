import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.config.css'; // You can keep your custom CSS

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      navigate('/home');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
   <section className="login">
    <div className="form-box">
      <div className='form-value'>
        <form action=''>
          <h2>Login</h2>
          <div className='inputbox'>
            <ion-icon name="mail-outline"></ion-icon>
            <input type="email" required placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Username</label>
          </div>
          <div className='inputbox'>
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label>Password</label>
          </div>
          <div className='forget'>
            <Link to="/forgot-password">Forgot password?</Link>

          </div>
          <button onClick={handleLogin}>Login</button>
          <div className='register'>
            <p>Don't have an account?</p>
            <Link to="/signup">Register</Link>
          </div>

        </form>
      </div>
      </div>
   </section>
  );
};

export default Login;
