import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const UsersShow = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)


    const handleDelete = _id => {
        console.log("Delete This ID User",_id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'Delete'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted Successfully');
                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining);
                }
            })
    }

    return (
        <div>
            <h4>All User Show {users.length} </h4>
            <div>
                {
                    users.map(user => <p key={user._id}>
                        {user.name} : {user.email} 
                        <Link to={`/update/${user._id}`} > <button>Update</button> </Link>
                        <button onClick={()=>{handleDelete(user._id)}}>X</button>
                        </p>)
                }
            </div>
        </div>
    );
};

export default UsersShow;