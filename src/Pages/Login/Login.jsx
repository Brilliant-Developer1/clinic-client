import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../../assets/icons/google.png';

const Login = () => {
  return (
    <div className=" container mx-auto">
      <div className="flex items-center justify-center mt-28 lg:mt-36">
        <div className="card  bg-base-100 shadow-xl">
          <div className="flex flex-col w-full  p-5">
            <h1 className="text-2xl text-center">Login</h1>
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered input-accent mt-3 inputs"
            />

            <input
              type="password"
              placeholder="Password"
              className="input input-bordered input-accent   mt-3 inputs"
            />
            <a
              href="http://localhost:3000/login"
              className="text-left hover:text-cyan-500"
            >
              Forgot Password?
            </a>
            <button
              type="button"
              className="btn w-full border-none bg-gray-600 text-base-100  hover:bg-gray-500 shadow-lg hover:shadow-md mt-8 mb-5
"
            >
              Login
            </button>
            <p className="text-center">
              New to Doctors Portal?{' '}
              <Link to="signup" className="text-accent hover:text-cyan-500">
                Create new account
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              type="button"
              className="btn w-full bg-white text-primary hover:border-none  hover:bg-gray-100 shadow-lg hover:shadow-md mt-2 mb-4
"
            >
              CONTINUE WITH GOOGLE
              <div className="avatar ml-2">
                <div className="w-6 rounded-full">
                  <img src={googleIcon} />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
