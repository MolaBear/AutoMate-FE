import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Components/css/App.css';

import { BrowserRouter, Routes } from "react-router-dom";
import { PageRoutes } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  );
}

export default App;



