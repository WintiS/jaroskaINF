import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
const footerLinks = [
    { label: 'O škole', href: '#o-skole' },
    { label: 'Pro studenty', href: '#pro-studenty' },
    { label: 'Pro uchazeče', href: '#pro-uchazece' },
    { label: 'Život školy', href: '#zivot-skoly' },
    { label: 'Historie', href: '#historie' },
    { label: 'Odkazy', href: '#odkazy' },
];
export const Footer = () => {
    return (_jsx("footer", { className: "bg-gray-900 text-white py-16", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center", children: [_jsxs("div", { className: "text-gray-400 mb-4 md:mb-0", children: ["\u00A9 ", new Date().getFullYear(), " Gymn\u00E1zium Jaro\u0161ka"] }), _jsx("div", { className: "flex flex-wrap justify-center gap-6", children: footerLinks.map((link, index) => (_jsx("a", { href: link.href, className: "text-gray-400 hover:text-white transition-colors text-sm", children: link.label }, index))) }), _jsxs("div", { className: "text-gray-400 text-sm mt-4 md:mt-0", children: [_jsx("a", { href: "tel:+420543212345", className: "hover:text-white transition-colors", children: "+420 543 212 345" }), _jsx("span", { className: "mx-2", children: "|" }), _jsx("a", { href: "mailto:info@jaroska.cz", className: "hover:text-white transition-colors", children: "info@jaroska.cz" })] })] }) }) }));
};
