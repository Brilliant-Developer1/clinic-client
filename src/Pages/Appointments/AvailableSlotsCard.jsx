import React from 'react';

const AvailableSlotsCard = ({ cardTitle, time }) => {
  return (
    <div className="card drop-shadow-md hover:drop-shadow-xl bg-base-100 shadow-md pt-2 pb-2 pr-0 lg:pr-12 xl:pr-28 pl-0 lg:pl-12 xl:pl-28">
      <div className="pt-5 pb-5 md:pb-5 lg:pr-0 pr-2 lg:pl-0 pl-2 ">
        <div className="card-actions flex flex-col items-center">
          <h2 className="card-title text-primary">{cardTitle}</h2>
          <p className="text-black">{time}</p>
          <div className="mt-5 lg:mt-10 mb-0 lg:mb-5">
            <button
              type="button"
              className="btn border-none bg-gradient-to-r from-primary to-accent text-base-100 hover:text-black hover:bg-gradient-to-bl shadow-lg hover:shadow-md 
             "
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableSlotsCard;
