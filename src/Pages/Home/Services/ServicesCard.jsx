import React from 'react';

const ServicesCard = ({ service }) => {
  return (
    <div className="card drop-shadow-md hover:drop-shadow-xl bg-base-100 shadow-xl pt-10 pb-5 md:pb-2 lg:pr-8 pr-2 lg:pl-8 pl-2">
      <figure>
        <img src={service.img} alt="Album" />
      </figure>
      <div className="pt-5 pb-5 md:pb-5 lg:pr-0 pr-2 lg:pl-0 pl-2 ">
        <div className="card-actions flex flex-col items-center">
          <h2 className="card-title ">{service.cardTitle}</h2>
          <p className="text-center">{service.cardText}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
