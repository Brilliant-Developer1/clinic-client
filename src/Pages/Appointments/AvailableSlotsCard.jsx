import React, { useState } from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AvailableSlotsCard = ({ availableservice, date }) => {
  const [user] = useAuthState(auth);
  const { name, slots } = availableservice;
  const [treatment, setTreatment] = useState(null);
  const handleBooking = event => {
    
    event.preventDefault();
    //const slot = event.target.slot.value;

    setTreatment(null);
  };
  return (
    <div>
      <div className="card drop-shadow-md hover:drop-shadow-xl bg-base-100 shadow-md pt-2 pb-2 pr-0 lg:pr-12 xl:pr-28 pl-0 lg:pl-12 xl:pl-28">
        <div className="pt-5 pb-5 lg:pr-0 pr-2 lg:pl-0 pl-2 ">
          <div className="card-actions flex flex-col items-center">
            <h2 className="card-title text-primary">{name}</h2>
            <p className="text-black">
              {slots.length > 0 ? (
                <span>{slots[0]}</span>
              ) : (
                <span className="text-red-500">No slots Available</span>
              )}
            </p>
            <p className="text-black text-md">
              {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available
            </p>
            <div className="mt-5 lg:mt-10 mb-0 lg:mb-5">
              <label
                onClick={() => setTreatment(availableservice)}
                disabled={slots.length === 0}
                htmlFor="my-modal-6"
                className="btn modal-button border-none bg-gradient-to-r from-primary to-accent text-base-100 hover:text-black hover:bg-gradient-to-bl shadow-lg hover:shadow-md"
              >
                Book Appointment
              </label>
            </div>
          </div>
        </div>
      </div>

      {treatment && (
        <div className="text-black">
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-6"
                className="btn btn-sm btn-circle absolute right-2 top-2"
                onClick={() => setTreatment(null)}
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">{treatment.name}</h3>

              <form
                onSubmit={handleBooking}
                className="flex flex-col w-full items-center"
              >
                <input
                  type="text"
                  className="input input-bordered  bg-gray-200 mt-8 inputs"
                  value={format(date, 'PP')}
                  readOnly
                />

                <select
                  name="slot"
                  className="select select-info w-full max-w-md mt-3"
                >
                  {slots.map((slot, index) => (
                    <option key={index} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  disabled
                  value={user?.displayName || ''}
                  name="name"
                  className="input input-bordered input-accent   mt-5 inputs"
                />
                <input
                  type="email"
                  disabled
                  value={user?.email || ''}
                  name="email"
                  className="input input-bordered input-accent mt-3 inputs"
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  name="phone"
                  className="input input-bordered input-accent   mt-3 inputs"
                />

                <input
                  type="submit"
                  value="Submit"
                  className="btn w-full border-none bg-gray-600 text-base-100  hover:bg-gray-500 shadow-lg hover:shadow-md mt-8 mb-5
   "
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailableSlotsCard;
