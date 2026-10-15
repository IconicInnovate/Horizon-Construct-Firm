// frontend/src/components/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/content';
import { ArrowRight } from 'lucide-react';

/**
 * Portfolio Component
 * Displays delivered infrastructure and architectural projects with category filtering.
 * Falls back to static content.js data if the backend API is unreachable.
 */
export default function Portfolio() {
    const [projects, setProjects] = useState(portfolioData);
    const [filter, setFilter] = useState('All');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Attempt to fetch from Django backend API if configured, falling back gracefully to static content
        async function fetchProjects() {
            try {
                const apiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/projects/';
                const response = await fetch(apiUrl);
                if (response.ok) {
                    const data = await response.json();
                    if (data && data.length > 0) {
                        setProjects(data);
                    }
                }
            } catch (err) {
                // Fallback to static content data if backend is offline or unavailable on Vercel
                console.log('Using static portfolio content fallback.');
            } finally {
                setLoading(false);
            }
        }
        fetchProjects();
    }, []);

    const categories = ['All', 'Residential', 'Commercial', 'Design & Planning'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category && p.category.toLowerCase().includes(filter.toLowerCase()));

    return (
        <section className="py-16 bg-slate-50 text-slate-900 min-h-[75vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="space-y-3">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                            Featured Projects
                        </h2>
                        <p className="text-slate-600 text-base sm:text-lg">
                            Explore our portfolio of delivered infrastructure solutions.
                        </p>
                    </div>

                    {/* Category Filter Buttons */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === cat
                                        ? 'bg-sky-500 text-white shadow-sm'
                                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                {loading ? (
                    <div className="text-center py-20 text-slate-500">Loading projects...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id || project.title}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-200/80 overflow-hidden flex flex-col justify-between group"
                            >
                                <div>
                                    {/* Project Image Header */}
                                    {project.image && (
                                        <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    )}

                                    {/* Project Details */}
                                    <div className="p-6 space-y-3">
                                        <span className="text-xs font-semibold tracking-wider text-sky-600 uppercase">
                                            {project.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-900">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}