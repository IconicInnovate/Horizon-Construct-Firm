import React from 'react';
import { servicesData } from '../data/content';
import { Compass, Building2, Home, HardHat } from 'lucide-react';

const iconMap = {
    Compass: Compass,
    Building2: Building2,
    Home: Home,
    HardHat: HardHat,
};

export default function Services() {
    return (
        <section id="services" className="py-20 bg-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Our Core Expertise</h2>
                    <p className="text-slate-600 mt-2">Comprehensive construction services tailored from structural blueprint to final handover.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service) => {
                        const Icon = iconMap[service.iconName] || Building2;
                        return (
                            <div key={service.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                                <div className="p-3 bg-sky-100 text-sky-600 w-fit rounded-lg mb-4">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                                <p className="text-slate-600 text-sm">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}