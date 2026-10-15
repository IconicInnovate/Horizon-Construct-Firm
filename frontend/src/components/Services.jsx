// frontend/src/components/Services.jsx
import React from 'react';
import { servicesData } from '../data/content';
import { Compass, Building2, Home, HardHat } from 'lucide-react';

const iconMap = {
    Compass,
    Building2,
    Home,
    HardHat,
};

export default function Services() {
    return (
        <section className="py-16 bg-slate-50 text-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                        Our Core Expertise
                    </h2>
                    <p className="text-slate-600 text-base sm:text-lg">
                        Comprehensive construction services tailored from structural blueprint to final handover.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service) => {
                        const IconComponent = iconMap[service.iconName] || Building2;

                        return (
                            <div
                                key={service.id}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-200/80 overflow-hidden flex flex-col justify-between group"
                            >
                                {/* Top Section: Icon, Title, and Description */}
                                <div className="p-6 space-y-4">
                                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
                                        <IconComponent className="h-5 w-5" />
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Bottom Section: Image Placed Below Description */}
                                {service.image && (
                                    <div className="relative h-48 w-full overflow-hidden bg-slate-100 border-t border-slate-100 mt-auto">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}