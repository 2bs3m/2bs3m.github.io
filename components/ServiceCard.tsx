import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center md:flex-row md:text-left md:space-x-6">
      <div className="service-image-container w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 rounded-lg overflow-hidden flex-shrink-0 bg-slate-200 dark:bg-slate-700">
        <img 
          src={service.imageUrl} 
          alt={service.title_fr} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">{service.title_fr}</h3>
        {service.category_fr && (
          <p className="text-xs text-primary dark:text-primary-light mb-2 font-medium uppercase tracking-wider">{service.category_fr}</p>
        )}
        <p className="text-slate-600 dark:text-slate-300 text-sm">
          {service.description_fr}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
