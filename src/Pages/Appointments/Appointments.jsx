import React from 'react';
import Footer from '../Components/Footer/Footer';

import '../Home/Header/Header.css';
import AppointmentsHeader from './AppointmentsHeader';
import AvailableServices from './AvailableServices';

const Appointments = () => {
  return (
    <div>
      <AppointmentsHeader />
      <AvailableServices />
      <Footer />
    </div>
  );
};

export default Appointments;
