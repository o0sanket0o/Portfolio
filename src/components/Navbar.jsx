import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex fixed top-0 left-0 w-full neucha-regular justify-between 
        z-50 opacity-90 items-center p-8 bg-[rgb(240,240,242)] 
        backdrop-blur-sm shadow-md">
            <div className="text-2xl font-bold text-[30px]">Sanket</div>
            <ul className="flex neucha-regular text-[24px] gap-14 m-0 p-0 list-none uppercase font-bold mx-20">
                <li>
                    <a href="#about" className="
                    tracking-tight scale-[1.03]
                    transition-colors duration-200 hover:text-gray-400">
                    About
                    </a>
                </li>
                <li>
                    <a href="#projects" className="
                    tracking-tight scale-[1.03]
                    transition-colors duration-200 hover:text-gray-400">
                    Projects
                    </a>
                </li>
                <li>
                    <a href="#contact" className="
                    tracking-tight scale-[1.03]
                    transition-colors duration-200 hover:text-gray-400">
                    Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};


export default Navbar;