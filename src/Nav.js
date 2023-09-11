import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';
import netflixLogo from './netflix-logo.png';

function Nav() {

    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }

    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])



    return (
        <div className={`nav ${show && "nav_black"}`} >
            <div className='nav_contents'>

                <img
                    onClick={() => navigate("/")}
                    className='nav_logo'
                    src={netflixLogo}
                    alt='Netflix Logo'                
                />

                <img
                    onClick={ () => navigate("/profile") }
                    className='avatar_logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                    alt='Avatar Logo'

                />
            </div>
        </div>
        );
}

export default Nav;