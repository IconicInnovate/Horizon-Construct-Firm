import React, { useState } from 'react';
import { portfolioData } from '../data/content';

export default function Portfolio() {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Commercial', 'Residential', 'Industrial'];

    const filteredProjects = filter === 'All'
        ? portfolioData
        : portfolioData.filter((item) => item.category === filter);

    return (
        <section id="portfolio" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
                        <p className="text-slate-600 mt-2">Explore our portfolio of delivered infrastructure solutions.</p>
                    </div>
                    <div className="flex gap-2 mt-6 md:mt-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === cat
                                        ? 'bg-sky-500 text-white'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                            <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                            <div className="p-5">
                                <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider">{project.category}</span>
                                <h3 className="text-lg font-bold text-slate-900 mt-1">{project.title}</h3>
                                <p className="text-slate-600 text-sm mt-2">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}