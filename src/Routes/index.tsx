import React from "react";
import TraineeDashBoard from "../Views/TraineeDash";
import { Route, Router, Routes } from "react-router-dom";
import Blank from "./Blank";
import Login from "../Views/Login";
import AdminRoutes from "./AdminRoutes";
import TraineeRoutes from "./TraineeRoutes";
import TrainerRoutes from "./TrainerRoutes";

export const PageRoutes = () => {
  return (
    <Routes>
        <Route index element={<Login />} />
        <Route path="/trainee/*" element={<TraineeRoutes />} />
        <Route path="/trainer/*" element={<TrainerRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
};