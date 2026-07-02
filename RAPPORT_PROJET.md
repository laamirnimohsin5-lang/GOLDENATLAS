# Rapport Maître du Projet : Golden Atlas Palace (Audit Complet)

## 1. Identité et Histoire du Monument
*   **Nom Officiel :** Golden Atlas Palace Errachidia.
*   **Patrimoine :** Établi en 1923, ce Palace est le témoin séculaire du luxe à Errachidia.
*   **Positionnement :** Le plus haut niveau d'hôtellerie marocaine combinant architecture traditionnelle (Zelliges, cèdre sculpté, marbre) et innovation technologique.

---

## 2. Portail Client & Frontend

### A. Expérience Immersive
*   **Visualisation 3D :** Utilisation de `Three.js` pour des environnements interactifs (arrière-plans dynamiques, effets de brume au café).
*   **Responsive Web Design :** Adaptation parfaite sur Mobile, Tablette et Desktop avec une approche "Mobile-First" pour les voyageurs.
*   **Internationalisation :** Traduction intégrale en 4 langues (FR, EN, ES, AR) avec support du rendu RTL.

---

## 3. Catalogue Exhaustif des Services

### A. Hébergements (L'Art de Vivre)
| Nom de l'Unité | Catégorie | Prix (DH/Nuit) | Description Notable |
| :--- | :--- | :--- | :--- |
| **Atlas Supérieure** | Chambre | 3200 | Vue panoramique sur l'Atlas. |
| **Deluxe Jardin** | Chambre | 3950 | Accès direct aux jardins suspendus. |
| **Suite Junior** | Suite | 4800 | Salon privé et finitions en cèdre. |
| **Suite Prestige Royale**| Suite | 12000 | Balcon panoramique, service de majordome. |
| **Suite Céleste** | Suite | 15500 | Décoration stellaire, toit ouvrant. |
| **Suite Midnight** | Suite | 22000 | Sommet du luxe, piscine privée en terrasse. |
| **Riad Majorelle** | Riad | 25000 | Privatisation totale, patio andalou, 4 chambres. |

### B. Gastronomie & Espaces Sociaux
*   **Le Café :** Menu Signature (Thé Royal 75 DH, Nous-Nous 45 DH, Espresso Macchiato 45 DH, Affogato 70 DH).
*   **Restaurants :** 
    *   **Le Marocain :** Gastronomie ancestrale.
    *   **L'Italien :** Cuisine méditerranéenne raffinée.
    *   **L'Asiatique :** Fusion de saveurs orientales.
*   **Bars :** Le Churchill (ambiance feutrée), Bar Majorelle.

### C. Bien-être (Spa & Sport)
*   **Le Spa (2500 m²) :** Hammam traditionnel au savon noir, Massages Deep Tissue, Soins du visage premium.
*   **La Piscine :** Bassins chauffés et jardin d'été.
*   **Gym :** Équipements de pointe et coach personnel.

---

## 4. Module d'Intelligence Artificielle (Atlas Chat)
*   **Fonction :** Concierge hybride intelligent.
*   **Capacités :** Aide à la réservation, informations sur les chambres, horaires des services, support client immédiat.
*   **Backend :** Pont API sécurisé vers des modèles de langage avancés (DeepSeek/GPT-4).

---

## 5. Système de Fidélisation (Loyalty Rewards)
*   **Algorithme :** Suivi automatisé du nombre de réservations par utilisateur via Supabase.
*   **Cycle de Récompense :**
    1.  Chaque réservation confirmée crédite 1 point.
    2.  Au **10ème حجز**, un rabais de **25%** est appliqué immédiatement sur la facture.
    3.  Le compteur se réinitialise à 1 pour le cycle suivant.
*   **Documentation PDF :** Génération de factures professionnelles détaillées montrant :
    *   Le coût unitaire par nuit.
    *   Le nombre de nuits calculé dynamiquement.
    *   La réduction "Récompense Fidélité" clairement libellée.

---

## 6. Portail d'Administration (Audit Interne)

C'est le cœur opérationnel du Palace, accessible via `/administrations.html`.

### A. Sécurité & Authentification Admin
*   **Interface :** Login futuriste avec animation 3D d'une voiture de luxe.
*   **Identifiants :** Accès restreint via Supabase Auth pour l'équipe manageante.

### B. Tableau de Bord (Dashboard)
*   **Statistiques en temps réel :** Nombre total de réservations, clients inscrits, messages reçus.
*   **Gestion des Réservations :** Interface de validation (Approuver/Refuser) pour toutes les demandes de séjour.
*   **Gestion des Clients :** Fiche client complète (Nom, Email, CIN/Passeport, Téléphone), avec possibilité de validation ou de blocage (Blacklist).
*   **Gestion de l'Hôtel (Module CMS) :**
    *   **Inventaire :** Ajout, modification et suppression des chambres, suites, ou tables de restaurant.
    *   **Media :** Téléchargement d'images locales ou liens URL pour les visuels du site.
    *   **Services :** Activation/Désactivation des services (Spa, Transport, Conciergerie).

### C. Gestion du Feedback
*   Réception centralisée des messages envoyés via le formulaire de contact du footer.

---

## 7. Architecture Technique (Stack Logicielle)

*   **Frontend :** HTML5, CSS3 (Modular CSS), JavaScript (Clean Code ES6).
*   **Back-end (BaaS) :** Supabase (Base de données PostgreSQL temps réel).
*   **Authentification :** JWT secured via Supabase GoTrue.
*   **Bibliothèques tierces :**
    *   `Three.js` : Graphismes 3D.
    *   `jsPDF` : Édition automatique de factures.
    *   `html2canvas` : Capture visuelle pour PDF.
    *   `Lucide` : Système d'icônes vectorielles.

---

## 8. Conclusion de l'Audit المشروع
Le projet **Golden Atlas Palace** est une solution hôtelière de bout en bout ("End-to-End") qui couvre aussi bien l'expérience glamour du client que les besoins stricts de gestion administrative d'un établissement de prestige.
