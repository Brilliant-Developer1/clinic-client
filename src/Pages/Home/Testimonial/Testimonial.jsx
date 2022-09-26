import React from 'react';
import TestimonialCard from './TestimonialCard';
import './Testimonial.css';
import testimonialImage from '../../../assets/images/testimonial.png';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';

const Testimonial = () => {
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
        <TestimonialCard
          cardName="Al Mofee"
          company="MN Digital"
          cardText="It is a long established fact that by the readable content of a lot
        layout. The point of using Lorem a more-or-less normal distribu to
        using Content here, content"
          img={people1}
        />
        <TestimonialCard
          cardName="Alexa"
          company="Brilliant-Developer"
          cardText="It is a long established fact that by the readable content of a lot
        layout. The point of using Lorem a more-or-less normal distribu to
        using Content here, content"
          img={people2}
        />
        <TestimonialCard
          cardName="Ruby Rai"
          company="Apple"
          cardText="It is a long established fact that by the readable content of a lot
        layout. The point of using Lorem a more-or-less normal distribu to
        using Content here, content"
          img={people3}
        />
      </div>
    </div>
  );
};

export default Testimonial;
