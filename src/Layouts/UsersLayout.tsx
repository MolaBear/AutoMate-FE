import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import InnerNav from "../Components/InnerNav";
import OnlineUsersView from "../Views/AdminDash/Users/OnlineUsers";
import AddUser from "../Views/AdminDash/Users/AddUser";
import EditUsersProfile from "../Views/AdminDash/Users/EditUsersProfile";


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
                <Route path="edit" element={<EditUsersProfile/>}/>
            </Routes>)}
        </div>
    );
}

export default UserLayout;
