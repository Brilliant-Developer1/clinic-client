import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import chair from '../../assets/images/chair.png';
import 'react-calendar/dist/Calendar.css';
import './AppointmentsHeader.css';

const AppointmentsHeader = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="container mx-auto hero min-h-screen header-section items-start lg:items-center">
      <div className="hero-content  flex-col lg:flex-row-reverse w-full justify-around">
        <div style={{ maxWidth: '541px' }}>
          <img
            src={chair}
            className=" rounded-lg shadow-2xl"
            alt="chairImage"
          />
        </div>
        <div className="mt-10 lg:mt-0 flex justify-center">
          <Calendar
            className="rounded-2xl shadow-xl"
            onChange={onChange}
            value={value}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentsHeader;
