import React from 'react';
import chair from '../../../assets/images/chair.png';
import './Header.css';

const Header = () => {
  return (
    <div className="container mx-auto hero min-h-screen header-section">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <div style={{ maxWidth: '541px' }}>
          <img
            src={chair}
            className=" rounded-lg shadow-2xl"
            alt="chairImage"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button
            type="button"
            className="btn border-none bg-gradient-to-r from-primary to-accent text-base-100 hover:text-black hover:bg-gradient-to-bl shadow-lg hover:shadow-md 
             "
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
