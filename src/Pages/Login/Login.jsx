import React from 'react';

const Login = () => {
  return (
    <div className=" container mx-auto">
      <div className="flex items-center justify-center mt-28 lg:mt-36">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>
              Lorem ipsum dolor sit, amet consequuntur aperiam hic! Quaerat
              eveniet porro quo. Veniam.
            </p>
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
