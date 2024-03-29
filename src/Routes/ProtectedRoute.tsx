import React from 'react';
import { Navigate } from 'react-router-dom';
import { decodeJwtToken } from '../Services/data/jwtToken';

interface ProtectedRouteProps {
  requiredRole: string;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ requiredRole, children }) => {
  const token = localStorage.getItem('jwtToken') as string;

  if (!token) {
    console.log('Token is null');
    return <Navigate to="/" />;
  }

  const decodedToken = decodeJwtToken(token);

  if (!decodedToken) {
    return <Navigate to="/" />;
  }

  const currentTime = Math.floor(Date.now() / 1000);

  if (decodedToken.exp && decodedToken.exp < currentTime) {
    console.error('The JWT token has expired.');
    return <Navigate to="/" />;
  }

  const userRole = decodedToken.RoleName;

  if (userRole === requiredRole) {
    return <>{children}</>; // Allow access to the specified routes
  } else {
    console.error(`Unauthorized access for role: ${userRole}`);
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
