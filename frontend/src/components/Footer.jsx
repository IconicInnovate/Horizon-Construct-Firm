// frontend/src/components/Footer.jsx
import React from 'react';
import logo from '../assets/Horizon.png';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Company Logo and Brand Name */}
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="Horizon Construct Logo"
                        className="h-8 w-8 object-contain rounded-md bg-white/10 p-1"
                    />
                    <span className="font-bold text-white text-lg tracking-tight">HORIZON CONSTRUCT</span>
                </div>

                {/* Copyright Notice */}
                <p className="text-sm">
                    © {new Date().getFullYear()} Horizon Construct Firm. All rights reserved.
                </p>
            </div>
        </footer>
    );
}