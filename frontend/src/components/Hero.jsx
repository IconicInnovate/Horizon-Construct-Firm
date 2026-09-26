import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative bg-slate-900 text-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl space-y-6">
                    <div className="inline-flex items-center gap-2 bg-slate-800 text-sky-400 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                        <ShieldCheck className="h-4 w-4" /> Certified Engineering Excellence
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                        Turning Client Briefs Into <span className="text-sky-400">Standing Buildings</span>
                    </h1>
                    <p className="text-slate-300 text-lg md:text-xl">
                        Horizon Construct delivers precision architectural planning, structural engineering, and commercial building solutions across Nigeria.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                        >
                            Start Your Project <ArrowRight className="h-5 w-5" />
                        </a>
                        <a
                            href="#portfolio"
                            className="inline-flex items-center justify-center border border-slate-700 hover:bg-slate-800 text-slate-200 px-6 py-3 rounded-lg font-semibold transition-colors"
                        >
                            Explore Portfolio
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}