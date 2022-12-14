import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from './../../../firebase.init';




const Navbar = () => {

  const [user] = useAuthState(auth);
  

  const logOut = async () => {
    const success = await signOut(auth);
          if (success) {
            alert('You are sign out');
          }
  }
/*   if(!user?.emailVerified){
    //alert('Please Verify your Email First')
    signOut(auth)
  } */
  
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="appointments">Appointments</Link>
      </li>
      <li>
        <Link to="reviews">Reviews</Link>
      </li>
      <li>
        <Link to="contact">Contact Us</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Doctors Portal
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        { user ?
            <button onClick={logOut} className="btn border-none bg-gradient-to-r from-primary to-accent text-base-100 hover:text-black hover:bg-gradient-to-bl hover:shadow-md shadow-lg">
           Sign Out
          </button>
          :
          <button className="btn border-none bg-gradient-to-r from-primary to-accent text-base-100 hover:text-black hover:bg-gradient-to-bl hover:shadow-md shadow-lg">
          <Link to="login">Log In</Link>
        </button>
        }
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact right-0 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
