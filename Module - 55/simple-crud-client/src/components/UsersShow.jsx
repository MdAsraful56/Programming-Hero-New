import React from 'react';
import { useLoaderData } from 'react-router';

const UsersShow = () => {

    const users = useLoaderData();

    return (
        <div>
            <h4>All User Show {users.length} </h4>
            <div>
                {
                    users.map(user => <p key={user._id}> {user.name} : {user.email} </p>)
                }
            </div>
        </div>
    );
};

export default UsersShow;