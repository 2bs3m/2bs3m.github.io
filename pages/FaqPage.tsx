import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { FAQItem } from '../types';

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  toggleAccordion: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, toggleAccordion }) => {
  return (
    <div className="border-b border-slate-200 dark:border-slate-700">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 px-2 text-left font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-light transition-colors"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls={`faq-content-${item.id}`}
        >
          <span>{item.question_fr}</span>
          <svg
            className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id={`faq-content-${item.id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="py-5 px-4 text-slate-600 dark:text-slate-300 leading-relaxed">
          {item.answer_fr}
        </div>
      </div>
    </div>
  );
};


const FaqPage: React.FC = () => {
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-2">Questions Fréquemment Posées (FAQ)</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">Trouvez des réponses à vos interrogations.</p>
      </header>

      {faqData.length > 0 ? (
        <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg">
          {faqData.map((item) => (
            <AccordionItem 
              key={item.id} 
              item={item}
              isOpen={openAccordionId === item.id}
              toggleAccordion={() => toggleAccordion(item.id)}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-600 dark:text-slate-300">
          Aucune question fréquemment posée n'est disponible pour le moment.
        </p>
      )}
    </div>
  );
};

export default FaqPage;
