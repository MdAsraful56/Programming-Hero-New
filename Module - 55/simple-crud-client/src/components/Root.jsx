import React from 'react';
import { Link, Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <h2>Simple Crud Client</h2>
            <h4><Link to='/users'>Users Show</Link></h4>
            <Outlet/>
        </div>
    );
};

export default Root;