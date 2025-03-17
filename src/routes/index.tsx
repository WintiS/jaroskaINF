import React from 'react';
import { Hero } from '../components/Hero';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { StudentTestimonials } from '../components/StudentTestimonials';
import { StudentSuccess } from '../components/StudentSuccess';
import { OpenDayCTA } from '../components/OpenDayCTA';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <StudentTestimonials />
        <StudentSuccess />
        <OpenDayCTA />
      </main>
      <Footer />
    </>
  );
} 