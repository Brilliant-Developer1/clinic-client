import React from 'react';
import googleIcon from '../../assets/icons/google.png';
import { Link, useNavigate } from 'react-router-dom';
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useForm } from 'react-hook-form';
import Loading from '../Components/Loading/Loading';

const SignUp = () => {

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // Insert User Name in Data
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    //to collect data from form name, email, password etc.
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  

  let signInError;

  if (loading || googleLoading || updating) {
    return <Loading />;
  }

  if (error || googleError || updateError) {
    signInError = (
      <p className="text-red-500">{error?.message || googleError?.message || updateError?.message}</p>
    );
  }

  if (user || googleUser) {
    console.log(user || googleUser);
  }

  const onSubmit = async data => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name })
    console.log("Update done");
    navigate('/appointments')
  };
  return (
    <div className=" container mx-auto">
      <div className="flex items-center justify-center mt-28 lg:mt-36">
        <div className="card  bg-base-100 shadow-xl">
          <div className="flex flex-col w-full  p-5">
            <h1 className="text-2xl text-center">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
              <input
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Name is required',
                  }
                })}
                type="text"
                placeholder="Your Name"
                className="input input-bordered input-accent mt-5 inputs"
              />
              {errors.name?.type === 'required' && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
              
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
                className="input input-bordered input-accent mt-5 inputs"
              />
              {errors.email?.type === 'required' && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
              {errors.email?.type === 'pattern' && (
                <span className="text-red-500">{errors.email.message}</span>
              )}

              <input
                autoComplete="password"
                type="password"
                placeholder="Password"
                className="input input-bordered input-accent   mt-5 inputs"
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                  minLength: {
                    value: 6,
                    message: 'Minimum 6 Characters',
                  },
                })}
              />
              {errors.password?.type === 'required' && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
              {errors.password?.type === 'minLength' && (
                <span className="text-red-500">{errors.password.message}</span>
              )}

              <a
                href="http://localhost:3000/login"
                className="text-left hover:text-cyan-500"
              >
                Forgot Password?
              </a>

              {signInError}
              <input
                type="submit"
                value="SIGN UP"
                className="btn w-full border-none bg-gray-600 text-base-100  hover:bg-gray-500 shadow-lg hover:shadow-md mt-8 mb-5
"
              />
            </form>

            <p className="text-center">
              Already have an account?{' '}
              <Link to="/login" className="text-accent hover:text-cyan-500">
                Log In here
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

export default SignUp;
