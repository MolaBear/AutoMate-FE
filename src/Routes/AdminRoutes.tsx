import { Outlet, Route, Routes } from "react-router-dom";
import AdminLayout from "../Layouts/AdminLayout";
import Blank from "./Blank";
import AdminBoard from "../Views/AdminDash";
import React from "react";
import OnlineUsersView from "../Views/AdminDash/Users/OnlineUsers";
import CalendarPage from "../Components/Calendar";
import EditSessionTable from "../Views/AdminDash/SessionsTable";


const AdminRoutes = () => {
    return (
        <AdminLayout>
            <Routes>
                <Route path="home" element={<AdminBoard/>}/>
                <Route path="sessions" element={<EditSessionTable/>}/>
                <Route path="calendar" element={<CalendarPage/>}/>
                <Route path="contact" element={<Blank/>}/>
                <Route path="users" element={<OnlineUsersView/>}/>
            </Routes>
        </AdminLayout>
    );
}

export default AdminRoutes;
