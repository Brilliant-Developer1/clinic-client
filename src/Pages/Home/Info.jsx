import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
  return (
    <div className="p-2 container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 lg:max-w-screen-lg md:max-w-screen-sm">
      <InfoCard
        cardTitle="Opening Hours"
        cardText="Mon to Sat - 9 AM to 11 PM"
        img={clock}
        background="bg-gradient-to-r from-primary to-accent"
      />
      <InfoCard
        cardTitle="Visit our location"
        cardText="Savannah, GA. 31856"
        img={marker}
        background="bg-gray-700"
      />
      <InfoCard
        cardTitle="Contact us now"
        cardText={<a href="tel:(912) 897-3964">(912) 897-3964</a>}
        img={phone}
        background="bg-gradient-to-r from-primary to-accent"
      />
    </div>
  );
};

export default Info;
