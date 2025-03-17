import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { AnimatedSection } from './AnimatedSection';
const stats = [
    {
        number: '98%',
        label: 'Úspěšnost u maturit',
        target: 98,
        suffix: '%'
    },
    {
        number: '95%',
        label: 'Úspěšnost přijetí na VŠ',
        target: 95,
        suffix: '%'
    },
    {
        number: '120+',
        label: 'Úspěšných absolventů ročně',
        target: 120,
        suffix: '+'
    },
    {
        number: '155+',
        label: 'Let tradice',
        target: 155,
        suffix: '+'
    },
];
export const StudentSuccess = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });
    const [counts, setCounts] = useState(stats.map(() => 0));
    useEffect(() => {
        if (inView) {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const interval = duration / steps;
            const timers = stats.map((stat, index) => {
                const increment = stat.target / steps;
                let current = 0;
                return setInterval(() => {
                    current += increment;
                    if (current >= stat.target) {
                        current = stat.target;
                        clearInterval(timers[index]);
                    }
                    setCounts(prev => {
                        const newCounts = [...prev];
                        newCounts[index] = Math.round(current);
                        return newCounts;
                    });
                }, interval);
            });
            return () => timers.forEach(timer => clearInterval(timer));
        }
    }, [inView]);
    return (_jsx("section", { className: "py-40 bg-white", ref: ref, children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx(AnimatedSection, { children: _jsx("h2", { className: "text-4xl font-bold text-center mb-12 text-gray-900", children: "Na\u0161e \u00FAsp\u011Bchy" }) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: stats.map((stat, index) => (_jsx(AnimatedSection, { delay: index * 200, children: _jsxs("div", { className: "text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors md:h-[155px]", children: [_jsxs("div", { className: "text-5xl font-bold mb-2 text-red-600", children: [counts[index], stat.suffix] }), _jsx("div", { className: "text-lg text-gray-700", children: stat.label })] }) }, index))) })] }) }));
};
