import React from 'react';

const InfoCard = ({ img, cardTitle, cardText, background }) => {
  return (
    <div
      className={`card lg:card-side  shadow-xl ${background} pl-0 lg:pl-5 pt-5 lg:pt-2 pb-2 `}
    >
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="p-5">
        <div className="card-actions flex flex-col  text-white">
          <h2 className="card-title text-left">{cardTitle}</h2>
          <p>{cardText}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
