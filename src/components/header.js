import React from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { adduser,removeuser } from '../utils/userslice';
import { auth } from '../utils/firebase';
import { UseDispatch, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName,photoURL } = user;
        console.log(user)
        dispatch(adduser({ uid: uid, email: email, displayName: displayName ,photoURL:photoURL}));
         navigate("/browse")
        // ...
      } else {
        
        dispatch(removeuser());
        navigate("/")
      }
    });
  }, []);
  return (
    <div className=' absolute w-full  px-8 py-2   bg-gradient-to-b from-black z-40  '>
        <img className=' w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
    </div>
  )
}

export default Header