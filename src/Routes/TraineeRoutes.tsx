import { Outlet, Route, Routes } from "react-router-dom";
import TraineeLayout from "../Layouts/TraineeLayout";
import TraineeDashBoard from "../Views/TraineeDash";
import UserProfile from "../Views/TraineeDash/UserProfile";
import React from "react";
import ProfileForm from "../Views/TraineeDash/ProfileForm";


const TraineerRoutes = () => {
    return (
        <TraineeLayout>
            <Routes>
                <Route path="" element={<TraineeDashBoard/>}/>
                {/* <Route path="/profile" element={<UserProfile/>}/> */}
                <Route path="/profile" element={<ProfileForm/>}/>
            </Routes>
        </TraineeLayout>
    );
}

export default TraineerRoutes;