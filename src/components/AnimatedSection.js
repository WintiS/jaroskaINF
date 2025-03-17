import { jsx as _jsx } from "react/jsx-runtime";
import { useInView } from 'react-intersection-observer';
export const AnimatedSection = ({ children, className = '', delay = 0 }) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    return (_jsx("div", { ref: ref, className: `${className} transition-all duration-1000 ${inView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'}`, style: { transitionDelay: `${delay}ms` }, children: children }));
};
