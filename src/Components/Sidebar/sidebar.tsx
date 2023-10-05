// Sidebar.tsx
import React, { Fragment } from 'react';
import { SidebarContainer, SidebarLink, SidebarHeader, SidebarLinkExit } from './sidebarStyle';
import { useLocation } from 'react-router-dom';
import { AcademicCapIcon, ArrowLeftOnRectangleIcon, CalendarDaysIcon, HomeIcon, PhoneIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { LogoContainer, LogoImage } from '../Styled Components/AppStyle';



const Sidebar: React.FC = () => {
  const location = useLocation();
  const isOnAdminRoute = location.pathname.startsWith('/admin');
  const isTrainerRoute = location.pathname.startsWith('/trainer');

  return (
    <SidebarContainer>
      <SidebarHeader>AutoMate</SidebarHeader>
      <SidebarLink to="home" >
        <div className="flex items-center">
          <HomeIcon className="w-5 h-5 text-white-500" />
          <span className="ml-2">Home</span>
        </div>
      </SidebarLink>
      <SidebarLink to="sessions/view">
        <div className="flex items-center">
          <AcademicCapIcon className="h-5 w-5 text-white-500" />
          <span className="ml-2">Sessions</span>
        </div>
      </SidebarLink>
      {isTrainerRoute &&(
      <Fragment>
        <SidebarLink to="calendar" >
          <div className="flex items-center">
          <CalendarDaysIcon className="h-6 w-6 text-white-500" />
            <span className="ml-2">Calendar</span>
          </div>
        </SidebarLink>
      <SidebarLink to="contact" >
        <div className="flex items-center">
          <PhoneIcon className="h-5 w-5 text-white-500" />
          <span className="ml-2">Contact</span>
        </div>
      </SidebarLink>
      </Fragment>)}
      {isOnAdminRoute && (
      <SidebarLink to="users/view">
        <div className="flex items-center">
          <UserGroupIcon className="h-5 w-5 text-white-500" />
          <span className="ml-2">Users</span>
        </div>
      </SidebarLink>)}
      <SidebarLinkExit to="/">
        <div className="flex items-center">
          <ArrowLeftOnRectangleIcon className="h-5 w-5 text-white-500" />
          <span className="ml-2">Exit</span>
        </div>
      </SidebarLinkExit>
      <LogoContainer>
        <LogoImage
          src="/logo_header.png"
          alt="BET Software"
         />
        </LogoContainer>
    </SidebarContainer>
  );
};

export default Sidebar;