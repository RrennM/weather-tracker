import React from 'react';
import logo from './thicon10.png';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav>
                <div className='logoContainer'>
                    <img src={logo} alt='Logo' />
                </div>
                <div className='navLinkContainer' style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p 
                    onClick={() => onRouteChange('signout')}
                    className='f4 link dim black pa3 pointer'>Sign Out</p>
                </div>
            </nav>
        )
    } else {
        return (
            <nav>
                <div className='logoContainer'>
                    <img src={logo} alt='Logo' />
                </div>
                <div className='navLinkContainer' style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p 
                    onClick={() => onRouteChange('signin')} 
                    className='f4 link dim black pa3 pointer'>Sign In</p>
                    <p 
                    onClick={() => onRouteChange('register')} 
                    className='f4 link dim black pa3 pointer'>Register</p>
                </div>
            </nav>
        )
    }
}

export default Navigation;