import { Outlet, Route, Routes } from "react-router-dom";
import TrainerLayout from "../Layouts/TrainerLayout";
import React from "react";
import TrainerBoard from "../Views/TrainerDash";
import Blank from "./Blank";


const TraineerRoutes = () => {
    return (
        <TrainerLayout>
            <Routes>
                <Route path="home" element={<TrainerBoard/>}/>
                <Route path="sessions" element={<Blank/>}/>
                <Route path="about" element={<Blank/>}/>
                <Route path="contact" element={<Blank/>}/>
                <Route path="users" element={<Blank/>}/>
            </Routes>
        </TrainerLayout>
    );
}

export default TraineerRoutes;
