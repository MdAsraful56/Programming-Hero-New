import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Phones = () => {

    const phones = useLoaderData();

    return (
        <div>
            <h4>There are all Phone: {phones.length} </h4>
            {
                phones.map(phone => <li key={phone.id}><Link to={`/phone/${phone.id}`}>{phone.name}</Link></li>)
            }
        </div>
    );
};

export default Phones;