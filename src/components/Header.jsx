// import { Link } from 'react-router-dom';


// const Header = () => (
//     <header className="flex justify-between items-center px-8 py-4 bg-black text-white fixed top-0 left-0 w-full z-50 shadow-lg rounded-b-xl">
//         <h1 className="text-white text-2xl font-bold">
//             LAKSHMI <span className="text-yellow-400">CHAITANYA</span>
//         </h1>
//         <nav className="flex space-x-6 font-medium">
//             <Link to="/about" className="hover:text-yellow-400 transition duration-300">ABOUT</Link>
//             <Link to="/experience" className="hover:text-yellow-400 transition duration-300">EXPERIENCE</Link>
//             <Link to="/projects" className="hover:text-yellow-400 transition duration-300">PORTFOLIO</Link>
//             <Link to="/contact" className="hover:text-yellow-400 transition duration-300">CONTACT US</Link>
//         </nav>
//     </header>
// );

// export default Header;

import { Link } from 'react-scroll';

const Header = () => (
    <header className="flex justify-between items-center px-8 py-4 bg-black text-white fixed top-0 left-0 w-full z-50 shadow-lg rounded-b-xl">
        <h1 className="text-white text-2xl font-bold">
            LAKSHMI <span className="text-yellow-400">CHAITANYA</span>
        </h1>
        <nav className="flex space-x-6 font-medium">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400 transition duration-300">HOME</Link>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400 transition duration-300">ABOUT</Link>
            <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400 transition duration-300">EXPERIENCE</Link>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400 transition duration-300">PROJECTS</Link>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400 transition duration-300">CONTACT</Link>
        </nav>
    </header>
);

export default Header;

