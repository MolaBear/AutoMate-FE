import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { routes } from './pages/UserRoutes';

import { Login } from './Login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Login />
);