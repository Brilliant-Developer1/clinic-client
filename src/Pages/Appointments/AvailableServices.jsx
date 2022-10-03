import React from 'react';
import AvailableServicesCard from './AvailableServicesCard';
import AvailableSlotsCard from './AvailableSlotsCard';

const AvailableServices = () => {
  return (
    <div className="container mx-auto flex justify-center flex-col items-center mt-16 lg:mt-28">
      <div>
        <h2 className=" text-center text-xl text-primary">
          Available Services on April 30, 2022
        </h2>
        <p className=" text-center text-slate-400  ">
          Please select a service.
        </p>
        <div className="p-2 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:max-w-screen-xl md:max-w-screen-sm mt-5">
          <AvailableServicesCard cardTitle="Teeth Orthodontics" />
          <AvailableServicesCard cardTitle="Cosmetic Dentistry" />
          <AvailableServicesCard cardTitle="Teeth Cleaning" />
          <AvailableServicesCard cardTitle="Teeth Orthodontics" />
          <AvailableServicesCard cardTitle="Cosmetic Dentistry" />
          <AvailableServicesCard cardTitle="Teeth Cleaning" />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-primary text-xl">
          <div>
            <h2 className=" text-center text-xl text-primary">
              Available slots for Teeth Orthodontics.
            </h2>

            <div className="p-2 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:max-w-screen-xl md:max-w-screen-sm mt-5">
              <AvailableSlotsCard
                cardTitle="Teeth Orthodontics"
                time="8:00 AM - 9:00 AM"
              />
              <AvailableSlotsCard
                cardTitle="Cosmetic Dentistry"
                time="9:00 AM - 10:00 AM"
              />
              <AvailableSlotsCard
                cardTitle="Teeth Cleaning"
                time="11:00 AM - 12:00 AM"
              />
              <AvailableSlotsCard
                cardTitle="Teeth Orthodontics"
                time="5:00 PM - 6:00 PM"
              />
              <AvailableSlotsCard
                cardTitle="Cosmetic Dentistry"
                time="7:00 PM - 8:00 PM"
              />
            </div>
          </div>
        </h2>
      </div>
    </div>
  );
};
export default AvailableServices;
