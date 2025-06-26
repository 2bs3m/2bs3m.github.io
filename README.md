
# Bienvenue sur le Site E-commerce 2BS 3M





## 1. Personnalisation du Contenu (pour non-développeurs)

### Produits du Catalogue

*   **Fichier:** `data/products.ts`
*   **Format:** Chaque produit est un objet dans un tableau.
    ```typescript
    // Exemple de produit dans data/products.ts
    {
      id: '1',
      name_fr: 'Nom du Produit en Français',
      description_fr: 'Description détaillée du produit.',
      price: 10000, // Prix en FCFA
      imageUrl: 'https://picsum.photos/seed/product1/400/300', // URL de l'image (voir section Cloudinary)
      category_fr: 'Catégorie A',
    }
    ```
*   **Pour ajouter/modifier/supprimer un produit:** Modifiez ce tableau. Assurez-vous que chaque `id` est unique.
*   **Images:** Voir la section [Gestion des Images avec Cloudinary](#gestion-des-images-avec-cloudinary).





## 2. Gestion des Images avec Cloudinary

1.  **Téléversez vos images:** Dans votre tableau de bord Cloudinary, allez dans "Media Library" et téléversez vos images de produits et services.
2.  **Obtenez les URLs des images:** Une fois une image téléversée, Cloudinary vous fournira une URL sécurisée pour cette image. Copiez cette URL.
3.  **Mettez à jour les URLs dans vos fichiers de données:**
    *   Pour les produits: Ouvrez `data/products.ts` et remplacez les `imageUrl` par les URLs Cloudinary correspondantes.




## 3. Mise à jour du site

Après modificaion du code source, entrer dans le terminal les commandes suivantes
        ```bash
        git add .
        git commit -m "Update website"
        git push origin main
        npm run build
        npm run deploy
        ```
