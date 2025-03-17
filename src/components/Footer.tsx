import React from 'react';

interface FooterLink {
  label: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  { label: 'O škole', href: '#o-skole' },
  { label: 'Pro studenty', href: '#pro-studenty' },
  { label: 'Pro uchazeče', href: '#pro-uchazece' },
  { label: 'Život školy', href: '#zivot-skoly' },
  { label: 'Historie', href: '#historie' },
  { label: 'Odkazy', href: '#odkazy' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Gymnázium Jaroška
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            <a href="tel:+420543212345" className="hover:text-white transition-colors">
              +420 543 212 345
            </a>
            <span className="mx-2">|</span>
            <a href="mailto:info@jaroska.cz" className="hover:text-white transition-colors">
              info@jaroska.cz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}; 