import React from 'react';

const Login = () => {
  const loginStyle = {
    width: '500px',
    height: '500px',

    position: 'absolute',

    marginLeft: '-250px',
    marginTop: '-250px',
  };
  return (
    <div style={loginStyle} className=" top-2/4 left-2/4">
      <div className="flex">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
