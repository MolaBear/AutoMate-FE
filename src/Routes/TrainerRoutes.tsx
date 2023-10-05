import { Outlet, Route, Routes } from "react-router-dom";
import TrainerLayout from "../Layouts/TrainerLayout";
import React from "react";
import TrainerBoard from "../Views/TrainerDash";
import Blank from "./Blank";
import CalendarPage from "../Components/Calendar";
import SessionsLayout from "../Layouts/SessionsLayout";


const TraineerRoutes = () => {
    return (
        <TrainerLayout>
            <Routes>
                <Route path="home" element={<TrainerBoard/>}/>
                <Route path="sessions/*" element={<SessionsLayout/>}/>
                <Route path="calendar" element={<CalendarPage/>}/>
                <Route path="contact" element={<Blank/>}/>
            </Routes>
        </TrainerLayout>
    );
}

export default TraineerRoutes;
