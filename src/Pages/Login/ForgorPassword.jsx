import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import googleIcon from '../../assets/icons/google.png';
import {
  useSignInWithGoogle,
  useSendPasswordResetEmail ,
} from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useForm } from 'react-hook-form';
import Loading from '../Components/Loading/Loading';

const ForgorPassword = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [sendPasswordResetEmail, sending, error] =
  useSendPasswordResetEmail (auth);
    // collected the location data from RequireAuth then redirect the user where he came from.
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/"; // if user came from home page back to there

    //to collect data from form name, email, password etc.
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async data => {
    
   await sendPasswordResetEmail(data.email);
    alert('Please check your inbox for Password Reset Email');
    navigate('/login');
  };

  let signInError;

  React.useEffect(() => {
    if ( googleUser) {
      navigate(from, { replace: true });
    }
  }, [googleUser, navigate, from])
  

  if (sending || googleLoading) {
    return <Loading />;
  }

  if (error || googleError) {
    signInError = (
      <p className="text-red-500">{error?.message || googleError?.message}</p>
    );
  }

  

  return (
    <div className=" container mx-auto">
      <div className="flex items-center justify-center mt-28 lg:mt-36">
        <div className="card  bg-base-100 shadow-xl">
          <div className="flex flex-col w-full  p-5">
            <h1 className="text-2xl text-center">Change your Password</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
              <input
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Please Provide a valid Email',
                  },
                })}
                type="email"
                placeholder="Email Address"
                className="input input-bordered input-accent mt-3 inputs"
              />
              {errors.email?.type === 'required' && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
              {errors.email?.type === 'pattern' && (
                <span className="text-red-500">{errors.email.message}</span>
              )}

              

              {signInError}
              <input
                type="submit"
                value="Reset Password"
                className="btn w-full border-none bg-gray-600 text-base-100  hover:bg-gray-500 shadow-lg hover:shadow-md mt-8 mb-5
"
              />
            </form>

            <p className="text-center">
              New to Doctors Portal?{' '}
              <Link to="/signup" className="text-accent hover:text-cyan-500">
                Create new account
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              type="button"
              className="btn w-full bg-white text-primary hover:border-none  hover:bg-gray-100 shadow-lg hover:shadow-md mt-2 mb-4
"
              onClick={() => signInWithGoogle()}
            >
              CONTINUE WITH GOOGLE
              <div className="avatar ml-2">
                <div className="w-6 rounded-full">
                  <img src={googleIcon} alt="icon" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgorPassword;