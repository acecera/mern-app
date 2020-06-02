import React from 'react';
import { useParams } from 'react-router-dom';

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
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'p2'
    }
];

const UpdatePlace = () => {
    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    if (!identifiedPlace) {
        return (
            <div className="center">
                <h2>Could not find place!</h2>
            </div>
        );
    }

    return (
        <h2>Update Place</h2>
    );
};

export default UpdatePlace;