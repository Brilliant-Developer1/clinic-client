import React from 'react';
import './ContactUs.css';

import background from '../../../assets/images/appointment.png';
import MainButton from '../../Components/MainButton/MainButton';

const ContactUs = () => {
  return (
    <div
      className="contactUs-section mx-auto flex justify-center  items-center mt-24 lg:mt-28"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: 550,
        width: '100%',
      }}
    >
      <div className="mt-12">
        <h1 className=" text-center  text-xl font-bold text-primary">
          CONTACT US
        </h1>
        <h1 className="text-3xl text-center text-base-100">
          Stay Connected with us
        </h1>
        <div className="flex flex-col items-center">
          <div className="flex flex-col w-full">
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered input-accent  mt-10 inputs"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered input-accent   mt-5 inputs"
            />
            <textarea
              className="textarea textarea-accent mt-5 inputs h-32"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="mt-8 mb-5">
            <MainButton>&nbsp; &nbsp; Submit &nbsp; &nbsp;</MainButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
