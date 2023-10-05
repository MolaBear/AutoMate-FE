import { Route, Routes } from "react-router-dom";
import AdminLayout from "../Layouts/AdminLayout";
import Blank from "./Blank";
import AdminBoard from "../Views/AdminDash";
import React from "react";
import OnlineUsersView from "../Views/AdminDash/Users/OnlineUsers";
import CalendarPage from "../Components/Calendar";
import SessionsLayout from "../Layouts/SessionsLayout";
import UserLayout from "../Layouts/UsersLayout";


const AdminRoutes = () => {
    return (
        <AdminLayout>
            <Routes>
                <Route path="home" element={<AdminBoard/>}/>
                <Route path="sessions/*" element={<SessionsLayout/>}/>
                <Route path="calendar" element={<CalendarPage/>}/>
                <Route path="contact" element={<Blank/>}/>
                <Route path="users/*" element={<UserLayout/>}/>
            </Routes>
        </AdminLayout>
    );
}

export default AdminRoutes;
