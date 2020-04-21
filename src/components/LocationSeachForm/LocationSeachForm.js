import React from 'react';

const LocationSeachForm = ({ onInputChange }) => {
    return (
        <div>
            <p>Form will go here!</p>
            <form>
                <input 
                type='text' 
                placeholder='Search a city' 
                onChange={onInputChange} />
            </form>
        </div>
    )
} 

export default LocationSeachForm;