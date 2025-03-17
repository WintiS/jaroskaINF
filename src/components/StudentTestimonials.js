import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatedSection } from './AnimatedSection';
const testimonials = [
    {
        name: 'Jan Novák',
        class: '4.A',
        text: 'Gymnázium Jaroška mi poskytlo skvělé zázemí pro rozvoj mých zájmů a přípravu na vysokou školu.',
        image: 'https://i.pravatar.cc/150?img=8',
    },
    {
        name: 'Marie Svobodová',
        class: '3.B',
        text: 'Oceňuji individuální přístup učitelů a moderní vybavení školy.',
        image: 'https://i.pravatar.cc/150?img=5',
    },
    {
        name: 'Petr Dvořák',
        class: '2.A',
        text: 'Škola nabízí skvělé možnosti pro rozvoj v oblasti sportu i vědy.',
        image: 'https://i.pravatar.cc/150?img=4',
    },
];
export const StudentTestimonials = () => {
    return (_jsx("section", { className: "py-40 bg-gray-100", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx(AnimatedSection, { children: _jsx("h2", { className: "text-4xl font-bold text-center mb-12 text-gray-900", children: "Co \u0159\u00EDkaj\u00ED na\u0161i studenti" }) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => (_jsx(AnimatedSection, { delay: index * 200, children: _jsxs("div", { className: "bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow md:h-[200px]", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx("img", { src: testimonial.image, alt: testimonial.name, className: "w-16 h-16 rounded-full object-cover mr-4 border-2 border-gray-200", loading: "lazy" }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold text-gray-900", children: testimonial.name }), _jsx("p", { className: "text-gray-600", children: testimonial.class })] })] }), _jsxs("p", { className: "text-gray-700 italic", children: ["\"", testimonial.text, "\""] })] }) }, index))) })] }) }));
};
