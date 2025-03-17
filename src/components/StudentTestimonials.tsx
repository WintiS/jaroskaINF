import React from 'react';

interface Testimonial {
  name: string;
  class: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Jan Novák',
    class: '4.A',
    text: 'Gymnázium Jaroška mi poskytlo skvělé zázemí pro rozvoj mých zájmů a přípravu na vysokou školu.',
    image: '/images/student1.jpg',
  },
  {
    name: 'Marie Svobodová',
    class: '3.B',
    text: 'Oceňuji individuální přístup učitelů a moderní vybavení školy.',
    image: '/images/student2.jpg',
  },
  {
    name: 'Petr Dvořák',
    class: '2.A',
    text: 'Škola nabízí skvělé možnosti pro rozvoj v oblasti sportu i vědy.',
    image: '/images/student3.jpg',
  },
];

export const StudentTestimonials: React.FC = () => {
  return (
    <section className="py-40 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Co říkají naši studenti</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gray-200"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.class}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 