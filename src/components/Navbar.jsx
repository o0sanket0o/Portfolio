import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar () {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800' 
                : 'bg-gray-900/80 backdrop-blur-sm'
        }`}>
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-center py-4">
                    
                    {/* Logo */}
                    <div className="relative">
                        <a href="#home" className="group">
                            <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Sanket
                            </span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-8 lg:gap-12 text-lg font-medium">
                        {['About', 'Projects', 'Contact'].map((item) => (
                            <li key={item}>
                                <a 
                                    href={`#${item.toLowerCase()}`}
                                    className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button - Desktop */}
                    <div className="hidden md:block">
                        <a 
                            href="#contact"
                            className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Let's Talk
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 overflow-hidden ${
                    isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <div className="py-4 border-t border-gray-800">
                        <ul className="space-y-4">
                            {['About', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a 
                                        href={`#${item.toLowerCase()}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block py-2 text-lg text-gray-300 hover:text-white transition-colors duration-300"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4 mt-4 border-t border-gray-800">
                            <a 
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Optional: Active section indicator */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        </nav>
    );
};
