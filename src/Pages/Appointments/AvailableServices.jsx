import React from 'react';
import AvailableServicesCard from './AvailableServicesCard';

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
          Available slots Teeth Orthodontics.
        </h2>
      </div>
    </div>
  );
};
export default AvailableServices;
