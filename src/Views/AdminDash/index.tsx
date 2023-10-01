import { Outlet } from "react-router-dom";
import React from "react";
import OnlineUsersView from "./Users/OnlineUsers";
import AdminHeader from "./AdminHeader/adminHeader";
import { PageRoutes } from "../../Routes";
import Sidebar from "../../Components/Sidebar/sidebar";
import Table from "./SessionsTable";

const AdminBoard = () => {
    return (
        <div>
        <OnlineUsersView/>
        <Table/>
        </div>
    )
};

export default AdminBoard;
