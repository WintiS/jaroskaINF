import React, { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

export const OpenDayCTA: React.FC = () => {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the email submission
    console.log('Email submitted:', email);
    setEmail('');
    setShowEmailInput(false);
  };

  return (
    <section id="open-day" className="pb-40 pt-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Den otevřených dveří</h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-xl mb-8 text-gray-700">
              Přijďte se podívat na naši školu a seznamte se s prostředím, učiteli a studenty.
              Těšíme se na vás!
            </p>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <div className="bg-red-700 p-8 rounded-lg text-white shadow-lg relative overflow-hidden">
              <h3 className="text-2xl font-semibold mb-4">Kdy a kde?</h3>
              <p className="text-lg mb-4">15. listopadu 2025, 9:00 - 17:00</p>
              <p className="text-lg mb-6">Gymnázium Jaroška, Brno</p>
              
              <div className="relative h-[60px]">
                {!showEmailInput ? (
                  <button
                    onClick={() => setShowEmailInput(true)}
                    className="inline-block bg-white text-red-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Chci dostat upomínku
                  </button>
                ) : (
                  <form onSubmit={handleSubmit} className="absolute inset-0 animate-slide-in">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center h-full">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Váš email"
                        required
                        className="px-6 py-3 rounded-full text-gray-900 w-full sm:w-auto bg-white focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                      <button
                        type="submit"
                        className="bg-white text-red-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
                      >
                        Odeslat
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowEmailInput(false)}
                        className="text-white hover:text-gray-200 transition-colors"
                      >
                        Zrušit
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}; 