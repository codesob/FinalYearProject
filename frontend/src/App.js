import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Shop from './pages/shop/Shop';
import UserProfile from './components/UserProfile';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
