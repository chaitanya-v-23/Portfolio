import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-black text-white fixed top-0 left-0 w-full z-50 shadow-lg rounded-b-xl">
            <h1 className="text-white text-2xl font-bold">
                LAKSHMI <span className="text-yellow-400">CHAITANYA</span>
            </h1>
            <ul className="flex space-x-6 font-medium">
                <li><a href="#hero" className="hover:text-yellow-400 transition duration-300">HOME</a></li>
                <li><a href="#about" className="hover:text-yellow-400 transition duration-300">ABOUT</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition duration-300">PORTFOLIO</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition duration-300">SERVICE</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition duration-300">BLOG</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition duration-300">CONTACT US</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;