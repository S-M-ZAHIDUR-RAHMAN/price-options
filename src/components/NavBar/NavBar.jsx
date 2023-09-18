/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const NavBar = () => {
    const routes  = [
            { name: 'Home', id: 1, path: '/' },
            { name: 'About', id: 2, path: '/about' },
            { name: 'Contact', id: 3, path: '/contact' },
            { name: 'Services', id: 4, path: '/services' },
            { name: 'Portfolio', id: 5, path: '/portfolio' }
          ]
          
    
    return (
        <nav>
            {
                routes.map(route =>(
                    
                ))
            }

        </nav>
    );
};

export default NavBar;