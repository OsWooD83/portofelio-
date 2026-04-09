# GUIDE D'UTILISATION - Concept Métal Varois

## 📋 TABLE DES MATIÈRES
1. Fichiers du site
2. Installation et déploiement
3. Informations à compléter
4. Optimisation SEO
5. Gestion des formulaires
6. Maintenance

---

## 1️⃣ FICHIERS DU SITE

### Fichiers HTML:
- **index.html** - Page d'accueil principale (Contient toutes les sections: accueil, catégories, services, devis)
- **mentions-legales.html** - Page des mentions légales obligatoires
- **politique-confidentialite.html** - Page de la politique de confidentialité et conditions générales
- **README.md** - Ce fichier

### Fichiers CSS:
- **styles.css** - Feuille de styles globale (responsive, responsive design, animations)

### Fichiers JavaScript:
- **script.js** - Interactivité du site (menu mobile, formulaire devis, animations)

### Dossier Images:
- **image/** - Contient vos images de catégories

---

## 2️⃣ INSTALLATION ET DÉPLOIEMENT

### Pour tester en local:
1. Ouvrez **index.html** dans un navigateur web
2. Tous les fichiers doivent être dans le même dossier
3. Les images doivent être dans le dossier **image/**

### Pour déployer en ligne:
1. Téléchargez tous les fichiers sur votre hébergeur
2. Assurez-vous que la structure des dossiers est respectée
3. Vérifiez que l'URL est correcte dans les mentions légales
4. Testez tous les liens et formulaires

### Hébergeurs recommandés (gratuit ou payant):
- Hosting OVH
- Hostinger
- Ionos
- 1and1
- Infomaniak
- Alwaysdata

---

## 3️⃣ INFORMATIONS À COMPLÉTER

### URGENT - À remplir avant de publier:

#### Dans **mentions-legales.html**, ligne ~30:
```html
<p><strong>SIRET :</strong> [Numéro SIRET à compléter]</p>
<p><strong>APE/NAF :</strong> [Code APE à compléter]</p>
<p><strong>Adresse du siège social :</strong> [Adresse complète]</p>
<p><strong>Responsable de la publication :</strong> [Nom du gérant]</p>
<p><strong>Email :</strong> contact@conceptmetalvarois.fr</p>
<p><strong>Téléphone :</strong> [Votre numéro]</p>
```

#### SIRET et APE:
- **SIRET** : Obtenu lors de l'immatriculation à la Chambre de Commerce
- **APE** : Code d'activité (ex: 2511Z pour ferronnerie)
- Les deux sont obligatoires en France pour une entreprise

#### Dans **index.html**, ligne ~135:
```html
<div class="contact-item">
    <h3>Téléphone</h3>
    <p><a href="tel:+33XXXXXXXXX">+33 X XX XX XX XX</a></p>
</div>

<div class="contact-item">
    <h3>Email</h3>
    <p><a href="mailto:contact@conceptmetalvarois.fr">contact@conceptmetalvarois.fr</a></p>
</div>
```

#### Dans **politique-confidentialite.html**:
- Mettre à jour l'adresse email et téléphone de contact
- Mettre à jour l'adresse postale

#### Footer (tous les fichiers):
Remplacer "À compléter" avec vos infos légales réelles

---

## 4️⃣ OPTIMISATION SEO

### Métadonnées (déjà optimisées):
- ✅ Titre unique et descriptif
- ✅ Meta description
- ✅ Keywords
- ✅ Canonical URL
- ✅ Open Graph (partage réseaux sociaux)

### Améliorations SEO à faire:
1. **Créer un sitemap.xml**:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://www.conceptmetalvarois.fr/</loc>
        <lastmod>2025-12-17</lastmod>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.conceptmetalvarois.fr/mentions-legales.html</loc>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://www.conceptmetalvarois.fr/politique-confidentialite.html</loc>
        <priority>0.5</priority>
    </url>
</urlset>
```

2. **Fichier robots.txt**:
```
User-agent: *
Allow: /
Sitemap: https://www.conceptmetalvarois.fr/sitemap.xml
```

3. **Google Analytics** (ajouter dans `<head>`):
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

4. **Google Search Console**:
- Inscrivez votre site: https://search.google.com/search-console
- Soumettez votre sitemap.xml

5. **Amélioration des images SEO**:
- Vos images ont déjà des attributs `alt` descriptifs
- Compressez les images pour gagner en vitesse (TinyPNG, Squoosh)

---

## 5️⃣ GESTION DES FORMULAIRES DE DEVIS

### Fonctionnement actuel:
Le formulaire utilise la fonction `mailto:` pour ouvrir le client email avec les données.

### Pour améliorer (optional):
1. **Avec PHP** (si votre hébergeur supporte):
Créer un fichier `traiter-devis.php`

2. **Avec un service tiers gratuit**:
- Formspree: https://formspree.io/
- Basin: https://usebasin.com/
- EmailJS: https://www.emailjs.com/

3. **Exemple avec Formspree** (à remplacer dans index.html):
```html
<form action="https://formspree.io/f/VOTRE_ID" method="POST">
    <input type="text" name="nom" required>
    <input type="email" name="email" required>
    <!-- etc -->
    <button type="submit">Envoyer</button>
</form>
```

---

## 6️⃣ MAINTENANCE

### Tâches régulières:
- ✅ Mettre à jour les prix et tarifs
- ✅ Mettre à jour les photos des projets
- ✅ Vérifier les liens externes
- ✅ Mettre à jour les horaires de contact
- ✅ Renouveler les mentions légales annuellement

### Sécurité:
- 🔒 Installez un certificat SSL (HTTPS) - Obligatoire en 2025
- 🔒 Mettez à jour votre hébergeur et serveur régulièrement
- 🔒 Faites des sauvegardes régulières

### Performance:
- ⚡ Compressez les images
- ⚡ Minifiez CSS et JavaScript (optionnel)
- ⚡ Testez sur GTmetrix.com

---

## 📱 RESPONSIVE DESIGN

Le site est **100% responsive** et s'adapte à:
- 📱 Téléphones (320px et +)
- 📱 Tablettes (600px et +)
- 💻 Ordinateurs de bureau (1200px et +)

Testez avec les outils:
- Chrome DevTools (F12)
- Responsive Design Checker: https://responsivedesignchecker.com/

---

## 🎨 PERSONNALISATION

### Couleurs:
Les couleurs principales se trouvent au début de **styles.css**:
```css
:root {
    --primary-color: #d4241f;      /* Rouge (portails, boutons) */
    --secondary-color: #1a1a1a;    /* Noir (texte principal) */
    --accent-color: #f0ad4e;       /* Orange (accents) */
    --light-bg: #f8f9fa;           /* Gris clair (arrière-plans) */
}
```

Modifiez ces valeurs pour changer tous les rouges en bleu, par exemple.

### Polices:
Actuellement utilise "Segoe UI" système. Pour changer:
```css
font-family: 'Votre Police', sans-serif;
```

---

## 📞 SUPPORT

Pour toute question ou problème:
1. Vérifiez que tous les fichiers sont dans le même dossier
2. Assurez-vous que les chemins des images sont corrects
3. Videz le cache du navigateur (Ctrl+Shift+R)
4. Testez dans un autre navigateur

---

## ✅ CHECKLIST AVANT PUBLICATION

- [ ] SIRET et SIREN remplis dans mentions-legales.html
- [ ] Adresse postale complète ajoutée
- [ ] Numéro de téléphone à jour
- [ ] Email de contact valide
- [ ] Toutes les images s'affichent correctement
- [ ] Formulaire de devis testé
- [ ] Liens internes vérifiés
- [ ] Site testé en responsive (mobile, tablette, PC)
- [ ] Mentions légales accessibles
- [ ] Politique de confidentialité accessible
- [ ] SSL/HTTPS activé
- [ ] Google Analytics configuré (optionnel mais recommandé)
- [ ] Sitemap.xml créé et soumis à Google

---

**Site créé le:** 17 décembre 2025
**Version:** 1.0
**Licence:** Tous droits réservés © Concept Métal Varois
