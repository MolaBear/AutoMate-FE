import { Disclosure } from '@headlessui/react'
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRightIcon, Bars3Icon, BellIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { LogoutButton, NavbarContainer, NavbarLeft, NavbarWrapper, NavigationStyledDiv } from './Styled Components/AppStyle';
import { LogoutRounded } from '@mui/icons-material';
import React from 'react';



export default function Navbar() {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };
    //const userText = authState.isAuthenticated
      //  ? <button onClick={logout}>Logout</button>
        //: <button onClick={login}>Sign In</button>;

    return (
        <header className="bg-white">
            <Disclosure as="nav" className="bg-holly-purple">
                <NavbarContainer>
                    <NavbarWrapper>
                    <NavbarLeft>
                    <div className="flex flex-shrink-0 items-center">
                        <img
                                className="h-8 w-auto"
                                src="/logo_header.png"
                                alt="BET Software"
                            /> 
                        </div>
                        <NavigationStyledDiv>
                            <div className="flex-container">
                            <Link to={''}>Home</Link>
                            </div>
                        </NavigationStyledDiv>
                        <NavigationStyledDiv>
                            <div className="flex space-x-4">
                            <Link to={'profile'}>Profile</Link>
                            </div>
                        </NavigationStyledDiv>
                    </NavbarLeft>
                            
                            <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <LogoutButton onClick={handleLogout}
                                        type="submit">
                                    Logout  <LogoutRounded/>

                                </LogoutButton>
                            </div>
                        </div>
                    </NavbarWrapper>
                </NavbarContainer>
            </Disclosure>
            </header>


    )
    

}
