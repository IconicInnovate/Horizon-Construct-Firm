import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            setSubmitted(true);
        }
    };

    return (
        <section id="contact" className="py-20 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <h2 className="text-3xl font-bold text-slate-900 text-center">Request a Consultation</h2>
                <p className="text-slate-600 text-center mt-2 mb-8">Tell us about your project requirements or site specifications.</p>

                {submitted ? (
                    <div className="p-6 bg-emerald-50 text-emerald-800 rounded-lg flex items-center justify-center gap-3">
                        <CheckCircle className="h-6 w-6 text-emerald-600" />
                        <span className="font-semibold">Thank you! Your brief request has been received. Our team will contact you shortly.</span>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Project Brief</label>
                            <textarea
                                required
                                rows={4}
                                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
                                placeholder="Describe your site location, project type, and proposed scope..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 px-6 rounded-md font-semibold transition-colors flex items-center justify-center gap-2"
                        >
                            Submit Brief <Send className="h-4 w-4" />
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}