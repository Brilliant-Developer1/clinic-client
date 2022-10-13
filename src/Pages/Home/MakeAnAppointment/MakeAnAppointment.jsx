import React from 'react';
import './MakeAnAppointment.css';
import doctorSmall from '../../../assets/images/doctor-small.png';
import MainButton from '../../Components/MainButton/MainButton';

const MakeAnAppointment = () => {
  return (
    <section className="makeAnAppointment-section flex justify-center  items-center mt-24 lg:mt-36">
      <div className=" hero mx-auto flex justify-center  items-center ">
        <div className="hero-content  flex-col lg:flex-row items-center">
          <div
            className="hidden lg:block"
            style={{
              maxWidth: '606px',
              marginTop: '-86px',
            }}
          >
            <img src={doctorSmall} className=" rounded-lg " alt="doctorImage" />
          </div>
          <div
            style={{ maxWidth: '515px', maxHeight: '576px' }}
            className="p-0 lg:p-8 text-base-100"
          >
            <h1 className="  text-xl font-bold text-primary">APPOINTMENT</h1>
            <h1 className="text-3xl ">Make an appointment Today</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <MainButton>Make Appointment</MainButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAnAppointment;
