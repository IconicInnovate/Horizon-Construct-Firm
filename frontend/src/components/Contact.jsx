import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { sendQuote } from '../api/client';

const projectTypes = [
    { value: 'design', label: 'Design' },
    { value: 'construction', label: 'Construction' },
    { value: 'renovation', label: 'Renovation' },
    { value: 'advisory', label: 'Advisory' },
    { value: 'facility_management', label: 'Facility Management' },
    { value: 'property_trading', label: 'Property Trading' },
];

const emptyForm = {
    name: '',
    phone: '',
    email: '',
    project_type: 'construction',
    location: '',
    plot_size: '',
    budget_range: '',
    message: '',
};

const inputClass =
    'w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none';
const labelClass = 'block text-sm font-medium text-slate-700 mb-1';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState(emptyForm);

    const update = (field) => (e) =>
        setFormData({ ...formData, [field]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setError('');
        try {
            await sendQuote(formData);
            setSubmitted(true);
            setFormData(emptyForm);
        } catch (err) {
            setError('Something went wrong. Please check your details and try again.');
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <h2 className="text-3xl font-bold text-slate-900 text-center">Request a Quote</h2>
                <p className="text-slate-600 text-center mt-2 mb-8">Tell us about your project and we will get back to you shortly.</p>

                {submitted ? (
                    <div className="p-6 bg-emerald-50 text-emerald-800 rounded-lg flex items-center justify-center gap-3">
                        <CheckCircle className="h-6 w-6 text-emerald-600" />
                        <span className="font-semibold">Thank you! Your request has been received. Our team will contact you shortly.</span>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className={labelClass}>Full Name</label>
                                <input type="text" required className={inputClass} placeholder="John Doe" value={formData.name} onChange={update('name')} />
                            </div>
                            <div>
                                <label className={labelClass}>Phone / WhatsApp</label>
                                <input type="tel" required className={inputClass} placeholder="+234 800 000 0000" value={formData.phone} onChange={update('phone')} />
                            </div>
                        </div>

                        <div>
                            <label className={labelClass}>Email Address (optional)</label>
                            <input type="email" className={inputClass} placeholder="john@example.com" value={formData.email} onChange={update('email')} />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className={labelClass}>Project Type</label>
                                <select className={inputClass} value={formData.project_type} onChange={update('project_type')}>
                                    {projectTypes.map((type) => (
                                        <option key={type.value} value={type.value}>{type.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className={labelClass}>Location</label>
                                <input type="text" className={inputClass} placeholder="e.g. Lekki, Lagos" value={formData.location} onChange={update('location')} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className={labelClass}>Plot Size</label>
                                <input type="text" className={inputClass} placeholder="e.g. 600 sqm" value={formData.plot_size} onChange={update('plot_size')} />
                            </div>
                            <div>
                                <label className={labelClass}>Budget Range</label>
                                <input type="text" className={inputClass} placeholder="e.g. 20M - 30M" value={formData.budget_range} onChange={update('budget_range')} />
                            </div>
                        </div>

                        <div>
                            <label className={labelClass}>Project Brief</label>
                            <textarea required rows={4} className={inputClass} placeholder="Describe your project and what you need..." value={formData.message} onChange={update('message')} />
                        </div>

                        {error && (
                            <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm">{error}</div>
                        )}

                        <button
                            type="submit"
                            disabled={sending}
                            className="w-full bg-sky-500 hover:bg-sky-600 disabled:opacity-60 text-white py-3 px-6 rounded-md font-semibold transition-colors flex items-center justify-center gap-2"
                        >
                            {sending ? 'Sending...' : 'Submit Request'} <Send className="h-4 w-4" />
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}