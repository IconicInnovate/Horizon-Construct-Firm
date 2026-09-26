import React from 'react';
import { Building } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <Building className="h-6 w-6 text-sky-400" />
                    <span className="font-bold text-white text-lg">HORIZON CONSTRUCT</span>
                </div>
                <p className="text-sm">© {new Date().getFullYear()} Horizon Construct Firm. All rights reserved.</p>
            </div>
        </footer>
    );
}