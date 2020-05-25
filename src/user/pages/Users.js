import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: '11', 
            name: 'Ace', 
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fman-avatar-profile-vector-21372076&psig=AOvVaw0YY2Lbu5Ju_sHhTaY1qItJ&ust=1590456860823000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjn5dLvzekCFQAAAAAdAAAAABAD',
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;