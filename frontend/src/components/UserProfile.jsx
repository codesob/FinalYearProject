import React from 'react';
import { Link } from 'react-router-dom';
import './userprofile.css';


const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return (
      <div>
        You are not logged in. Please <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>.
      </div>
    );
  }

  return (
    <section className='user-profile'>
      <div className='user-profile-box'>
        <div className='user-profile-value'>
          <h2>User Profile</h2>
          {user.photo && (
            <img src={user.photo} alt="Profile" />
          )}
          <div className='user-profile-input-box'>
            <ion-icon name="person-outline"></ion-icon>
            <p>Name: {user.name}</p>
          </div>
          <div className='user-profile-input-box'>
            <ion-icon name="calendar-outline"></ion-icon>
            <p>Age: {user.age}</p>
          </div>
          <div className='user-profile-input-box'>
            <ion-icon name="transgender-outline"></ion-icon>
            <p>Gender: {user.gender}</p>
          </div>
          <div className='user-profile-input-box'>
            <ion-icon name="mail-outline"></ion-icon>
            <p>Email: {user.email}</p>
          </div>
          <div className='user-profile-input-box'>
            <ion-icon name="call-outline"></ion-icon>
            <p>Phone Number: {user.phoneNumber}</p>
          </div>
          <div className='user-profile-input-box'>
            <ion-icon name="location-outline"></ion-icon>
            <p>Address: {user.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
