import React from 'react';

const TestimonialCard = ({ img, cardText, cardName, company }) => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100  shadow-2xl">
        <div className="card-body">
          <p>{cardText}</p>

          <div className="card-actions justify-start items-center mt-5">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt="peopleImage" />
              </div>
            </div>
            <div className="p-2">
              <h2 className="card-title">{cardName}</h2>
              <p className="">{company}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
