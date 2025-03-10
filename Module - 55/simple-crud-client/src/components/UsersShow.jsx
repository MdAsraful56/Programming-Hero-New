import React from 'react';
import { useLoaderData } from 'react-router';

const UsersShow = () => {

    const users = useLoaderData();

    const handleDelete = _id => {
        console.log("Delete This ID User",_id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'Delete'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted Successfully')
                }
            })
    }

    return (
        <div>
            <h4>All User Show {users.length} </h4>
            <div>
                {
                    users.map(user => <p key={user._id}>
                        {user.name} : {user.email} <button onClick={()=>{handleDelete(user._id)}}>X</button>
                        </p>)
                }
            </div>
        </div>
    );
};

export default UsersShow;