import React from 'react';
import './LocationSearchForm.css';

const LocationSeachForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <div className="pa4 black-80">
                <div className="measure">
                    <label htmlFor="name" className="f6 tl ml3 b db mb2">City Search <span className="normal black-60">(Ex: Dallas, TX)</span></label>
                    <input
                    className="input-reset ba b--black-20 mb2 db w-100" 
                    type="text" 
                    placeholder='Search a city' 
                    onChange={onInputChange} />
                    {/* We need to do is set up the API for the weather search so we can
                        change the state of the city searched (from the input) when the submit
                    button gets pressed.*/}
                    <button 
                    className='w-30 grow f5 link ph1 pv2 dib white bg-light-purple'
                    onClick={onButtonSubmit}>Search</button>
                    {/* <small id="name-desc" className="f6 black-60 db mb2">Ex: Dallas, TX</small> */}
                </div>
            </div>
        </div>
    )
} 

export default LocationSeachForm;