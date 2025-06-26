import React from 'react';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import { Service } from '../types';

const ServicesPage: React.FC = () => {
  const servicesByCat: Record<string, Service[]> = services.reduce((acc, service) => {
    const category = service.category_fr || 'Autres';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);

  const categoryOrder = ["Transfert d'argent", "Autres"]; // Define preferred order

  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-2">Nos Services</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">Des solutions adaptées à vos besoins quotidiens.</p>
      </header>

      {categoryOrder.map(categoryName => {
        const currentServices = servicesByCat[categoryName];
        if (!currentServices || currentServices.length === 0) return null;

        return (
          <section key={categoryName}>
            <h2 className="text-2xl font-semibold text-primary dark:text-primary-light mb-6 border-b-2 border-primary/30 pb-2">
              {categoryName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
              {currentServices.map((service: Service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>
        );
      })}
       {/* Display any categories not in categoryOrder */}
       {Object.keys(servicesByCat).map(categoryName => {
        if (categoryOrder.includes(categoryName)) return null;
        const currentServices = servicesByCat[categoryName];
        if (!currentServices || currentServices.length === 0) return null;

        return (
          <section key={categoryName}>
            <h2 className="text-2xl font-semibold text-primary dark:text-primary-light mb-6 border-b-2 border-primary/30 pb-2">
              {categoryName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
              {currentServices.map((service: Service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ServicesPage;
