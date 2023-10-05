import { Disclosure } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom';
import { NavbarContainer, NavbarLeft, SessionNavLink, NavbarWrapper } from './Styled Components/AppStyle';
import React, { Fragment } from 'react';



const InnerNav = () => {
  const location = useLocation();
  const isOnSession = location.pathname.startsWith('/admin/session');
  const isOnTrainerSession = location.pathname.startsWith('/trainer/session');
  const isOnUser = location.pathname.startsWith('/admin/user');
    return (
        <div style={{marginLeft: '250px'}}>
            <Disclosure as="nav">
                <NavbarContainer>
                    <NavbarWrapper>
                    <NavbarLeft>
                    {isOnSession && (
                        <Fragment>
                            <SessionNavLink to="view">
                                <div className="flex-container">
                                    View Sessions
                                </div>
                            </SessionNavLink>
                            <SessionNavLink to="create">
                                <div className="flex space-x-4">
                                    Create Sessions
                                </div>
                            </SessionNavLink>
                            <SessionNavLink to="history">
                                <div className="flex-container">
                                    Session History
                                </div>
                            </SessionNavLink>
                        </Fragment>
                            )}
                            {isOnTrainerSession && (
                                <Fragment>
                                    <SessionNavLink to="view">
                                        <div className="flex-container">
                                            View Sessions
                                        </div>
                                    </SessionNavLink>
                                    <SessionNavLink to="history">
                                        <div className="flex-container">
                                            Session History
                                        </div>
                                    </SessionNavLink>
                                </Fragment>
                                    )}
                        {isOnUser && (
                        <Fragment>
                            <SessionNavLink to="view">
                                <div className="flex space-x-4">
                                    Users
                                </div>
                            </SessionNavLink>
                            <SessionNavLink to="create">
                                <div className="flex-container">
                                    Add Users
                                </div>
                            </SessionNavLink>
                        </Fragment>)}
                    </NavbarLeft>
                    </NavbarWrapper>
                </NavbarContainer>
            </Disclosure>
        </div>
    );
}

export default InnerNav;
