
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import { useNavigate } from "react-router-dom"; 
import { VscAccount} from "react-icons/vsc";

const Header = () => {

  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const search = () => {
    term ? navigate('/search/' + term) : navigate('/');
  };
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">
            <h1>Virtual Try-On</h1>
          </Link>
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        
    <div className="container-input">
      <input
        type="text"
        placeholder="Search"
        name="text"
        className="input"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyUp={(e) => e.key === 'Enter' && search()}
      />
      <svg
        fill="#000000"
        width="20px"
        height="20px"
        viewBox="0 0 1920 1920"
        onClick={search}
        style={{ cursor: 'pointer' }}
      >
        <path
          d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
          fillRule="evenodd"
        ></path>
      </svg>
    </div>

    <div className="group-5">
      <VscAccount className='prof' onClick={handleLoginClick}>
      </VscAccount>
    </div>
      </div>
    </header>
  );
};

export default Header;
