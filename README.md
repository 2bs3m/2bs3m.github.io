
# Bienvenue sur le Site E-commerce 2BS 3M

## 1. Personnalisation du Contenu (pour non-développeurs)

La plupart du contenu textuel et des données (produits, services) peut être mis à jour en modifiant des fichiers spécifiques sans avoir besoin de connaissances approfondies en codage.

### Informations Générales du Site

*   **Nom de l'entreprise:** Modifier dans `constants.ts` (variable `BUSINESS_NAME`).
*   **Textes du Footer (adresse, email, téléphone):** Modifier dans `constants.ts` (variables `CONTACT_EMAIL`, `CONTACT_PHONE`, `ADDRESS`).
*   **Liens des réseaux sociaux:** Modifier dans `constants.ts` (objet `SOCIAL_LINKS`).

### Produits du Catalogue

*   **Fichier:** `data/products.ts`
*   **Format:** Chaque produit est un objet dans un tableau.
    ```typescript
    // Exemple de produit dans data/products.ts
    {
      id: '1',
      name_fr: 'Nom du Produit en Français',
      description_fr: 'Description détaillée du produit.',
      price: 10000, // Prix en FCFA (ou votre devise)
      imageUrl: 'https://picsum.photos/seed/product1/400/300', // URL de l'image (voir section Cloudinary)
      category_fr: 'Catégorie A',
    }
    ```
*   **Pour ajouter/modifier/supprimer un produit:** Modifiez ce tableau. Assurez-vous que chaque `id` est unique.
*   **Images:** Voir la section [Gestion des Images avec Cloudinary](#gestion-des-images-avec-cloudinary).

### Services Proposés

*   **Fichier:** `data/services.ts`
*   **Format:** Similaire aux produits.
    ```typescript
    // Exemple de service dans data/services.ts
    {
      id: 's1',
      title_fr: 'Nom du Service en Français',
      description_fr: 'Description du service.',
      imageUrl: 'https://picsum.photos/seed/service1/200/200', // URL de l'image
      category_fr: 'Catégorie de Service', // Optionnel
    }
    ```
*   **Images:** Les images de service sont prévues pour être des icônes ou petites illustrations. Assurez-vous qu'elles s'affichent bien dans les carrés prévus.

### Contenu des Pages Statiques (À Propos, FAQ, etc.)

*   **Page À Propos (`pages/AboutPage.tsx`):**
    *   Modifiez directement le texte JSX dans ce fichier.
    *   **Carte Google Maps:** L'iframe est déjà intégrée. Si vous devez la changer, remplacez le `src` de l'iframe.
    *   **Lien Itinéraire:** Recherchez `YOUR_ITINERARY_LINK_HERE` et remplacez-le par le lien Google Maps pour l'itinéraire.
    *   **Formulaire de Contact (Formspree):** Dans `components/ContactForm.tsx`, remplacez `YOUR_FORMSPREE_ENDPOINT_HERE` par votre propre endpoint Formspree.
*   **Page FAQ (`pages/FaqPage.tsx` et `data/faqData.ts`):**
    *   Les questions et réponses sont dans `data/faqData.ts`. Modifiez ce fichier pour mettre à jour la FAQ.
    ```typescript
    // Exemple dans data/faqData.ts
    {
      question_fr: 'Votre question ici ?',
      answer_fr: 'Votre réponse ici.',
    }
    ```
*   **Politique de Confidentialité (`pages/PrivacyPolicyPage.tsx`) et Conditions d'Utilisation (`pages/TermsOfUsePage.tsx`):**
    *   Modifiez directement le texte JSX dans ces fichiers.

### Coordonnées et Liens Sociaux

*   **Numéro WhatsApp pour les commandes:** Dans `pages/CartPage.tsx`, recherchez `YOUR_WHATSAPP_NUMBER_HERE` et remplacez-le par le numéro de téléphone WhatsApp de votre service client (sans le `+` ou `00` au début, ex: `221771234567`).
*   **Email et Téléphone dans le Footer:** Gérés via `constants.ts`.
*   **Liens des réseaux sociaux dans le Footer:** Gérés via `constants.ts`.

## 2. Gestion des Images avec Cloudinary

Actuellement, les images utilisent des placeholders (`https://picsum.photos`). Pour un site professionnel, il est recommandé d'utiliser un service de gestion d'images comme Cloudinary.

1.  **Créez un compte Cloudinary:** Allez sur [cloudinary.com](https://cloudinary.com/) et inscrivez-vous (un compte gratuit est souvent suffisant pour commencer).
2.  **Téléversez vos images:** Dans votre tableau de bord Cloudinary, allez dans "Media Library" et téléversez vos images de produits et services.
3.  **Obtenez les URLs des images:** Une fois une image téléversée, Cloudinary vous fournira une URL sécurisée pour cette image. Copiez cette URL.
4.  **Mettez à jour les URLs dans vos fichiers de données:**
    *   Pour les produits: Ouvrez `data/products.ts` et remplacez les `imageUrl` par les URLs Cloudinary correspondantes.
    *   Pour les services: Ouvrez `data/services.ts` et faites de même.
5.  **Optimisation (Optionnel):** Cloudinary permet de transformer les images à la volée (redimensionnement, recadrage, compression) en modifiant l'URL. Par exemple, pour redimensionner une image à 300px de large : `https://res.cloudinary.com/<votre_cloud_name>/image/upload/w_300/<votre_image_id>.<format>`. Cela peut aider à optimiser les performances du site.


## 3. Optimisation pour les Moteurs de Recherche (SEO)

  **Attributs `alt` pour les Images:** Toutes les images devraient avoir des attributs `alt` descriptifs. C'est déjà en place pour les produits et services, mais vérifiez que les descriptions sont pertinentes.

## 4. Déploiement sur GitHub Pages

Ce projet est nommé `2bs3m.github.io`, ce qui suggère un déploiement en tant que site utilisateur/organisation GitHub Pages.

1.  **Prérequis:**
    *   Votre code doit être sur un dépôt GitHub nommé `username.github.io` (où `username` est votre nom d'utilisateur GitHub, ici `2bs3m`).
    *   La branche principale (souvent `main` ou `master`) sera celle déployée.

2.  **Build de l'Application:**
    *   Assurez-vous d'avoir Node.js et npm installés.
    *   Installez les dépendances : `npm install`.
    *   Modifiez le fichier `package.json`. Ajoutez une propriété `homepage` :
        ```json
        "homepage": "https://2bs3m.github.io/",
        ```
    *   Construisez l'application pour la production : `npm run build`. Cela créera un dossier `build` avec les fichiers statiques optimisés.

3.  **Déploiement Manuel (simple pour les sites utilisateur/organisation):**
    *   Copiez le contenu du dossier `build` à la racine de votre dépôt `2bs3m.github.io` sur la branche `main`.
    *   Poussez les changements vers GitHub :
        ```bash
        git add .
        git commit -m "Deploy website"
        git push origin main
        ```
    *   GitHub Pages devrait automatiquement servir les fichiers depuis la racine de cette branche.

4.  **Déploiement Automatisé avec GitHub Actions (Recommandé):**
    *   Créez un fichier `.github/workflows/deploy.yml` dans votre dépôt :
        ```yaml
        name: Deploy to GitHub Pages

        on:
          push:
            branches:
              - main # Ou la branche que vous utilisez pour la production
          workflow_dispatch:

        permissions:
          contents: read
          pages: write
          id-token: write

        jobs:
          build:
            runs-on: ubuntu-latest
            steps:
              - name: Checkout
                uses: actions/checkout@v4
              - name: Setup Node.js
                uses: actions/setup-node@v4
                with:
                  node-version: '18' # Ou la version que vous utilisez
                  cache: 'npm'
              - name: Install dependencies
                run: npm install
              - name: Build
                run: npm run build
                # Assurez-vous que votre script de build génère les fichiers dans un dossier (ex: 'build' ou 'dist')
              - name: Setup Pages
                uses: actions/configure-pages@v4
              - name: Upload artifact
                uses: actions/upload-pages-artifact@v3
                with:
                  path: './build' # Ou './dist', le dossier de sortie de votre build

          deploy:
            needs: build
            runs-on: ubuntu-latest
            environment:
              name: github-pages
              url: ${{ steps.deployment.outputs.page_url }}
            steps:
              - name: Deploy to GitHub Pages
                id: deployment
                uses: actions/deploy-pages@v4
        ```
    *   Dans les paramètres de votre dépôt GitHub (`Settings` > `Pages`), configurez la source de déploiement sur `GitHub Actions`.
    *   Chaque push sur la branche `main` déclenchera automatiquement le build et le déploiement.
