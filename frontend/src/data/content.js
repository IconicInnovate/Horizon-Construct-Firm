// frontend/src/data/content.js

export const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Process', href: '/process' },
    { name: 'Contact', href: '/contact' },
];

export const servicesData = [
    {
        id: 'architectural-design',
        title: 'Architectural Planning & Design',
        description: 'Comprehensive 3D modeling, structural design, and blueprint drafting tailored to client requirements.',
        iconName: 'Compass',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'commercial-construction',
        title: 'Commercial Construction',
        description: 'High-grade commercial buildings, retail hubs, and industrial facility development with safety guarantees.',
        iconName: 'Building2',
        image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'custom-residential',
        title: 'Custom Residential Builds',
        description: 'Turnkey luxury housing solutions built with durable materials and energy-efficient designs.',
        iconName: 'Home',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'ongoing-construction',
        title: 'Ongoing Construction Projects',
        description: 'Active on-site supervision, supply chain management, and execution monitoring.',
        iconName: 'HardHat',
        // Professional real-life scene of on-site construction supervision and engineering review
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    }
];

export const portfolioData = [
    {
        id: 1,
        title: 'Apex Plaza Tower',
        category: 'Commercial',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
        description: '14-story corporate workspace engineered with eco-friendly glass facades.'
    },
    {
        id: 2,
        title: 'Serengeti Luxury Villas',
        category: 'Residential',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
        description: 'Modern residential estate featuring integrated renewable solar power.'
    },
    {
        id: 3,
        title: 'Architectural Designs',
        category: 'Design & Planning',
        image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80',
        description: 'High-precision 3D architectural blueprints and structural schematics.'
    }
];

export const processSteps = [
    {
        step: '01',
        title: 'Brief Consultation',
        description: 'We review project requirements, site conditions, and budget parameters.'
    },
    {
        step: '02',
        title: 'Design & Engineering',
        description: 'Our team delivers structural schematics and 3D architectural renderings.'
    },
    {
        step: '03',
        title: 'Execution & Build',
        description: 'On-site construction begins under strict safety management.'
    },
    {
        step: '04',
        title: 'Handover & Inspection',
        description: 'Final quality audits are conducted before property delivery.'
    }
];