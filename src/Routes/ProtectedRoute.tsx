  import React, { useMemo } from 'react'
import { Navigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

interface JwtPayload {
    RoleName: string;
    // Add other properties as needed
  }
  
const ProtectedRoute = ({component : Component, ...rest}) => {
    const token = localStorage.getItem('jwtToken') as string; // reads jwt token from storage
    if(token == null){
        console.log('Token is null')
    }
    const decodedToken = jwt_decode<JwtPayload>(token);

    const Role = decodedToken.RoleName;
    // validate token
    // 1. check that token in not null
    // 2. check that is hasn't expired
    // 3. check that its a valid token
    const hasValidLogin = true; // update this based on your token checks
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