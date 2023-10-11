import { Outlet, Route, Routes } from "react-router-dom";
import TraineeLayout from "../Layouts/TraineeLayout";
import TraineeDashBoard from "../Views/TraineeDash";
import UserProfile from "../Views/TraineeDash/UserProfile";
import React from "react";


const TraineerRoutes = () => {
    return (
        <TraineeLayout>
            <Routes>
                <Route path="home" element={<TraineeDashBoard/>}/>
                <Route path="/profile" element={<UserProfile/>}/>
            </Routes>
        </TraineeLayout>
    );
}

export default TraineerRoutes;
