import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({component : Component, ...rest}) => {
    const token = localStorage.getItem('jwtToken'); // reads jwt token from storage
    // validate token
    // 1. check that token in not null
    // 2. check that is hasn't expired
    // 3. check that its a valid token
    const hasValidLogin = false; // updat this based on your token checks
    // can also include specific roles
    // 4. read the role(s) from token
  
    const isAuthed = useMemo(() => {
      if (hasValidLogin) {
        // if (role === 'admin') {
        //   return true;
        // }
        return true;
      }
      return false;
    }, [hasValidLogin]);
  
    return isAuthed ? <Component {...rest} /> : <Navigate to="/" />;
  };
  
  export default ProtectedRoute;