// frontend/src/components/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/content';
import logo from '../assets/Horizon.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md text-white shadow-md border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Company Logo & Brand Name */}
                    <div className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="Horizon Construct Logo"
                            className="h-10 w-10 object-contain rounded-md bg-white/10 p-1"
                        />
                        <span className="font-bold text-xl tracking-tight">HORIZON CONSTRUCT</span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="hover:text-sky-400 transition-colors font-medium text-sm"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="bg-sky-500 hover:bg-sky-600 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors shadow-lg shadow-sky-500/20"
                        >
                            Get a Quote
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-300 hover:text-white focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-slate-200 hover:bg-slate-800 rounded-md text-base font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-2">
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="block text-center bg-sky-500 hover:bg-sky-600 text-white py-2.5 rounded-lg font-semibold"
                        >
                            Get a Quote
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}