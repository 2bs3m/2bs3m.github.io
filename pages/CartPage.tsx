import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { WHATSAPP_NUMBER, BUSINESS_NAME } from '../constants';
import TrashIcon from '../components/icons/TrashIcon'; // Updated import

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const total = getCartTotal();

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) {
      alert("Votre panier est vide. Ajoutez des articles avant de commander.");
      return;
    }

    let message = `Bonjour ${BUSINESS_NAME},\nJe souhaite commander les articles suivants :\n\n`;
    cartItems.forEach(item => {
      message += `- ${item.name_fr} (Quantité: ${item.quantity}) - ${item.price.toLocaleString('fr-FR')} FCFA x ${item.quantity} = ${(item.price * item.quantity).toLocaleString('fr-FR')} FCFA\n`;
    });
    message += `\nTotal de la commande : ${total.toLocaleString('fr-FR')} FCFA.\n\n`;
    message += `Merci de me confirmer la disponibilité et les modalités de paiement/retrait.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    if (WHATSAPP_NUMBER === "221771234567" || WHATSAPP_NUMBER === "YOUR_WHATSAPP_NUMBER_HERE") { // Check against default/placeholder
        alert("Le numéro WhatsApp pour les commandes n'est pas encore configuré par l'administrateur. Message généré (copiez-le si besoin) :\n\n" + message);
        console.log("WhatsApp URL (dev only):", whatsappUrl); // Log for dev if not configured
        // Don't open window if not configured to avoid errors or sending to wrong number
    } else {
        window.open(whatsappUrl, '_blank');
    }
  };


  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-semibold text-slate-800 dark:text-white mb-4">Votre Panier Est Vide</h1>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Parcourez notre catalogue pour trouver des produits intéressants.
        </p>
        <Link
          to="/catalog"
          className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Aller au Catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center text-slate-800 dark:text-white">Votre Panier</h1>
      
      <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-x-auto">
        <table className="w-full min-w-max">
          <thead className="bg-slate-100 dark:bg-slate-700">
            <tr>
              <th className="text-left py-3 px-4 font-semibold text-slate-600 dark:text-slate-300">Produit</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-600 dark:text-slate-300">Prix Unitaire</th>
              <th className="text-center py-3 px-4 font-semibold text-slate-600 dark:text-slate-300">Quantité</th>
              <th className="text-right py-3 px-4 font-semibold text-slate-600 dark:text-slate-300">Total Article</th>
              <th className="py-3 px-4 font-semibold text-slate-600 dark:text-slate-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id} className="border-b border-slate-200 dark:border-slate-700 last:border-b-0">
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <img src={item.imageUrl} alt={item.name_fr} className="w-16 h-16 object-cover rounded-md" />
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">{item.name_fr}</p>
                      {item.category_fr && <p className="text-xs text-slate-500 dark:text-slate-400">{item.category_fr}</p>}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-slate-700 dark:text-slate-300">
                  {item.price.toLocaleString('fr-FR')} FCFA
                </td>
                <td className="py-4 px-4 text-center">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 text-center border border-slate-300 dark:border-slate-600 rounded-md py-1 px-2 dark:bg-slate-700 focus:ring-primary focus:border-primary"
                    aria-label={`Quantité pour ${item.name_fr}`}
                  />
                </td>
                <td className="py-4 px-4 text-right font-medium text-slate-800 dark:text-white">
                  {(item.price * item.quantity).toLocaleString('fr-FR')} FCFA
                </td>
                <td className="py-4 px-4 text-center">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors"
                    aria-label={`Retirer ${item.name_fr} du panier`}
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <button
            onClick={clearCart}
            className="text-sm text-slate-500 hover:text-red-600 dark:hover:text-red-400 underline transition-colors"
        >
            Vider le panier
        </button>
        <div className="w-full md:w-auto md:max-w-sm bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-slate-700 dark:text-white">Récapitulatif de la Commande</h2>
          <div className="flex justify-between mb-2 text-slate-600 dark:text-slate-300">
            <span>Sous-total</span>
            <span>{total.toLocaleString('fr-FR')} FCFA</span>
          </div>
          {/* Add shipping/taxes here if needed */}
          <div className="flex justify-between font-bold text-2xl mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white">
            <span>Total</span>
            <span>{total.toLocaleString('fr-FR')} FCFA</span>
          </div>
          <button
            onClick={handleWhatsAppOrder}
            className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center text-lg"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.47.074-.742.346-.272.272-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            Commander via WhatsApp
          </button>
           { (WHATSAPP_NUMBER === "221771234567" || WHATSAPP_NUMBER === "YOUR_WHATSAPP_NUMBER_HERE") && (
                <p className="mt-2 text-xs text-amber-600 dark:text-amber-400 text-center">
                
                </p>
            )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;