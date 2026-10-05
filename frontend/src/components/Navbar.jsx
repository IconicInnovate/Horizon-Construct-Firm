import React, { useState } from 'react';
import { Building, Menu, X } from 'lucide-react';
import { navLinks } from '../data/content';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <Building className="h-8 w-8 text-sky-400" />
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
                            className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-md font-semibold text-sm transition-colors"
                        >
                            Get a Quote
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-800 px-4 pt-2 pb-4 space-y-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-slate-200 hover:bg-slate-700 rounded-md text-base font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}