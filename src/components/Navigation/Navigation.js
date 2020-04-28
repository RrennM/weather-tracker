import React from 'react';
import logo from './thicon10.png';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <div className='logoContainer'>
                <img src={logo} alt='Logo' />   
            </div>
                <div className='navLinkContainer' style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p className='f4 link dim black pa3 pointer'>Home</p>
                    <p className='f4 link dim black pa3 pointer'>Sign In</p>
                </div>
        </nav>
    )
}

export default Navigation;