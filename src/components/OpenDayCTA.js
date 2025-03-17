import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
export const OpenDayCTA = () => {
    const [showEmailInput, setShowEmailInput] = useState(false);
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the email submission
        console.log('Email submitted:', email);
        setEmail('');
        setShowEmailInput(false);
    };
    return (_jsx("section", { id: "open-day", className: "pb-40 pt-20 bg-white", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [_jsx(AnimatedSection, { children: _jsx("h2", { className: "text-4xl font-bold mb-6 text-gray-900", children: "Den otev\u0159en\u00FDch dve\u0159\u00ED" }) }), _jsx(AnimatedSection, { delay: 200, children: _jsx("p", { className: "text-xl mb-8 text-gray-700", children: "P\u0159ij\u010Fte se pod\u00EDvat na na\u0161i \u0161kolu a seznamte se s prost\u0159ed\u00EDm, u\u010Diteli a studenty. T\u011B\u0161\u00EDme se na v\u00E1s!" }) }), _jsx(AnimatedSection, { delay: 400, children: _jsxs("div", { className: "bg-red-700 p-8 rounded-lg text-white shadow-lg relative overflow-hidden", children: [_jsx("h3", { className: "text-2xl font-semibold mb-4", children: "Kdy a kde?" }), _jsx("p", { className: "text-lg mb-4", children: "15. listopadu 2025, 9:00 - 17:00" }), _jsx("p", { className: "text-lg mb-6", children: "Gymn\u00E1zium Jaro\u0161ka, Brno" }), _jsx("div", { className: "relative h-[60px]", children: !showEmailInput ? (_jsx("button", { onClick: () => setShowEmailInput(true), className: "inline-block bg-white text-red-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors", children: "Chci dostat upom\u00EDnku" })) : (_jsx("form", { onSubmit: handleSubmit, className: "absolute inset-0 animate-slide-in", children: _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center h-full", children: [_jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "V\u00E1\u0161 email", required: true, className: "px-6 py-3 rounded-full text-gray-900 w-full sm:w-auto bg-white focus:outline-none focus:ring-2 focus:ring-white/50" }), _jsx("button", { type: "submit", className: "bg-white text-red-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap", children: "Odeslat" }), _jsx("button", { type: "button", onClick: () => setShowEmailInput(false), className: "text-white hover:text-gray-200 transition-colors", children: "Zru\u0161it" })] }) })) })] }) })] }) }) }));
};
