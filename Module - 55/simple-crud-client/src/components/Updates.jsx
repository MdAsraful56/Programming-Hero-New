import React from 'react';
import { useLoaderData } from 'react-router';

const Updates = () => {


    const loadedUser = useLoaderData()

    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updateUser = {name, email};
        console.log(updateUser);

        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    alert('user Update')
                }
            })

    }


    return (
        <div>
            <h2>{loadedUser.name}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" required defaultValue={loadedUser?.name} />
                <br />
                <input type="email" name="email" id="" required defaultValue={loadedUser?.email} />
                <br />
                <input type="submit" value="Updates User" />
            </form>
        </div>
    );
};

export default Updates;