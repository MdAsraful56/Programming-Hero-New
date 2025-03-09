import React, { useEffect, useState } from 'react';
import User from './User';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    } ,[])


    const handleAddUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        // console.log(name, email)
        const user = {name, email};
        console.log(user)

        fetch('http://localhost:5000/users', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <h1>Users Management System</h1>
            <h4>Numbers of Users: {users.length} </h4>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="submit" value="Add User" />
            </form>
            {
                users.map(user => <User key={user.id} user={user} />)
            }

        </div>
    );
};

export default Users;