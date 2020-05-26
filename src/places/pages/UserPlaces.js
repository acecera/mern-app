import React from 'react';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'a1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://en.wikipedia.org/wiki/File:Empire_State_Building_(aerial_view).jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'p1'
    },
    {
        id: 'c1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://en.wikipedia.org/wiki/File:Empire_State_Building_(aerial_view).jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'p2'
    }
];

const UserPlaces = () => {
    return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;