import React from 'react';

const MainButton = ({ children }) => {
  return (
    <button
      type="button"
      className="btn border-none bg-gradient-to-r from-primary to-accent text-base-100 hover:text-black hover:bg-gradient-to-bl shadow-lg hover:shadow-md 
             "
    >
      {children}
    </button>
  );
};

export default MainButton;
