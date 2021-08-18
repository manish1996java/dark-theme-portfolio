import React from 'react';
import './NavHeader.scss';
const NavHeader = () => {
    return (
        <>
         <div className="nav">
            <h1 className="logo">DEV.</h1>
            <div className="nav-links">
                {/* <li className=""><a href="#about">About</a></li> */}
                <li className=""><a href="#projects">Projects</a></li>
                <li className=""><a href="#skills">Skills</a></li>
                <li className=""><a href="#certificates">Certificates</a></li>
                <li className=""><a href="#education">Education</a></li>
                <li className=""><a href="#extra">Extra</a></li>
            </div>
        </div>   
        </>
    );
};

export default NavHeader;