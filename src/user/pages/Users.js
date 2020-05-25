import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: '11', 
            name: 'Ace', 
            image: 'https://www.facebook.com/photo/?fbid=10202068541053357&set=a.1608690335449',
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;