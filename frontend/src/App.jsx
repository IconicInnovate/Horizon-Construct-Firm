// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Section Views
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';

/**
 * Main Application Routing Component
 * Defines separate routes for Home, Services, Portfolio, Process, and Contact pages
 * while maintaining a persistent Navbar and Footer layout.
 */
export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
                {/* Persistent Header Navigation */}
                <Navbar />

                {/* Dynamic Route Content */}
                <main className="flex-grow">
                    <Routes>
                        {/* Landing / Home Route combining key sections */}
                        <Route
                            path="/"
                            element={
                                <>
                                    <Hero />
                                    <Services />
                                    <Portfolio />
                                    <Process />
                                    <Contact />
                                </>
                            }
                        />

                        {/* Dedicated Individual Page Routes */}
                        <Route path="/services" element={<div className="py-12"><Services /></div>} />
                        <Route path="/portfolio" element={<div className="py-12"><Portfolio /></div>} />
                        <Route path="/process" element={<div className="py-12"><Process /></div>} />
                        <Route path="/contact" element={<div className="py-12"><Contact /></div>} />
                    </Routes>
                </main>

                {/* Persistent Footer */}
                <Footer />
            </div>
        </Router>
    );
}