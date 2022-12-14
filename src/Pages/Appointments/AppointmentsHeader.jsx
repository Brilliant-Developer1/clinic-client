import React from 'react';
import chair from '../../assets/images/chair.png';
import './AppointmentsHeader.css';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentsHeader = ({ date, setDate }) => {
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
        <div className="mt-10 lg:mt-0 flex justify-center flex-col items-center">
          <DayPicker
            className="rounded-2xl shadow-xl p-5 bg-white"
            mode="single"
            selected={date}
            onSelect={setDate}
            showOutsideDays
            fixedWeeks
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentsHeader;
