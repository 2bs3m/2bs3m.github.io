
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { services } from '../data/services';
import ProductCard from '../components/ProductCard';
import ServiceCard from '../components/ServiceCard';
import { BUSINESS_NAME, HERO_IMAGE_CLOUDINARY_URL } from '../constants'; // Import HERO_IMAGE_CLOUDINARY_URL

const HomePage: React.FC = () => {
  const featuredProducts = products.slice(0, 3); // Show first 3 products
  const featuredServices = services.slice(0, 2); // Show first 2 services

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative min-h-[300px] h-[45vh] md:h-[55vh] max-h-[600px] rounded-lg shadow-xl overflow-hidden flex items-center justify-center text-center text-white">
        {/* Background Image */}
        <img
          src={HERO_IMAGE_CLOUDINARY_URL}
          alt="Section d'accueil 2BS 3M"
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="eager" // Load hero image eagerly
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 p-6 flex flex-col items-center">
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-medium">
            Votre destination unique pour des produits de qualité et des services fiables.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/catalog"
              className="bg-white text-primary hover:bg-sky-100 font-semibold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105 text-lg"
            >
              Voir le Catalogue
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-lg shadow-md transition-colors text-lg"
            >
              Nos Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      {featuredProducts.length > 0 && (
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center text-slate-700 dark:text-slate-200">Produits Populaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/catalog" className="text-primary dark:text-primary-light hover:underline font-medium">
              Voir tous les produits &rarr;
            </Link>
          </div>
        </section>
      )}

      {/* Featured Services Section */}
      {featuredServices.length > 0 && (
        <section className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-8 text-center text-slate-700 dark:text-slate-100">Nos Services Clés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="text-primary dark:text-primary-light hover:underline font-medium">
              Découvrir tous nos services &rarr;
            </Link>
          </div>
        </section>
      )}

      {/* Call to Action - About Us */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-semibold mb-4 text-slate-700 dark:text-slate-200">Qui sommes-nous ?</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-6">
          {BUSINESS_NAME} s'engage à vous offrir le meilleur en matière de produits et services, avec une attention particulière à la satisfaction client.
        </p>
        <Link
            to="/about"
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors text-lg"
          >
            En savoir plus
          </Link>
      </section>
    </div>
  );
};

export default HomePage;
