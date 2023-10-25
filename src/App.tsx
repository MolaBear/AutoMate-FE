import React from 'react';
import './Components/css/App.css';

import { BrowserRouter } from "react-router-dom";
import { PageRoutes } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  );
}

export default App;



