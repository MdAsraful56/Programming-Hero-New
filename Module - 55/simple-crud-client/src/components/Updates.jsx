import React from 'react';

const Updates = () => {

    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updateUser = {name, email};
        console.log(updateUser);



    }


    return (
        <div>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" required />
                <br />
                <input type="email" name="email" id="" required />
                <br />
                <input type="submit" value="Updates User" />
            </form>
        </div>
    );
};

export default Updates;