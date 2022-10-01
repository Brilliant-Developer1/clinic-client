import React from 'react';

const AvailableServicesCard = ({ cardTitle }) => {
  return (
    <div className="card drop-shadow-md hover:drop-shadow-xl bg-base-100 shadow-md pt-2 pb-2 pr-0 lg:pr-28 pl-0 lg:pl-28">
      <div className="pt-5 pb-5 md:pb-5 lg:pr-0 pr-2 lg:pl-0 pl-2 ">
        <div className="card-actions flex flex-col items-center">
          <h2 className="card-title text-primary">{cardTitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default AvailableServicesCard;
