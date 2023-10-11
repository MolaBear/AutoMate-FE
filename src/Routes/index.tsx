import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Login from "../Views/Login";
import AdminRoutes from "./AdminRoutes";
import TraineeRoutes from "./TraineeRoutes";
import TrainerRoutes from "./TrainerRoutes";
import SetPassword from "../Views/Login/SetNewPassword/SetNewPassword";
import ProtectedRoute from "./ProtectedRoute";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="setpass" element={<SetPassword />} />
      <Route
        path="/trainee/*"
        element={
          <ProtectedRoute requiredRole="Trainee">
            <TraineeRoutes/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/trainer/*"
        element={
          <ProtectedRoute requiredRole="Trainer">
            <TrainerRoutes />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute requiredRole="Admin">
            <AdminRoutes />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
