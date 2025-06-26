import React from 'react';
import ContactForm from '../components/ContactForm';
import { BUSINESS_NAME, GOOGLE_MAPS_IFRAME_SRC, GOOGLE_MAPS_ITINERARY_LINK, CONTACT_EMAIL, CONTACT_PHONE } from '../constants';
import { MailIcon, PhoneIcon, MapPinIcon } from '../components/icons/SocialMediaIcons';

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-2">À Propos de {BUSINESS_NAME}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Apprenez-en plus sur notre entreprise, notre mission et comment nous pouvons vous servir.
        </p>
      </header>

      <section className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-primary dark:text-primary-light mb-4">À Propos</h2>
        <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
          Fondée avec la passion de fournir des solutions pratiques et accessibles, {BUSINESS_NAME} s'efforce d'offrir une gamme diversifiée de produits et services pour répondre aux besoins variés de nos clients.
        </p>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          Notre engagement envers la qualité, la fiabilité et un excellent service client est au cœur de tout ce que nous faisons. Que vous ayez besoin d'un transfert d'argent rapide, de fournitures de bureau, ou de services d'impression, {BUSINESS_NAME} est là pour vous aider.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-primary dark:text-primary-light mb-6">Nous Trouver</h2>
          <div className="map-container rounded-md overflow-hidden shadow-md mb-6">
            <iframe
              src={GOOGLE_MAPS_IFRAME_SRC}
              title="Notre Emplacement"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <a
            href={GOOGLE_MAPS_ITINERARY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Obtenir l'itinéraire
          </a>
          <div className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
            <p className="flex items-center">
              <MapPinIcon className="w-5 h-5 mr-3 text-primary dark:text-primary-light flex-shrink-0" /> {GOOGLE_MAPS_IFRAME_SRC.includes("2BS%203M") ? "HLM Grand Yoff, en face de la CBAO" : "Adresse à confirmer"}
            </p>
            <p className="flex items-center">
              <PhoneIcon className="w-5 h-5 mr-3 text-primary dark:text-primary-light flex-shrink-0" /> 
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="hover:text-primary dark:hover:text-primary-light">{CONTACT_PHONE}</a>
            </p>
             <p className="flex items-center">
              <MailIcon className="w-5 h-5 mr-3 text-primary dark:text-primary-light flex-shrink-0" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary dark:hover:text-primary-light">{CONTACT_EMAIL}</a>
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-primary dark:text-primary-light mb-6">Contactez-Nous</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
