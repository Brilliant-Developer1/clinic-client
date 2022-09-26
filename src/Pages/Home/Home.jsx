import React from 'react';
import ContactUs from './ContactUs/ContactUs';
import Header from './Header/Header';
import Info from './Info';
import MakeAnAppointment from './MakeAnAppointment/MakeAnAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Header />
      <Info />
      <Services />
      <MakeAnAppointment />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default Home;
