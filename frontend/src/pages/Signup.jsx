import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.config.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = () => {

    const user = { name, age, gender, email, phoneNumber, address, photo };
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/profile');
  };

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
  };

  return (
    <section className='sign'>
      <div className="signup-form-box">
        <div className='signup-form-value'>
          <form action=''>
            <h2>Sign Up</h2>
            <div className='signup-input-box'>
              <ion-icon name="person-outline"></ion-icon>
              <input type="text" required placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <label>Name</label>
            </div>
            <div className='signup-input-box'>
              <ion-icon name="calendar-outline"></ion-icon>
              <input
                type="number"
                required
                placeholder="Age"
                value={age}
                onChange={(e) => {
                  const newAge = parseInt(e.target.value, 10);
                  if (!isNaN(newAge) && newAge >= 1) {
                    setAge(newAge);
                  } else {
                    setAge(1);
                  }
                }}
              />
              <label>Age</label>
            </div>
            <div className='signup-input-box'>
              <ion-icon name="transgender-outline"></ion-icon>
              <input type="text" required placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
              <label>Gender</label>
            </div>
            <div className='signup-input-box'>
              <ion-icon name="mail-outline"></ion-icon>
              <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <label>Email</label>
            </div>
            <div className='signup-input-box'>
              <ion-icon name="call-outline"></ion-icon>
              <input type="tel" required placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
              <label>Phone Number</label>
            </div>
            <div className='signup-input-box'>
              <ion-icon name="location-outline"></ion-icon>
              <input type="text" required placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
              <label>Address</label>
            </div>

            {/* Custom file input */}
            <div className="signup-label-upload">
              <label htmlFor="signup-photo-input">Choose Photo</label>
              <input type="file" accept="image/*" id="signup-photo-input" onChange={handlePhotoChange} />
              <div className="signup-file-name">{photo ? photo.name : 'No file selected'}</div>
            </div>

            <button onClick={handleSignUp}>Sign Up</button>
            <div className='signup-register'>
              <p>Already have an account?</p>
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
