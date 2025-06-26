import React from 'react';
import { BUSINESS_NAME, CONTACT_EMAIL } from '../constants';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="prose dark:prose-invert max-w-none bg-white dark:bg-slate-800 p-6 md:p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Politique de Confidentialité</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

      <p>
        Bienvenue sur le site de {BUSINESS_NAME}. Nous nous engageons à protéger la vie privée de nos utilisateurs. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site web.
      </p>

      <h2>Collecte de vos informations</h2>
      <p>
        Nous pouvons collecter des informations vous concernant de différentes manières. Les informations que nous pouvons collecter sur le Site comprennent :
      </p>
      <ul>
        <li>
          <strong>Données personnelles :</strong> Informations personnellement identifiables, telles que votre nom, votre adresse e-mail, votre numéro de téléphone, que vous nous fournissez volontairement, lorsque vous passez une commande, ou lorsque vous choisissez de participer à diverses activités liées au Site, comme les formulaires de contact.
        </li>
        <li>
          <strong>Données de navigation :</strong> Informations que nos nous collectons automatiquement avec Google Analytics lorsque vous accédez au Site, telles que votre adresse IP, votre type de navigateur, votre système d'exploitation, vos temps d'accès et les pages que vous avez consultées directement avant et après avoir accédé au Site.
        </li>
        <li>
            <strong>Données du panier d'achat :</strong> Pour améliorer votre expérience d'achat, nous stockons le contenu de votre panier d'achat localement dans votre navigateur. Ces informations ne nous sont pas transmises tant que vous ne décidez pas de passer une commande via WhatsApp.
        </li>
      </ul>

      <h2>Utilisation de vos informations</h2>
      <p>
        Avoir des informations précises à votre sujet nous permet de vous offrir une expérience fluide, efficace et personnalisée. Plus précisément, nous pouvons utiliser les informations collectées à votre sujet via le Site pour :
      </p>
      <ul>
        <li>Gérer votre identité et vos commandes.</li>
        <li>Vous envoyer un e-mail concernant votre votre commande.</li>
        <li>Répondre à vos demandes de service client.</li>
        <li>Améliorer l'efficacité et le fonctionnement du Site.</li>
        <li>Vous informer des mises à jour du Site.</li>
      </ul>

      <h2>Divulgation de vos informations</h2>
      <p>
        Nous ne partagerons pas vos informations personnelles avec des tiers, sauf dans les situations suivantes :
      </p>
      <ul>
        <li><strong>Par obligation légale :</strong> Si la divulgation est nécessaire pour se conformer à une procédure légale, à une demande gouvernementale ou à une loi applicable.</li>
        <li><strong>Fournisseurs de services tiers :</strong> Nous pouvons partager vos informations avec des fournisseurs tiers qui effectuent des services pour nous ou en notre nom, l'analyse de données, la livraison d'e-mails, les services d'hébergement, et le service client.</li>
      </ul>

      <h2>Sécurité de vos informations</h2>
      <p>
        Nous utilisons des mesures de sécurité administratives, techniques et physiques pour aider à protéger vos informations personnelles. Bien que nous ayons pris des mesures raisonnables pour sécuriser les informations personnelles que vous nous fournissez, veuillez noter qu'aucune mesure de sécurité n'est parfaite ou impénétrable, et qu'aucune méthode de transmission de données ne peut être garantie contre toute interception ou autre type d'abus.
      </p>
       <p>
        Les données de votre panier sont stockées localement sur votre appareil. Bien que cela améliore la convivialité, veuillez noter que si d'autres personnes ont accès à votre appareil et à votre navigateur, elles pourraient potentiellement accéder à ces informations.
      </p>

      <h2>Politique concernant les enfants</h2>
      <p>
        Nous ne sollicitons pas sciemment d'informations auprès d'individus de moins de 18 ans et nous ne commercialisons pas sciemment auprès d'eux. Si nous apprenons que nous avons collecté des informations personnelles auprès d'un enfant d'individus de 18 ans sans le consentement parental vérifiable, nous supprimerons ces informations aussi rapidement que possible.
      </p>

      <h2>Vos droits concernant vos données</h2>
       <p>
        Vous avez le droit d'accéder, de corriger ou de supprimer vos données personnelles que nous détenons. Vous pouvez également vous opposer au traitement de vos données personnelles. Pour exercer ces droits, veuillez nous contacter à l'adresse ci-dessous.
      </p>
      
      <h2>Contactez-nous</h2>
      <p>
        Si vous avez des questions ou des commentaires concernant cette politique de confidentialité, veuillez nous contacter à :
        <br />
        {BUSINESS_NAME}
        <br />
        Email : <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
