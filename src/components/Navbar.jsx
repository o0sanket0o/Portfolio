import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const navRef = useRef(null);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            // Detect active section
            const sections = ['home', 'about', 'projects', 'skills', 'contact'];
            let foundActiveSection = null;
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        foundActiveSection = section;
                        break;
                    }
                }
            }
            
            // Only update if we found a section, or clear it if we're not in any section
            if (foundActiveSection) {
                setActiveSection(foundActiveSection);
            } else {
                // Check if we're between sections or outside all sections
                const allSectionsBelow = sections.every(section => {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        return rect.top > 100;
                    }
                    return true;
                });
                
                const allSectionsAbove = sections.every(section => {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        return rect.bottom < 100;
                    }
                    return false;
                });
                
                // Clear active section if we're between sections or outside all sections
                if (allSectionsBelow || allSectionsAbove) {
                    setActiveSection(null);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Add scroll padding to account for fixed navbar
    useEffect(() => {
        document.documentElement.style.scrollPaddingTop = `${navRef.current?.offsetHeight || 80}px`;
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setActiveSection(sectionId);
            setIsMobileMenuOpen(false);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav 
            ref={navRef}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800' 
                    : 'bg-gray-900/80 backdrop-blur-sm'
            }`}
        >
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-center py-4">
                    
                    {/* Logo */}
                    <div className="relative">
                        <button 
                            onClick={() => scrollToSection('home')} 
                            className="group"
                        >
                            <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Sanket
                            </span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-8 lg:gap-12 text-lg font-medium">
                        {['projects', 'skills', 'contact'].map((item) => (
                            <li key={item}>
                                <button
                                    onClick={() => scrollToSection(item)}
                                    className={`relative cursor-pointer transition-colors duration-300 group ${
                                        activeSection === item 
                                            ? 'text-white' 
                                            : 'text-gray-300 hover:text-white'
                                    }`}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
                                        activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}></span>
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button - Desktop */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-6 cursor-pointer py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Let's Talk
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
                        aria-label="Toggle menu"
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
                            {['about', 'projects', 'contact'].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => scrollToSection(item)}
                                        className={`block w-full text-left py-2 text-lg transition-colors duration-300 ${
                                            activeSection === item 
                                                ? 'text-white font-medium' 
                                                : 'text-gray-300 hover:text-white'
                                        }`}
                                    >
                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4 mt-4 border-t border-gray-800">
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="block w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                            >
                                Let's Talk
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Active section indicator */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        </nav>
    );
};