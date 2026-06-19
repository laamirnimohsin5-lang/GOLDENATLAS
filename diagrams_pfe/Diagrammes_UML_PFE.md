# Diagrammes UML — Portail Hôtelier Golden Atlas
## Projet de Fin d'Études — PFE

---

## 1. Diagramme de Cas d'Utilisation

```mermaid
flowchart TD
    Visiteur(["👤 Visiteur non inscrit"])
    Client(["👤 Client inscrit"])
    Admin(["🛡️ Administrateur"])
    IA(["🤖 Atlas Chat AI\nDeepSeek API"])
    DB(["🗄️ Base de données\nSupabase"])

    UC1["Parcourir le contenu du site"]
    UC2["Changer la langue de l'interface\nFR / EN / AR / ES"]
    UC3["Créer un compte"]
    UC4["Se connecter\nEmail ou Google OAuth"]
    UC5["Réserver une chambre ou un service"]
    UC6["Consulter mes réservations"]
    UC7["Annuler une réservation"]
    UC8["Utiliser les points de fidélité"]
    UC9["Discuter avec Atlas Chat"]
    UC10["Parcourir les menus et galeries"]
    UC11["Gérer toutes les réservations"]
    UC12["Gérer les utilisateurs"]
    UC13["Gérer le contenu du site"]

    Visiteur --> UC1
    Visiteur --> UC2
    Visiteur --> UC3
    Visiteur --> UC4

    Client --> UC1
    Client --> UC2
    Client --> UC5
    Client --> UC6
    Client --> UC7
    Client --> UC8
    Client --> UC9
    Client --> UC10

    Admin --> UC11
    Admin --> UC12
    Admin --> UC13

    UC5 -.->|"«include»"| DB
    UC6 -.->|"«include»"| DB
    UC9 -.->|"«include»"| IA
    UC4 -.->|"«extend»"| UC5
    UC8 -.->|"«extend»"| UC5

    style Visiteur fill:#1a1a2e,color:#e0c97f,stroke:#e0c97f,stroke-width:2px
    style Client fill:#16213e,color:#e0c97f,stroke:#e0c97f,stroke-width:2px
    style Admin fill:#0f3460,color:#e0c97f,stroke:#e0c97f,stroke-width:2px
    style IA fill:#533483,color:#fff,stroke:#a78bfa,stroke-width:2px
    style DB fill:#1a3c2e,color:#4ade80,stroke:#4ade80,stroke-width:2px
```

**Description :** Ce diagramme présente les trois acteurs principaux du système (Visiteur, Client inscrit, Administrateur) ainsi que les deux acteurs secondaires (IA DeepSeek et Supabase). Il illustre les 13 cas d'utilisation identifiés, avec les relations d'inclusion et d'extension.

---

## 2. Diagramme de Classes

```mermaid
classDiagram
    direction TB

    class Utilisateur {
        +String id
        +String nom
        +String email
        +String motDePasse
        +String role
        +Date dateInscription
        +seConnecter()
        +seDeconnecter()
        +modifierProfil()
    }

    class Client {
        +int pointsFidelite
        +List reservations
        +faireReservation(service)
        +annulerReservation(id)
        +appliquerReduction()
    }

    class Administrateur {
        +gererReservations()
        +gererUtilisateurs()
        +gererContenu()
        +voirTableauDeBord()
    }

    class Reservation {
        +String id
        +Date dateArrivee
        +Date dateDepart
        +String statut
        +float prixTotal
        +String typePaiement
        +confirmer()
        +annuler()
        +calculerPrix()
    }

    class Chambre {
        +String id
        +String nom
        +String type
        +float prixParNuit
        +String description
        +List images
        +int capacite
        +boolean disponible
        +verifierDisponibilite(dates)
    }

    class Service {
        +String id
        +String nom
        +String categorie
        +float prix
        +String description
        +estDisponible()
    }

    class Restaurant {
        +String typeCuisine
        +String horaires
        +List menu
        +afficherMenu()
    }

    class Spa {
        +List soins
        +String horaires
        +reserverSoin(soin, date)
    }

    class SalleFetes {
        +int capaciteMax
        +List equipements
        +verifierDisponibilite(date)
    }

    class Plat {
        +String nom
        +float prix
        +String description
        +String categorie
    }

    class AtlasChat {
        +String cleAPI
        +List historique
        +String langue
        +envoyerMessage(texte)
        +recevoirReponse()
        +changerLangue(lang)
    }

    class Message {
        +String contenu
        +String role
        +Date horodatage
    }

    class SystemeI18n {
        +String langueActive
        +Map traductions
        +changerLangue(lang)
        +traduire(cle)
        +appliquerTraductions()
    }

    Utilisateur <|-- Client
    Utilisateur <|-- Administrateur
    Client "1" --> "0..*" Reservation : effectue
    Reservation "1" --> "1" Chambre : concerne
    Reservation "1" --> "0..1" Service : inclut
    Service <|-- Restaurant
    Service <|-- Spa
    Service <|-- SalleFetes
    Restaurant "1" --> "0..*" Plat : propose
    Client "1" --> "0..1" AtlasChat : utilise
    AtlasChat "1" --> "0..*" Message : contient
    SystemeI18n ..> Utilisateur : supporte
```

**Description :** Ce diagramme modélise la structure statique du système avec 12 classes. On distingue la hiérarchie d'héritage (Utilisateur → Client / Administrateur), la composition (AtlasChat contient des Messages) et la spécialisation (Service se spécialise en Restaurant, Spa et SalleFetes).

---

## 3. Diagramme de Séquence — Réservation d'une chambre

```mermaid
sequenceDiagram
    actor C as Client
    participant UI as Interface Web
    participant JS as script.js
    participant SB as Supabase
    participant EM as Notification Email

    C->>UI: Ouvre la page Hébergements
    UI->>JS: Chargement de la page + vérification de session
    JS->>SB: getSession()
    SB-->>JS: Données du client connecté
    JS-->>UI: Affichage des chambres disponibles

    C->>UI: Clique sur Détails d'une chambre
    UI->>JS: openRoomModal(roomId)
    JS-->>UI: Affiche la modale (photos, prix, description)

    C->>UI: Clique sur le bouton Réserver
    UI->>JS: openBookingModal(roomId)
    JS-->>UI: Affiche le formulaire de réservation

    C->>UI: Remplit les dates d'arrivée, de départ et le nombre de personnes
    C->>UI: Clique sur Confirmer la réservation
    UI->>JS: submitReservation(data)
    JS->>JS: validateDates() + calculatePrice()

    alt Données valides
        JS->>SB: INSERT INTO reservations
        SB-->>JS: id + statut confirmé
        JS->>SB: UPDATE points_fidelite += X
        SB-->>JS: Mise à jour effectuée
        JS-->>UI: Message de succès
        JS->>EM: Envoi de l'email de confirmation
    else Données invalides
        JS-->>UI: Message d'erreur
    end
```

**Description :** Ce diagramme décrit le flux de réservation d'une chambre, depuis l'ouverture de la page jusqu'à la confirmation en base de données. Il met en évidence les interactions entre l'interface, la logique JavaScript et le backend Supabase, incluant la gestion des erreurs et la mise à jour des points de fidélité.

---

## 4. Diagramme de Séquence — Concierge IA Atlas Chat

```mermaid
sequenceDiagram
    actor C as Client
    participant CH as chat.html
    participant JS as AtlasChat JS
    participant DS as DeepSeek API
    participant SB as Supabase

    C->>CH: Ouvre la page Atlas Chat
    CH->>JS: initAtlasChat()
    JS->>SB: getSession()
    SB-->>JS: Données utilisateur + langue préférée
    JS-->>CH: Message de bienvenue dans la langue du client

    loop Conversation interactive
        C->>CH: Saisit un message et envoie
        CH->>JS: sendMessage(texte)
        JS->>JS: Construction du system prompt multilingue
        JS->>DS: POST /v1/chat/completions
        DS-->>JS: Réponse du modèle deepseek-chat
        JS-->>CH: Affichage avec effet de frappe progressive
    end

    C->>CH: Clique sur Réserver maintenant
    CH->>JS: redirectToBooking()
    JS-->>CH: Redirection vers hebergements.html
```

**Description :** Ce diagramme illustre le fonctionnement du concierge IA Atlas Chat. Le client interagit avec chat.html, qui transmet les messages à l'API DeepSeek via des requêtes HTTP sécurisées. Le contexte système est construit dynamiquement selon la langue détectée via Supabase.

---

## 5. Diagramme d'Activité

```mermaid
flowchart TD
    Debut(["Début"]) --> A["Ouvrir le portail Golden Atlas"]
    A --> B{"Client connecté ?"}

    B -- Non --> C["Afficher la page de connexion"]
    C --> D{"Méthode de connexion"}
    D -- "Email + Mot de passe" --> E["Saisir les identifiants"]
    D -- "Google OAuth" --> F["Authentification Google"]
    E --> G["Supabase Auth"]
    F --> G
    G --> H{"Identifiants valides ?"}
    H -- Non --> I["Afficher message d'erreur"] --> C
    H -- Oui --> J["Rediriger vers le tableau de bord"]

    B -- Oui --> J

    J --> K["Afficher le tableau de bord client"]
    K --> L{"Choisir un service"}

    L --> M["Parcourir les hébergements"]
    L --> N["Parcourir les restaurants"]
    L --> O["Parcourir le Spa / la Piscine"]
    L --> P["Ouvrir Atlas Chat"]

    M --> Q["Sélectionner une chambre"]
    Q --> R["Consulter les détails"]
    R --> S["Cliquer sur RÉSERVER"]
    S --> T["Remplir le formulaire de réservation"]
    T --> U{"Validation des données"}

    U -- Invalide --> V["Afficher message d'erreur"] --> T
    U -- Valide --> W["Calculer le prix total"]
    W --> X{"Utiliser les points fidélité ?"}
    X -- Oui --> Y["Appliquer la réduction"]
    X -- Non --> Z["Prix sans réduction"]
    Y --> AA["Enregistrer la réservation dans Supabase"]
    Z --> AA
    AA --> AB["Créditer les points de fidélité"]
    AB --> AC["Envoyer l'email de confirmation"]
    AC --> Fin(["Fin"])

    style Debut fill:#e0c97f,color:#1a1a2e,stroke:#e0c97f,stroke-width:2px
    style Fin fill:#e0c97f,color:#1a1a2e,stroke:#e0c97f,stroke-width:2px
    style G fill:#1a3c2e,color:#4ade80,stroke:#4ade80
    style AA fill:#1a3c2e,color:#4ade80,stroke:#4ade80
    style I fill:#3c1a1a,color:#f87171,stroke:#f87171
    style V fill:#3c1a1a,color:#f87171,stroke:#f87171
```

**Description :** Ce diagramme couvre l'intégralité du parcours utilisateur : de l'ouverture du portail jusqu'à la confirmation finale de la réservation. Il modélise les points de décision critiques (authentification, validation des données, points de fidélité) et les chemins alternatifs en cas d'erreur.

---

## 6. Diagramme de Déploiement

```mermaid
flowchart TD
    subgraph CoteClient["💻 Côté Client"]
        Navigateur["🌐 Navigateur Web\nChrome / Firefox / Safari\n─────────────────\nHTML5 + CSS3 + Vanilla JS\nMoteur I18n (FR/EN/AR/ES)"]
    end

    subgraph Netlify["☁️ Netlify — Hébergement Statique"]
        Fichiers["📁 Fichiers Statiques\n─────────────────\nindex.html / hebergements.html\nchat.html / login.html\nstyle.css / script.js\nImages et Assets"]
        CDN["🌍 CDN Netlify\nHTTPS / TLS\nDistribution mondiale"]
    end

    subgraph SupabaseCloud["🗄️ Supabase — Backend as a Service"]
        Auth["🔐 Service d'Authentification\nEmail + Mot de passe\nGoogle OAuth 2.0"]
        PostgreSQL["🐘 Base de données PostgreSQL\n─────────────────\nTable : utilisateurs\nTable : reservations\nTable : chambres\nTable : services"]
        API["🔌 API REST\nSécurité au niveau des lignes\nAuto-générée"]
    end

    subgraph DeepSeek["🤖 DeepSeek — API Intelligence Artificielle"]
        Modele["🧠 Modèle deepseek-chat\nLLM Multilingue\n─────────────────\nContexte hôtelier\nRéponse JSON"]
    end

    subgraph Google["🔑 Services Google"]
        OAuth["Google OAuth 2.0\nFournisseur d'identité"]
        Fonts["Google Fonts\nInter / Playfair Display"]
    end

    Navigateur -->|"HTTPS GET"| CDN
    CDN --> Fichiers
    Fichiers --> Navigateur
    Navigateur -->|"Supabase JS Client\nHTTPS / REST"| API
    API --> Auth
    API --> PostgreSQL
    Auth -->|"Flux OAuth"| OAuth
    OAuth -->|"Jeton d'identité"| Auth
    Navigateur -->|"fetch POST\nBearer Token"| Modele
    Navigateur -->|"Import CSS"| Fonts

    style CoteClient fill:#1a1a2e,color:#e0c97f,stroke:#e0c97f,stroke-width:2px
    style Netlify fill:#00435a,color:#fff,stroke:#38bdf8,stroke-width:2px
    style SupabaseCloud fill:#1a3c2e,color:#4ade80,stroke:#4ade80,stroke-width:2px
    style DeepSeek fill:#2d1b69,color:#a78bfa,stroke:#7c3aed,stroke-width:2px
    style Google fill:#3c2400,color:#fbbf24,stroke:#f59e0b,stroke-width:2px
```

**Description :** Ce diagramme représente l'architecture de déploiement du portail Golden Atlas. Les fichiers statiques sont hébergés sur Netlify avec un CDN mondial. Le backend repose entièrement sur Supabase (PostgreSQL + Auth + API REST). L'IA conversationnelle est fournie par l'API DeepSeek, et l'authentification sociale est gérée par Google OAuth 2.0.

---

## Tableau Récapitulatif

| # | Diagramme | Objectif | Éléments clés |
|---|-----------|----------|---------------|
| 1 | **Cas d'utilisation** | Rôles des acteurs et interactions | 3 acteurs, 13 cas, include/extend |
| 2 | **Classes** | Structure des données et relations | 12 classes, héritage, associations |
| 3 | **Séquence — Réservation** | Flux de réservation étape par étape | Client → UI → script.js → Supabase |
| 4 | **Séquence — Atlas Chat** | Flux de conversation IA | Client → DeepSeek API → Réponse |
| 5 | **Activité** | Logique métier et décisions | Login → Navigation → Réservation → Confirmation |
| 6 | **Déploiement** | Infrastructure et hébergement | Netlify + Supabase + DeepSeek + Google |

---

> **Note :** Tous les diagrammes sont basés sur les technologies réelles du projet :
> - **Frontend :** HTML5, CSS3, Vanilla JavaScript
> - **Hébergement :** Netlify CDN
> - **Backend :** Supabase (PostgreSQL + Auth)
> - **IA :** DeepSeek API
> - **Authentification :** Google OAuth 2.0
