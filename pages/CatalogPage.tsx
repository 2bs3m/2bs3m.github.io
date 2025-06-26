import React, { useState, useMemo } from 'react';
import { products as allProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const CatalogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const cats = new Set(allProducts.map(p => p.category_fr).filter(Boolean) as string[]);
    return ['all', ...Array.from(cats)];
  }, []);

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchesSearchTerm = product.name_fr.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                product.description_fr.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category_fr === selectedCategory;
      return matchesSearchTerm && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-2">Notre Catalogue de Produits</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">Découvrez notre sélection d'articles.</p>
      </header>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-white dark:bg-slate-800 rounded-lg shadow">
        <div className="flex-grow">
          <label htmlFor="search" className="sr-only">Rechercher des produits</label>
          <input
            type="text"
            id="search"
            placeholder="Rechercher par nom ou description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-primary focus:border-primary dark:bg-slate-700 dark:text-white"
          />
        </div>
        <div className="flex-shrink-0">
          <label htmlFor="category" className="sr-only">Filtrer par catégorie</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-auto px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-primary focus:border-primary dark:bg-slate-700 dark:text-white"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'Toutes les catégories' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-600 dark:text-slate-300 text-xl py-10">
          Aucun produit ne correspond à vos critères de recherche.
        </p>
      )}
    </div>
  );
};

export default CatalogPage;