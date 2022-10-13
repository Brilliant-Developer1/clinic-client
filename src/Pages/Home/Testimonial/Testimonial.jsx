import React from 'react';
import TestimonialCard from './TestimonialCard';
import './Testimonial.css';
import testimonialImage from '../../../assets/images/testimonial.png';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';

const Testimonial = () => {
  const comments = [
    {
      _id: 1,
      cardName: 'Al Mofee',
      company: 'Bangladesh',
      cardText:
        'Dr. Smith is an excellent doctor, I would highly recommend him to anyone. He takes time to answer all your questions, and he always makes sure you understand what is going on and what your options are.',
      img: people1,
    },
    {
      _id: 2,
      cardName: 'Alisson',
      company: 'Canada',
      cardText:
        'I was feeling a little under the weather, so I made an appointment with my doctor. I was a little nervous, but they did everything they could to put me at ease and make the experience as comfortable as possible.',
      img: people2,
    },
    {
      _id: 3,
      cardName: 'Shaylee',
      company: 'USA',
      cardText:
        ' have been seeing Dr. Ismail for over 3 years and would not see anyone else. I have been to multiple doctors and no one has had the knowledge and treatment skills that Dr. Ismail has. She is the absolute best!',
      img: people3,
    },
  ];
  return (
    <div className=" container mx-auto mt-20 testimonial-section">
      <div className="pl-4 flex  justify-between">
        <div>
          <h2 className=" text-start text-xl font-bold text-primary">
            TESTIMONIAL
          </h2>
          <h4 className=" text-start text-3xl  ">
            What Our <span className="block lg:inline">Patients Says</span>
          </h4>
        </div>
        <div className="w-32 md:w-40 lg:w-auto pr-2 lg:pr-0">
          <img src={testimonialImage} alt="testimonialImage" />
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-7 justify-items-center mt-20 lg:mt-24 p-4 lg:p-0">
        {comments.map(comment => (
          <TestimonialCard
            key={comment._id}
            comment={comment}
          ></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
