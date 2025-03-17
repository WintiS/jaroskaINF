import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatedSection } from './AnimatedSection';
const features = [
    {
        title: 'Kvalitní vzdělávání',
        description: 'Poskytujeme komplexní vzdělání s důrazem na moderní metody výuky.',
        icon: '🎓',
    },
    {
        title: 'Moderní vybavení',
        description: 'Škola je vybavena nejnovějšími technologiemi a učebními pomůckami.',
        icon: '💻',
    },
    {
        title: 'Skvělé kuchařky',
        description: 'Naše kuchařky jsou skvělé a vždy nám naloží jídlo s úsměvem.',
        icon: '👤',
    },
    {
        title: 'Bohatá historie',
        description: 'Tradice a zkušenosti v oblasti vzdělávání od roku 1898.',
        icon: '📚',
    },
];
export const WhyChooseUs = () => {
    return (_jsx("section", { className: "py-40 bg-white", id: "pro-uchazece", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx(AnimatedSection, { children: _jsx("h2", { className: "text-4xl font-bold text-center mb-12 text-gray-900", children: "Pro\u010D si vybrat n\u00E1s?" }) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: features.map((feature, index) => (_jsx(AnimatedSection, { delay: index * 200, children: _jsxs("div", { className: "bg-red-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-white md:h-[240px] md:flex md:flex-col md:justify-center", children: [_jsx("div", { className: "text-4xl mb-4", children: feature.icon }), _jsx("h3", { className: "text-xl font-semibold mb-2", children: feature.title }), _jsx("p", { className: "text-red-50", children: feature.description })] }) }, index))) })] }) }));
};
