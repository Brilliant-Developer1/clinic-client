import React, { useEffect, useState } from 'react';
import AvailableServicesCard from './AvailableServicesCard';
import AvailableSlotsCard from './AvailableSlotsCard';
import { format } from 'date-fns';

const AvailableServices = ({ date }) => {
  const [availableservices, setavailableservices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setavailableservices(data));
  }, []);

  const services = [
    {
      _id: 1,
      cardTitle: 'Teeth Orthodontics',
    },
    {
      _id: 2,
      cardTitle: 'Cosmetic Dentistry',
    },
    { _id: 3, cardTitle: 'Teeth Cleaning' },
    { _id: 4, cardTitle: 'Teeth Orthodontics' },
    { _id: 5, cardTitle: 'Cosmetic Dentistry' },
    { _id: 6, cardTitle: 'Teeth Cleaning' },
  ];
  const availableslots = [
    {
      _id: 1,
      cardTitle: 'Teeth Orthodontics',
      time: '8:00 AM - 9:00 AM',
    },
    {
      _id: 2,
      cardTitle: 'Cosmetic Dentistry',
      time: '9:00 AM - 10:00 AM',
    },
    {
      _id: 3,
      cardTitle: 'Teeth Cleaning',
      time: '11:00 AM - 12:00 AM',
    },
    {
      _id: 4,
      cardTitle: 'Teeth Orthodontics',
      time: '5:00 PM - 6:00 PM',
    },
    {
      _id: 5,
      cardTitle: 'Cosmetic Dentistry',
      time: '7:00 PM - 8:00 PM',
    },
  ];
  return (
    <section className="container mx-auto flex justify-center flex-col items-center mt-16 lg:mt-28">
      <div>
        <h2 className=" text-center text-xl text-primary">
          Available Services on {format(date, 'PP')}
        </h2>
        <p className=" text-center text-slate-400  ">
          Please select a service.
        </p>
        <div className="p-2 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:max-w-screen-xl md:max-w-screen-sm mt-5">
          {services.map(service => (
            <AvailableServicesCard
              key={service._id}
              service={service}
            ></AvailableServicesCard>
          ))}
        </div>
      </div>

      <div className="mt-16 mb-16">
        <div className="text-primary text-xl">
          <div>
            <h2 className=" text-center text-xl text-primary">
              Available slots for Teeth Orthodontics.
            </h2>

            <div className="p-2 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:max-w-screen-xl md:max-w-screen-sm mt-5">
              {availableservices.map(availableservice => (
                <AvailableSlotsCard
                  key={availableservice._id}
                  availableservice={availableservice}
                  date={date}
                ></AvailableSlotsCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AvailableServices;
