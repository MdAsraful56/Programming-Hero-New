import React from 'react';

const User = ({user}) => {

    return (
        <div>
            <h4>{user.name} : {user.email}</h4>
            {/* <h4>{user.email}</h4> */}
        </div>
    );
};

export default User;