/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Link from '../Link/Link';
import { AiFillDatabase, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { name: 'Home', id: 1, path: '/' },
        { name: 'About', id: 2, path: '/about' },
        { name: 'Contact', id: 3, path: '/contact' },
        { name: 'Services', id: 4, path: '/services' },
        { name: 'Portfolio', id: 5, path: '/portfolio' }
    ]


    return (
        <nav className='text-black p-6 bg-yellow-200'>
            <div className='md:hidden text-2xl' onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <AiOutlineClose></AiOutlineClose>
                    : <AiFillDatabase></AiFillDatabase>
                }
            
            </div>
            <ul className={`md:flex duration-1000 absolute md:static ${open ? 'top-16': '-top-60'} bg-yellow-200 px-6`}> 
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;