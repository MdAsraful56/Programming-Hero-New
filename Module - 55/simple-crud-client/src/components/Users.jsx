import React from 'react';

const Users = () => {

    const handleSubmit = e => {

        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name, email};
        console.log(user);
    
    fetch('http://localhost:5000/users', {
        method: "POST",
        headers: {
        'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
        console.log(data);
        if (data.insertedId) {
            alert('Users added Successfully');
            form.reset();
        }
        });
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" required />
                <br />
                <input type="email" name="email" id="" required />
                <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default Users;