import React from 'react';
import './NavHeader.scss';
const NavHeader = () => {
    return (
        <>
         <div className="nav">
            <h1 className="logo">DEV.</h1>
            <div className="nav-links">
                <li className=""><a href="#section1">About</a></li>
                <li className=""><a href="#section2">Projects</a></li>
                <li className=""><a href="#section3">Skills</a></li>
                <li className=""><a href="#section2">Education</a></li>
                <li className=""><a href="#section3">Extra</a></li>
            </div>
        </div>   
        </>
    );
};

export default NavHeader;