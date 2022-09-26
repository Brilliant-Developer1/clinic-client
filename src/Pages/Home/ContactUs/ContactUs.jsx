import React from 'react';
import './ContactUs.css';

import background from '../../../assets/images/appointment.png';

const ContactUs = () => {
  return (
    <div
      className="contactUs-section mx-auto flex justify-center  items-center mt-24 lg:mt-28"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 500,
        width: '100%',
      }}
    >
      <div className=" text-base-100">
        <h1 className=" text-center  text-xl font-bold text-primary">
          CONTACT US
        </h1>
        <h1 className="text-3xl text-center">Stay Connected with us</h1>
        <div className="flex flex-col items-center">
          <div className="flex flex-col w-full">
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered input-accent text-black mt-10 inputs"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered input-accent  text-black mt-5 inputs"
            />
            <textarea
              className="textarea textarea-accent mt-5 inputs h-32"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="button"
            className="btn w-32 border-none bg-gradient-to-r from-primary to-accent text-base-100 hover:text-black hover:bg-gradient-to-bl shadow-lg hover:shadow-md mt-8
   "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
