import React from 'react';

const TestimonialCard = ({ comment }) => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100  shadow-2xl">
        <div className="card-body">
          <p>{comment.cardText}</p>

          <div className="card-actions justify-start items-center mt-5">
            <div className="avatar">
              <div className="w-16 lg:w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={comment.img} alt="peopleImage" />
              </div>
            </div>
            <div className="p-2">
              <h2 className="card-title">{comment.cardName}</h2>
              <p className="">{comment.company}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
