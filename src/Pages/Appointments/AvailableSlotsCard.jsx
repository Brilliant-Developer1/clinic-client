import React from 'react';

const AvailableSlotsCard = ({ cardTitle, time }) => {
  return (
    <div>
      <div className="card drop-shadow-md hover:drop-shadow-xl bg-base-100 shadow-md pt-2 pb-2 pr-0 lg:pr-12 xl:pr-28 pl-0 lg:pl-12 xl:pl-28">
        <div className="pt-5 pb-5 lg:pr-0 pr-2 lg:pl-0 pl-2 ">
          <div className="card-actions flex flex-col items-center">
            <h2 className="card-title text-primary">{cardTitle}</h2>
            <p className="text-black">{time}</p>
            <div className="mt-5 lg:mt-10 mb-0 lg:mb-5">
              <label
                htmlFor="my-modal-3"
                className="btn modal-button border-none bg-gradient-to-r from-primary to-accent text-base-100 hover:text-black hover:bg-gradient-to-bl shadow-lg hover:shadow-md"
              >
                Book Appointment
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black">
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">{cardTitle}</h3>

            <div className="flex flex-col w-full items-center">
              <input
                type="text"
                className="input input-bordered  bg-gray-200 mt-8 inputs"
                value="April 30, 2020"
              />
              <input
                type="text"
                className="input input-bordered bg-gray-200 mt-3 inputs"
                value={time}
              />
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered input-accent   mt-5 inputs"
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="input input-bordered input-accent   mt-3 inputs"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered input-accent mt-3 inputs"
              />

              <button
                type="button"
                className="btn w-full border-none bg-gray-600 text-base-100  hover:bg-gray-500 shadow-lg hover:shadow-md mt-8 mb-5
   "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableSlotsCard;
