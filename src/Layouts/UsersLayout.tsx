import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import InnerNav from "../Components/InnerNav";
import OnlineUsersView from "../Views/AdminDash/Users/OnlineUsers";
import AddUser from "../Views/AdminDash/Users/AddUser";


const UserLayout = () => {
  const location = useLocation();
  const isOnAdminRoute = location.pathname.startsWith('/admin');
    return (
        <div>
        <InnerNav/>
        {isOnAdminRoute && (
            <Routes>
                <Route path="view" element={<OnlineUsersView/>}/>
                <Route path="create" element={<AddUser/>}/>
            </Routes>)}
        </div>
    );
}

export default UserLayout;
