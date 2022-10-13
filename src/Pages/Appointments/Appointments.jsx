import React, { useState } from 'react';
import Footer from '../Components/Footer/Footer';

import '../Home/Header/Header.css';
import AppointmentsHeader from './AppointmentsHeader';
import AvailableServices from './AvailableServices';

const Appointments = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentsHeader date={date} setDate={setDate} />
      <AvailableServices date={date} />
      <Footer />
    </div>
  );
};

export default Appointments;
