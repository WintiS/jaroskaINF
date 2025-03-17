import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const navItems = [
    { label: 'O škole', href: '#o-skole' },
    { label: 'Pro studenty', href: '#pro-studenty' },
    { label: 'Pro uchazeče', href: '#pro-uchazece' },
    { label: 'Život školy', href: '#zivot-skoly' },
    { label: 'Historie', href: '#historie' },
    { label: 'Odkazy', href: '#odkazy' },
];
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (_jsx("nav", { className: "fixed w-full bg-white shadow-md z-50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "flex justify-between items-center h-20", children: [_jsx("a", { href: "/", className: "text-xl font-bold text-red-600", children: "Gymn\u00E1zium Jaro\u0161ka" }), _jsx("div", { className: "hidden md:flex space-x-8", children: navItems.map((item) => (_jsx("a", { href: item.href, className: "text-gray-700 hover:text-red-600 transition-colors", children: item.label }, item.href))) }), _jsx("button", { className: "md:hidden text-gray-700", onClick: () => setIsOpen(!isOpen), children: _jsx("svg", { className: "w-6 h-6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", viewBox: "0 0 24 24", stroke: "currentColor", children: isOpen ? (_jsx("path", { d: "M6 18L18 6M6 6l12 12" })) : (_jsx("path", { d: "M4 6h16M4 12h16M4 18h16" })) }) })] }), isOpen && (_jsx("div", { className: "md:hidden", children: _jsx("div", { className: "px-2 pt-2 pb-3 space-y-1", children: navItems.map((item) => (_jsx("a", { href: item.href, className: "block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors", onClick: () => setIsOpen(false), children: item.label }, item.href))) }) }))] }) }));
};
