import React from 'react';
import { BUSINESS_NAME, CONTACT_EMAIL } from '../constants';

const TermsOfUsePage: React.FC = () => {
  return (
    <div className="prose dark:prose-invert max-w-none bg-white dark:bg-slate-800 p-6 md:p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Conditions d'Utilisation</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

      <p>
        Bienvenue sur le site de {BUSINESS_NAME} (le "Site"). En accédant ou en utilisant notre Site, vous acceptez d'être lié par ces Conditions d'Utilisation ("Conditions"). Si vous n'acceptez pas toutes ces conditions, n'utilisez pas ce Site.
      </p>

      <h2>1. Utilisation du Site</h2>
      <p>
        Vous acceptez de ne pas utiliser le Site à des fins illégales ou interdites par ces Conditions.
      </p>
      
      <h2>3. Produits et Services</h2>
      <p>
        Tous les produits et services disponibles sur le Site sont sujets à disponibilité. Nous nous réservons le droit de limiter les quantités de tout produit ou service que nous offrons. Toutes les descriptions de produits ou les prix des produits sont susceptibles d'être modifiés à tout moment sans préavis, à notre seule discrétion.
      </p>
      <p>
        Nous nous efforçons d'afficher aussi précisément que possible les couleurs et les images de nos produits. Nous ne pouvons garantir que l'affichage de n'importe quelle couleur sur votre écran d'ordinateur sera précis.
      </p>

      <h2>4. Commandes et Paiements</h2>
      <p>
        En passant une commande sur notre Site, vous déclarez que vous avez l'âge légal pour conclure des contrats contraignants. Actuellement, les commandes sont initiées via le Site et finalisées par communication WhatsApp pour le paiement et la livraison/retrait. Les conditions spécifiques de paiement et de livraison seront communiquées lors de cette interaction.
      </p>

      <h2>5. Propriété Intellectuelle</h2>
      <p>
        Le Site et l'ensemble de son contenu de base, y compris, mais sans s'y limiter, le logos et l'image d'accueil, sont la propriété de {BUSINESS_NAME} ou de ses fournisseurs de contenu et sont protégés par les lois internationales sur le droit d'auteur.
      </p>

      <h2>6. Limitation de Responsabilité</h2>
      <p>
        {BUSINESS_NAME} ne sera pas responsable des dommages directs, indirects, accessoires, spéciaux ou consécutifs résultant de l'utilisation ou de l'incapacité d'utiliser le Site ou les informations, le contenu, les matériaux, les produits ou les services inclus sur ou autrement mis à votre disposition par le biais du Site.
      </p>

      <h2>7. Modifications des Conditions</h2>
      <p>
        Nous nous réservons le droit de modifier ces Conditions à tout moment. Votre utilisation continue du Site après de telles modifications constitue votre acceptation des nouvelles Conditions. Il est de votre responsabilité de consulter régulièrement ces Conditions.
      </p>

      <h2>8. Droit Applicable</h2>
      <p>
        Ces Conditions et toute relation entre vous et {BUSINESS_NAME} seront régies par les lois du Sénégal, sans égard à ses dispositions relatives aux conflits de lois.
      </p>

      <h2>9. Contactez-nous</h2>
      <p>
        Si vous avez des questions concernant ces Conditions d'Utilisation, veuillez nous contacter à :
        <br />
        {BUSINESS_NAME}
        <br />
        Email : <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>
      </p>
    </div>
  );
};

export default TermsOfUsePage;
