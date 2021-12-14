import React, {useEffect, useState} from 'react';
import './Nav.css';
import neflixIcon from './assests/netflix.png';
import hamburger from './assests/hamburger.png';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() =>{
        window.addEventListener('scroll', () =>{
            if (window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () =>{
            window.removeEventListener('scroll');
        };
    }, []);

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img className='nav_logo'
            src={neflixIcon}
            alt="Netflix Logo" />

            <img className='nav_avatar'
            src={hamburger}
            alt="Avatar icon" />   
        </div>
    )
}

export default Nav
