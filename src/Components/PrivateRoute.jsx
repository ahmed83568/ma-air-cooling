import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem("isAdminAuthenticated");

  // If not authenticated, redirect to the Admin Access page
  if (!isAuthenticated) {
    return <Navigate to="/admin" />;
  }

  // If authenticated, render the children components (Admin Panel in this case)
  return children;
};

export default PrivateRoute;
