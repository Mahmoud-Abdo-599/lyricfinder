import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <div className="navbar navbar-dark bg-dark mb-5">
            <span className="navbar-brand mb-0 h1 mx-auto">LyricFinder</span>
            <Link to="/lyricfinder/about" className="btn btn-outline-light my-2 my-sm-0">About Us</Link>
                
        </div>
    )
}

export default Navbar;