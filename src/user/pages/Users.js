import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: "u1",
            image: "https://i.ytimg.com/vi/zvjAEYAt6AU/maxresdefault.jpg",
            name: "veysi",
            places: 3,
        },
    ]

    return (
        <UsersList items={USERS} />
    )
};

export default Users;