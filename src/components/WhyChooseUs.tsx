import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
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

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-40 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Proč si vybrat nás?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-red-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-white"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-red-50">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 