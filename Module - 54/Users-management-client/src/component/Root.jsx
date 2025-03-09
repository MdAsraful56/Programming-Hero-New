import React from 'react';
import { Link, Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Link to='/users' >Users</Link>
            <Outlet />
        </div>
    );
};

export default Root;