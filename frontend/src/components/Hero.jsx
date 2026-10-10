// frontend/src/components/Hero.jsx
import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

/**
 * Hero Component
 * Displays the main banner featuring an external animated architectural background image.
 */
export default function Hero() {
    return (
        <section className="relative bg-slate-950 text-white py-28 md:py-40 overflow-hidden min-h-[85vh] flex items-center">

            {/* External Image Layer with Ken Burns Animation */}
            <div
                className="absolute inset-0 bg-cover bg-center animate-ken-burns opacity-45 z-0"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')`
                }}
            />

            {/* Dark Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/70 z-0" />

            {/* Content Layer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl space-y-6">
                    <div className="inline-flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-sky-400 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm">
                        <ShieldCheck className="h-4 w-4" /> Certified Engineering Excellence
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                        Turning Client Briefs Into <span className="text-sky-400">Standing Buildings</span>
                    </h1>

                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                        Horizon Construct delivers precision architectural planning, structural engineering, and commercial building solutions across Nigeria.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-7 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-sky-500/25"
                        >
                            Start Your Project <ArrowRight className="h-5 w-5" />
                        </a>
                        <a
                            href="#portfolio"
                            className="inline-flex items-center justify-center border border-slate-700 bg-slate-800/40 backdrop-blur-sm hover:bg-slate-800 text-slate-200 px-7 py-3.5 rounded-xl font-semibold transition-all"
                        >
                            Explore Portfolio
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}