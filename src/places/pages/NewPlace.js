import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import './NewPlaces.css'

const NewPlace = () => {
    return (
        <form className="place-form">
            <Input type="text" label="Title"  />
        </form>
    );
};

export default NewPlace;