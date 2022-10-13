import React from 'react';
import chair from '../../../assets/images/chair.png';
import MainButton from '../../Components/MainButton/MainButton';
import './Header.css';

const Header = () => {
  return (
    <div className="container mx-auto hero min-h-screen header-section items-start lg:items-center">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <div style={{ maxWidth: '541px' }}>
          <img
            src={chair}
            className=" rounded-lg shadow-2xl"
            alt="chairImage"
          />
        </div>
        <div className="mt-10 lg:mt-0">
          <h1 className="text-4xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <MainButton>Get Started</MainButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
