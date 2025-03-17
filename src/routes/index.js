import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Hero } from '../components/Hero';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { StudentTestimonials } from '../components/StudentTestimonials';
import { StudentSuccess } from '../components/StudentSuccess';
import { OpenDayCTA } from '../components/OpenDayCTA';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
export default function Home() {
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs("main", { children: [_jsx(Hero, {}), _jsx(WhyChooseUs, {}), _jsx(StudentTestimonials, {}), _jsx(StudentSuccess, {}), _jsx(OpenDayCTA, {})] }), _jsx(Footer, {})] }));
}
