import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_NAME, CONTACT_EMAIL, CONTACT_PHONE, ADDRESS, SOCIAL_LINKS } from '../constants';
import { FacebookIcon, InstagramIcon, XIcon, WhatsappIcon, LinkedinIcon, PhoneIcon, MailIcon, MapPinIcon } from './icons/SocialMediaIcons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { label: "Accueil", path: "/" },
        { label: "Catalogue", path: "/catalog" },
        { label: "Services", path: "/services" },
        { label: "À Propos", path: "/about" },
      ]
    },
    {
      title: "Légal",
      links: [
        { label: "Politique de Confidentialité", path: "/privacy-policy" },
        { label: "Conditions d'Utilisation", path: "/terms-of-use" },
        { label: "FAQ", path: "/faq" },
      ]
    },
  ];

  return (
    <footer className="bg-slate-800 dark:bg-slate-950 text-slate-300 dark:text-slate-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Business Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">{BUSINESS_NAME}</h3>
            <p className="flex items-start">
              <MapPinIcon className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-primary-light" />
              <span>{ADDRESS}</span>
            </p>
            <p className="flex items-center">
              <PhoneIcon className="w-5 h-5 mr-2 text-primary-light" />
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="hover:text-primary-light transition-colors">{CONTACT_PHONE}</a>
            </p>
            <p className="flex items-center">
              <MailIcon className="w-5 h-5 mr-2 text-primary-light" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary-light transition-colors">{CONTACT_EMAIL}</a>
            </p>
          </div>

          {/* Navigation & Legal Links */}
          {footerSections.map(section => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-primary-light transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.facebook && <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary-light transition-colors"><FacebookIcon className="w-6 h-6" /></a>}
              {SOCIAL_LINKS.instagram && <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary-light transition-colors"><InstagramIcon className="w-6 h-6" /></a>}
              {SOCIAL_LINKS.x && <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-primary-light transition-colors"><XIcon className="w-6 h-6" /></a>}
              {SOCIAL_LINKS.whatsapp && <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-primary-light transition-colors"><WhatsappIcon className="w-6 h-6" /></a>}
              {SOCIAL_LINKS.linkedin && <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary-light transition-colors"><LinkedinIcon className="w-6 h-6" /></a>}
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 dark:border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {currentYear} {BUSINESS_NAME}. Tous droits réservés.</p>
          <p className="mt-1">Powered by BlueDISH Tech.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;