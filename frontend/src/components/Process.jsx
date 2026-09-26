import React from 'react';
import { processSteps } from '../data/content';

export default function Process() {
    return (
        <section id="process" className="py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold">Our Execution Workflow</h2>
                    <p className="text-slate-400 mt-2">A structured engineering methodology guaranteeing project completion on time and within budget.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {processSteps.map((item) => (
                        <div key={item.step} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                            <span className="text-sky-400 font-extrabold text-3xl">{item.step}</span>
                            <h3 className="text-xl font-bold mt-4 mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}