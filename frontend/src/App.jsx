import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Portfolio />
                <Process />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}