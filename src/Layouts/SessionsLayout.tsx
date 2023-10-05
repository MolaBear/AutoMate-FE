import { Route, Routes, useLocation } from "react-router-dom";
import AdminBoard from "../Views/AdminDash";
import React from "react";
import EditSessionTable from "../Views/AdminDash/SessionsTable";
import InnerNav from "../Components/InnerNav";
import CreateSession from "../Views/AdminDash/SessionsTable/CreateSession";
//import SessionHistory from "../Views/AdminDash/SessionsTable/SessionHistory";


const SessionsLayout = () => {
  const location = useLocation();
  const isOnAdminRoute = location.pathname.startsWith('/admin');
  const isOnTrainerRoute = location.pathname.startsWith('/trainer');
    return (
        <div>
        <InnerNav/>
        {isOnAdminRoute && (
            <Routes>
                <Route path="view" element={<EditSessionTable/>}/>
                <Route path="create" element={<CreateSession/>}/>
                {/* <Route path="history" element={<SessionHistory/>}/> */}
            </Routes>)}
            
        {isOnTrainerRoute && (
            <Routes>
                <Route path="/" element={<EditSessionTable/>}/>
                <Route path="create" element={<EditSessionTable/>}/>
                <Route path="create" element={<EditSessionTable/>}/>
            </Routes>)}
        </div>
    );
}

export default SessionsLayout;
