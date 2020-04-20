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
                    <p className='f3 link dim black underline pa3 pointer'>Home</p>
                    <p className='f3 link dim black underline pa3 pointer'>Sign In</p>
                </div>
        </nav>
    )
}

export default Navigation;