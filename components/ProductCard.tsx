import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';
import ShoppingCartIcon from './icons/ShoppingCartIcon';
import ShareIcon from './icons/ShareIcon'; // Import ShareIcon
import { BUSINESS_NAME } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    // Optionally, add a toast notification here
    // alert(`${product.name_fr} ajouté au panier !`);
  };

  const handleShare = async () => {
    const productPageUrl = `${window.location.origin}${window.location.pathname === '/' ? '' : window.location.pathname}#/product/${product.id}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name_fr,
          text: `Découvrez ${product.name_fr} sur ${BUSINESS_NAME}! ${product.description_fr.substring(0,100)}...`,
          url: productPageUrl,
        });
        console.log('Produit partagé avec succès!');
      } catch (error) {
        console.error('Erreur lors du partage:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(productPageUrl);
        alert('Lien du produit copié dans le presse-papiers!');
      } catch (err) {
        console.error('Impossible de copier le lien:', err);
        alert('Impossible de copier le lien. Vous pouvez le copier manuellement: ' + productPageUrl);
      }
    }
  };


  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <Link to={`/product/${product.id}`} aria-label={`Voir les détails pour ${product.name_fr}`}>
        <div className="relative w-full h-48 md:h-56">
          <img 
            src={product.imageUrl} 
            alt={product.name_fr} 
            className="w-full h-full object-cover" 
            loading="lazy"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/product/${product.id}`} className="group" aria-label={`Voir les détails pour ${product.name_fr}`}>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-1 truncate group-hover:text-primary dark:group-hover:text-primary-light transition-colors" title={product.name_fr}>
            {product.name_fr}
          </h3>
        </Link>
        {product.category_fr && (
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{product.category_fr}</p>
        )}
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 flex-grow line-clamp-3">
          {product.description_fr}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <p className="text-xl font-bold text-primary dark:text-primary-light">
            {product.price.toLocaleString('fr-FR')} FCFA
          </p></br>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary-light transition-colors"
              aria-label={`Partager ${product.name_fr}`}
            >
              <ShareIcon className="h-5 w-5" />
            </button>
            <button
              onClick={handleAddToCart}
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-3 rounded-md transition-colors duration-300 flex items-center text-sm"
              aria-label={`Ajouter ${product.name_fr} au panier`}
            >
              <ShoppingCartIcon className="h-5 w-5 sm:mr-1 md:mr-2" />
              <span className="hidden sm:inline">Ajouter</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;