import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import ShoppingCartIcon from './icons/ShoppingCartIcon'; // Changed from ShoppingBagIcon

const CartIcon: React.FC = () => {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <Link to="/cart" className="relative text-white hover:text-sky-200 transition-colors" aria-label={`Panier, ${itemCount} articles`}>
      <ShoppingCartIcon className="h-6 w-6" /> {/* Changed from ShoppingBagIcon */}
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;