import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import ServicesCard from './ServicesCard';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import MainButton from '../../Components/MainButton/MainButton';

const Services = () => {
  const services = [
    {
      _id: 1,
      cardTitle: 'Fluoride Treatment',
      cardText:
        'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: fluoride,
    },
    {
      _id: 2,
      cardTitle: 'Cavity Filling',
      cardText:
        'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: cavity,
    },
    {
      _id: 3,
      cardTitle: 'Teeth Whitening',
      cardText:
        'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: whitening,
    },
  ];
  return (
    <section className="container mx-auto flex justify-center flex-col items-center mt-16 lg:mt-28">
      <div>
        <h2 className=" text-center text-xl font-bold text-primary">
          OUR SERVICES
        </h2>
        <h4 className=" text-center text-3xl  ">Services We Provide</h4>
        <div className="p-2 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:max-w-screen-xl md:max-w-screen-sm">
          {services.map(service => (
            <ServicesCard key={service._id} service={service}></ServicesCard>
          ))}
        </div>
      </div>

      <div className=" hero min-h-screen lg:max-w-screen-lg mt-6 lg:mt-0">
        <div className="hero-content  flex-col lg:flex-row">
          <div style={{ maxWidth: '458px' }}>
            <img
              src={treatment}
              className=" rounded-lg shadow-2xl"
              alt="treatmentImage"
            />
          </div>
          <div style={{ maxWidth: '515px' }} className="p-0 lg:p-8">
            <h1 className="text-3xl lg:text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <MainButton>Get Started</MainButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
