import React from 'react';

import '../Home/Header/Header.css';
import AppointmentsHeader from './AppointmentsHeader';
import AvailableServices from './AvailableServices';

const Appointments = () => {
  return (
    <div>
      <AppointmentsHeader />
      <AvailableServices />
    </div>
  );
};

export default Appointments;
