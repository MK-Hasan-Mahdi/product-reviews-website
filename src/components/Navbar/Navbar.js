import React from 'react';
import './Navbar.css';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <nav className='container'>
            <div className='logo-container'>
                <h1>Trust-Site</h1>
                {/* <p>Never miss user experience</p> */}
            </div>
            <div className='link-container'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/reviews'>Reviews</CustomLink>
                <CustomLink to='/dashboard'>Dashboard</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </div>
        </nav>
    );
};

export default Navbar;