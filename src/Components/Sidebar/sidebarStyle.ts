import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Define the Styled Components for the sidebar
export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  background-color: #333;
  color: #ababab;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
`;

export const SidebarHeader = styled.h2`
  padding: 20px;
  text-align: center;
  font-size: 35px;
`;


export const SidebarLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px 20px;
  color: white;
  display: block;
  margin-bottom: 10px;
  font-size: 18px;
  transition: 0.3s ease-in-out;

  &.active {
    background-color: rgb(159 49 255 / 31%);
    border-left: 3px solid #8800ff;
    font-size: 18px;
    color: #fff;
  }

  &:hover {
    background-color: rgb(159 49 255 / 31%);
    border-left: 5px solid #8800ff;
    font-size: 18px;
    color: #fff;
  }
`;

export const SidebarLinkExit = styled(NavLink)`
  text-decoration: none;
  padding: 10px 20px;
  color: white;
  display: block;
  margin-bottom: 10px;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    color: rgb(167 64 255);
  }
`;