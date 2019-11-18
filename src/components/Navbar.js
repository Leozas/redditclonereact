/*
nav bar with [home][menu][directions]
*/

import React from 'react';


function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-dark sticky-top justify-content-center">
            <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">
                <span className="navbar-toggler-icon text-white">...</span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="">Ribbit</a></li>
                    <li className="nav-item border"> 
                        <a className="nav-link" href="">Log In</a>
                    </li>
                    <li className="nav-item border"> 
                        <a className="nav-link" href="">Log Out</a>
                    </li>
                    <li className="nav-item border"> 
                        <a className="nav-link" href="">Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
