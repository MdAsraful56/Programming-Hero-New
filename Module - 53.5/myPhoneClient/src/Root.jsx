import React from 'react';
import { NavLink, Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <NavLink to='/phones' >Phones</NavLink>
            <Outlet />
        </div>
    );
};

export default Root;