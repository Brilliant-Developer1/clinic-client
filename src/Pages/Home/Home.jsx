import React from 'react';
import Header from './Header/Header';
import Info from './Info';
import MakeAnAppointment from './MakeAnAppointment/MakeAnAppointment';
import Services from './Services/Services';

const Home = () => {
  return (
    <div>
      <Header />
      <Info />
      <Services />
      <MakeAnAppointment />
    </div>
  );
};

export default Home;
