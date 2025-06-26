import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products as allProducts } from '../data/products';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';
import { BUSINESS_NAME } from '../constants';
import ShoppingCartIcon from '../components/icons/ShoppingCartIcon';
import ShareIcon from '../components/icons/ShareIcon';
import ArrowLeftIcon from '../components/icons/ArrowLeftIcon'; // Assuming you'll create this

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    // Simulate fetching product data if it were from an API
    setIsLoading(true);
    const foundProduct = allProducts.find(p => p.id === productId);
    setProduct(foundProduct);
    setIsLoading(false);
  }, [productId]);

  useEffect(() => {
    if (product) {
      document.title = `${product.name_fr} - ${BUSINESS_NAME}`;
    } else if (!isLoading && !product) {
      document.title = `Produit non trouvé - ${BUSINESS_NAME}`;
    }
  }, [product, isLoading]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      // alert(`${product.name_fr} ajouté au panier!`);
    }
  };
  
  const handleShare = async () => {
    if (!product) return;
    const productPageUrl = window.location.href; // Already on the product page
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name_fr,
          text: `Découvrez ${product.name_fr} sur ${BUSINESS_NAME}! ${product.description_fr.substring(0,100)}...`,
          url: productPageUrl,
        });
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

  if (isLoading) {
    return <div className="text-center py-10">Chargement du produit...</div>;
  }

  if (!product) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold mb-4">Produit non trouvé</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Désolé, le produit que vous recherchez n'existe pas ou plus.
        </p>
        <Link
          to="/catalog"
          className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Retour au Catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <nav aria-label="breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
          <li><Link to="/" className="hover:underline">Accueil</Link></li>
          <li><span>/</span></li>
          <li><Link to="/catalog" className="hover:underline">Catalogue</Link></li>
          <li><span>/</span></li>
          <li className="truncate" aria-current="page">{product.name_fr}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Product Image */}
        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg">
          <img 
            src={product.imageUrl} 
            alt={product.name_fr} 
            className="w-full h-auto max-h-[500px] object-contain rounded-md" 
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white">{product.name_fr}</h1>
          
          {product.category_fr && (
            <span className="inline-block bg-primary-light/20 dark:bg-primary-dark/30 text-primary dark:text-primary-light text-xs font-semibold px-3 py-1 rounded-full">
              {product.category_fr}
            </span>
          )}

          <p className="text-3xl font-bold text-primary dark:text-primary-light">
            {product.price.toLocaleString('fr-FR')} FCFA
          </p>

          <div>
            <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-2">Description</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
              {product.description_fr}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <button
              onClick={handleAddToCart}
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center text-lg"
              aria-label={`Ajouter ${product.name_fr} au panier`}
            >
              <ShoppingCartIcon className="h-6 w-6 mr-2" />
              Ajouter au Panier
            </button>
            <button
              onClick={handleShare}
              className="w-full sm:w-auto bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center text-lg"
              aria-label={`Partager ${product.name_fr}`}
            >
              <ShareIcon className="h-6 w-6 mr-2" />
              Partager
            </button>
          </div>
          
          <div className="mt-8">
            <Link
              to="/catalog"
              className="inline-flex items-center text-primary dark:text-primary-light hover:underline"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Continuer les achats
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;