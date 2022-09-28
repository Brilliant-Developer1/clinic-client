import React from 'react';
import footerImage from '../../../assets/images/footer.png';

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${footerImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 440,
        width: '100%',
      }}
    >
      <div className="container mx-auto">
        <footer className="footer p-10   lg:justify-items-center">
          <div className="">
            <span className="footer-title ">Services</span>
            <a className="link link-hover">Emergency Checkup</a>
            <a className="link link-hover">Monthly Checkup</a>
            <a className="link link-hover">Weekly Checkup</a>
            <a className="link link-hover">Deep Checkup</a>
          </div>
          <div>
            <span className="footer-title">ORAL HEALTH</span>
            <a className="link link-hover">Fluoride Treatment</a>
            <a className="link link-hover">Cavity Filling</a>
            <a className="link link-hover">Teath Whitening</a>
          </div>
          <div>
            <span className="footer-title">OUR ADDRESS</span>
            <a className="link link-hover">Motijheel Dhaka-1230</a>
          </div>
        </footer>
        <div className="flex justify-end mr-4 lg:mr-0">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
            className="btn w-16 border-none bg-gradient-to-r from-primary to-accent text-base-100 hover:text-black hover:bg-gradient-to-bl shadow-lg hover:shadow-md "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              />
            </svg>
          </button>
        </div>
        <div>
          <p className="text-center p-5 mt-2 lg:mt-24  mb-5">
            Copyright © 2022 - All right reserved by Union Industries Ltd
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
