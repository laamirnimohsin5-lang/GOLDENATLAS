/**
 * Golden Atlas - Unified Client-Side Logic
 * Version: 2.2
 */

const translations = {
    FR: {
        nav_login: "S'IDENTIFIER",
        hero_title: "Golden Atlas",
        hero_subtitle: "Palace · Errachidia · Depuis 1923",
        hotel_name: "GOLDEN ATLAS ERRACHIDIA",
        booking_title: "Réserver votre séjour",
        form_name: "NOM COMPLET",
        form_arrival: "DATE D'ARRIVÉE",
        form_departure: "DATE DE DÉPART",
        form_guests: "VOYAGEURS",
        intro_surtitle: "Bienvenue",
        intro_title: "Au cœur de notre légende",
        intro_text: "Fidèle à son identity singulière, Golden Atlas se réinvente en permanence dans une magie toujours unique tissée d'élégance et d'exception. Depuis 1923, un héritage de raffinement inégalé.",
        menu_home: "ACCUEIL",
        menu_rooms: "HÉBERGEMENTS",
        menu_chambres: "Les Chambres",
        menu_suites: "Les suites",
        menu_vip: "Chambres VIP",
        menu_riads: "Les Riads",
        menu_pavillon: "Le Pavillon",
        menu_massage: "Les massages",
        menu_hammam: "Le hammam",
        menu_spa: "SPA & BIEN-ÊTRE",
        menu_dining: "Gastronomie",
        menu_bar: "Le bar",
        menu_pool: "La piscine",
        menu_mosquee: "LA MOSQUÉE",
        mosque_surtitle: "Patrimoine & Spiritualité",
        mosque_title: "La Grande Mosquée",
        menu_events: "Salle de fête",
        menu_rest: "Le restaurant",
        menu_gym: "Salle de sport",
        menu_cafe: "Le café",
        menu_transport: "TRANSPORT SERVICE",
        footer_since: "Depuis 1923",
        footer_contact_title: "Contactez-nous",
        footer_contact_sub: "Partagez vos impressions, vos notes ou vos remerciements.",
        contact_placeholder: "Écrivez votre message...",
        contact_send: "ENVOYER",
        nav_admin: "ADMINISTRATION",
        whatsapp: "WhatsApp",
        call_direct: "Appeler Directement",
        nav_reserve: "RÉSERVER UNE CHAMBRE",
        discover: "Découvrir",
        discover_gym: "DÉCOUVRIR LE FITNESS",
        discover_spa: "DÉCOUVRIR LE SPA",
        rest_breakfast_hours: "7h00 - 10h30",
        rest_breakfast_title: "Le Petit-Déjeuner du Palais",
        rest_breakfast_sub: "Éveil des Sens & Traditions",
        rest_breakfast_desc: "Une célébration matinale de fraîcheur et d'héritage.",
        rest_lunch_hours: "12h30 - 15h00",
        rest_lunch_title: "Le Festin Solaire",
        rest_lunch_sub: "Fraîcheur, Épices & Sérénité",
        rest_lunch_desc: "Un déjeuner raffiné sous la lumière zénithale.",
        rest_dinner_hours: "19h00 - 23h00",
        rest_dinner_title: "L'Apothéose de la Nuit",
        rest_dinner_sub: "Haute Gastronomie Marocaine",
        rest_dinner_desc: "L'élégance mystique d'un dîner sous les étoiles.",
        suites_intro: "Les suites du Golden Atlas sont bien plus qu'un simple séjour ; ce sont des havres de paix spacieux alliant art traditionnel et plus hauts standards de luxe international. Profitez de vues panoramiques et d'un service entièrement personnalisé.",
        suite_celestial_desc: "Un horizon au-delà de l'imagination. Une suite royale offrant une vue infinie sur les montagnes de l'Atlas avec une terrasse privée spacieuse pour dîner sous les étoiles.",
        suite_palm_desc: "Entre palmiers et or. Une suite luxueuse entourée des jardins chantants de l'hôtel, dotée d'un design intérieur mêlant cuivre martelé et soie naturelle.",
        suite_zellige_desc: "Une œuvre d'art en Zellige de Fès authentique. Une suite incarnant la splendeur de l'architecture marocaine avec des touches royales modernes et un confort dépassant les attentes.",
        suite_midnight_desc: "Le charme du désert dans le calme de la nuit. Cette suite présente un design chaleureux et un éclairage apaisant pour une sérénité inégalée au cœur de l'hôtel.",
        suite_price_label: "Tarif",
        suite_per_night: "Nuit",
        suite_book_btn: "RÉSERVER CETTE SUITE",
        rever_surtitle: "Une tradition d'alchimie",
        rever_title: "Les révélateurs d'âme",
        rever_text_1: "Depuis des siècles, les voyageurs s'arrêtent au Tafilalet pour explorer les secrets d'Errachidia. Golden Atlas est le refuge où chaque détail raconte une histoire d'accueil et de partage.",
        rever_text_2: "Une collection de chambres et suites d'exception, conçues pour être votre havre de paix.",
        thanks_surtitle: "Gratitude & Reconnaissance",
        thanks_title: "Un mot de remerciement",
        thanks_p1: "Nous tenons à exprimer nos plus sincères remerciements aux enfants et à vous tous, notre chère communauté, pour l'excellence de votre visite et vos merveilleux échanges.",
        thanks_p2: "Votre bienveillance, vos sourires chaleureux et la qualité de notre relation font la véritable richesse de notre établissement.",
        meta_surtitle: "Contempler, s'enchanter :",
        meta_title: "Golden Atlas en métamorphose",
        meta_quote: "« Il faut que tout change pour que rien ne change »",
        meta_p1: "Golden Atlas possède un art particulier pour se réinventer sans cesse sans jamais rien trahir de sa mémoire, toujours fidèle à son identité singulière.",
        meta_p2: "Les restaurants se déploient dans une alchimie d'ambiances aux multiples facettes, les lieux publics sont sublimés.",
        explore_surtitle: "Rêver, s'émerveiller, explorer :",
        explore_title: "un séjour inoubliable",
        explore_p1: "Si le besoin de bouger se fait sentir, découvrez notre salle de fitness équipée, nos courts de tennis ou les jardins.",
        explore_p2: "Spa et hammams vous attendent pour prendre soin de vous.",
        explore_p4: "Et puis Errachidia est là, avec son cœur qui bat juste aux portes de l'hôtel.",
        explore_p5: "En quelques minutes, vous voici face à la magnifique mosquée, puis sur la bouillonnante place.",
        explore_p6: "Pour visiter les lieux essentiels de la Ville - Les Jardins, le palais... nous serons ravis d'organiser vos excursions.",
        inspire_title: "Inspiré par vous",
        footer_hotel: "Hôtel",
        footer_rooms: "Hébergements",
        footer_dining: "Restaurants",
        footer_spa: "Spa & Bien-être",
        footer_events: "Évènements",
        footer_gallery: "Galerie photos",
        footer_careers: "Carrières",
        footer_press: "Presse",
        menu_footer_century: "UN SIÈCLE D'EXCELLENCE",
        menu_footer_contact: "CONTACT",
        vip_extra_service: "SERVICES COMPLÉMENTAIRES",
        help_title: "BESOIN D'AIDE ?",
        popular_rooms_title: "Chambres Populaires",
        book_now_btn: "RÉSERVER MAINTENANT",
        footer_rights: "© 2026 Golden Atlas Errachidia. Tous droits réservés.",
        footer_legal: "Mentions légales",
        footer_privacy: "Confidentialité",
        footer_sitemap: "Plan du site",
        cafe_tea_title: "Thé à la Menthe Royal",
        cafe_tea_desc: "Le rituel traditionnel, préparé avec de la menthe fraîche et servi avec un assortiment de pâtisseries marocaines fines.",
        gym_cardio_title: "Zone Cardio",
        gym_cardio_desc: "Tapis de course, vélos et elliptiques de haute performance.",
        gym_strength_title: "Force & Musculation",
        gym_strength_desc: "Appareils à charge guidée et poids libres pour un renforcement complet.",
        gym_yoga_title: "Studio Yoga",
        gym_yoga_desc: "Un espace paisible dédié au yoga, au Pilates et aux étirements.",
        gym_intro_title: "Équilibre & Performance",
        gym_intro_text: "Entièrement équipée des dernières technologies Technogym.",
        suites_intro_title: "Des espaces conçus pour l'émerveillement",
        hbt_intro_title: "L'Art du Séjour absolu",
        hbt_intro_text: "Golden Atlas possède un art particulier pour se réinventer sans cesse sans jamais rien trahir de sa mémoire.",
        riad_intro_title: "Votre havre de paix privé",
        riad_intro_text: "Chaque Riad est un monde à part entière — une demeure privée nichée au sein du Golden Atlas.",
        riad_amenity_pool: "Piscine Privée",
        riad_amenity_butler: "Majordome 24h/24",
        cafe_nousnous_title: "Le \"Nous-Nous\"",
        cafe_nousnous_desc: "L'équilibre parfait entre un espresso corsé et un lait crémeux.",
        cafe_espresso_title: "Espresso",
        cafe_espresso_desc: "L'essence pure du café, extrait sous pression pour une crème onctueuse.",
        spa_hammam_title: "Les Hammams",
        spa_hammam_desc: "Un rituel ancestral revisité dans un décor somptueux.",
        spa_massage_title: "Les Massages",
        spa_massage_desc: "De l'effleurage doux au massage deep tissue.",
        spa_facials_title: "Les Soins Visage",
        spa_facials_desc: "Des soins sur-mesure avec les meilleures marques.",
        spa_intro_title: "Soin du corps & de l'âme",
        spa_intro_text: "Sur 2500 m², le Spa de Golden Atlas déploie un univers raffiné de bien-être et de beauté.",
        hbt_best_hotel: "Avoir été distingué à plusieurs reprises comme le meilleur hôtel du monde nous honore et nous engage.",
        hbt_excellence: "Notre excellence est le fruit d'un travail incessant de nos équipes.",
        resto_intro_title: "L'Excellence Culinaire",
        resto_intro_text: "Des restaurants signés par des chefs de renommée mondiale.",
        resto_asian_title: "L'Asiatique",
        resto_asian_desc: "Saveurs asiatiques d'une finesse inouïe.",
        resto_italian_title: "L'Italien",
        resto_italian_desc: "La dolce vita dans toute sa splendeur.",
        resto_chef_jg: "par Jean-Georges Vongerichten",
        resto_chef_simone: "par Simone Zanoni",
        transport_hero_tag: "Transferts d'exception",
        transport_hero_title: "L'Art du Voyage",
        transport_hero_desc: "Découvrez nos limousines privées et voitures de collection pour vos trajets.",
        transport_card1_title: "Chauffeur Privé",
        transport_card1_desc: "Chauffeurs bilingues formés aux standards de l'hôtellerie de luxe.",
        transport_card2_title: "Collection Vintage",
        transport_card2_desc: "Pour vos événements spéciaux ou mariages dans le désert.",
        transport_contact_msg: "Pour tout service de transport, veuillez nous informer 48 heures avant votre arrivée au 06 48 12 05 77.",
        loc_title: "Situation & Accès",
        loc_surtitle: "Destination Errachidia",
        loc_text: "Situé au cœur de la ville impériale, Golden Atlas est le point de départ idéal pour explorer les trésors du Tafilalet. Un emplacement prestigieux à quelques pas des sites emblématiques.",
        loc_address: "Avenue Bab Jdid, 40040 Errachidia, Maroc",
        auth_req_title: "Connexion Requise",
        auth_req_desc: "Vous devez créer un compte ou vous connecter avant de faire une réservation.",
        auth_req_login: "Se connecter",
        auth_req_signup: "S'inscrire",
        auth_req_cancel: "Annuler"
    },
    EN: {
        nav_login: "SIGN IN",
        hero_title: "Golden Atlas",
        hero_subtitle: "Palace · Errachidia · Since 1923",
        hotel_name: "GOLDEN ATLAS ERRACHIDIA",
        booking_title: "Book your stay",
        form_name: "FULL NAME",
        form_arrival: "ARRIVAL DATE",
        form_departure: "DEPARTURE DATE",
        form_guests: "GUESTS",
        intro_surtitle: "Welcome",
        intro_title: "At the heart of our legend",
        intro_text: "Faithful to its singular identity, Golden Atlas constantly reinvents itself in a unique magic woven of elegance and exception. Since 1923, a heritage of unmatched refinement.",
        menu_home: "HOME",
        menu_rooms: "ACCOMMODATIONS",
        menu_chambres: "The Rooms",
        menu_suites: "The Suites",
        menu_vip: "VIP Rooms",
        menu_riads: "The Riads",
        menu_pavillon: "The Pavilion",
        menu_massage: "Massages",
        menu_hammam: "Hammam",
        menu_spa: "SPA & WELLNESS",
        menu_dining: "Gastronomy",
        menu_bar: "The Bar",
        menu_pool: "The Pool",
        menu_mosquee: "THE MOSQUE",
        mosque_surtitle: "Heritage & Spirituality",
        mosque_title: "The Grand Mosque",
        menu_events: "Ballroom",
        menu_rest: "Restaurant",
        menu_gym: "Gym",
        menu_cafe: "The Café",
        menu_transport: "TRANSPORT SERVICE",
        footer_since: "Since 1923",
        footer_contact_title: "Contact Us",
        footer_contact_sub: "Share your thoughts, notes or thanks.",
        contact_placeholder: "Write your message...",
        contact_send: "SEND",
        nav_admin: "ADMINISTRATION",
        whatsapp: "WhatsApp",
        call_direct: "Call Directly",
        nav_reserve: "BOOK A ROOM",
        discover: "Discover",
        discover_gym: "DISCOVER FITNESS",
        discover_spa: "DISCOVER SPA",
        rest_breakfast_hours: "7:00 AM - 10:30 AM",
        rest_breakfast_title: "Breakfast",
        rest_breakfast_sub: "Gourmet Buffet & Traditions",
        rest_breakfast_desc: "Start your day with a celebration of freshness. Crispy pastries, sun-drenched seasonal fruits, and authentic Moroccan specialties like Beghrir and Msemen, served with Atlas honey.",
        rest_lunch_hours: "12:30 PM - 3:00 PM",
        rest_lunch_title: "Lunch",
        rest_lunch_sub: "Freshness & Sunshine",
        rest_lunch_desc: "A sunny break under the arches. Enjoy crisp salads, freshly grilled fish, and delicately spiced meats for a light and refined lunch facing the pool.",
        rest_dinner_hours: "7:00 PM - 11:00 PM",
        rest_dinner_title: "Dinner",
        rest_dinner_sub: "Gastronomic Elegance",
        rest_dinner_desc: "Lit by candlelight, dinner at Golden Atlas is a mystical experience. Our menu merges ancient Moroccan heritage with the most modern culinary techniques.",
        suites_intro: "Suites at Golden Atlas are more than just a stay; they are spacious sanctuaries combining traditional art with the highest standards of international luxury. Enjoy panoramic views and fully personalized service.",
        suite_celestial_desc: "A horizon beyond imagination. A royal suite offering infinite views of the Atlas Mountains with a spacious private terrace for dining under the stars.",
        suite_palm_desc: "Between palms and gold. A luxurious suite surrounded by the hotel's singing gardens, featuring an interior design blending hammered copper and natural silk.",
        suite_zellige_desc: "A work of art in authentic Fès Zellige. A suite embodying the splendor of Moroccan architecture with modern royal touches and comfort beyond expectations.",
        suite_midnight_desc: "The charm of the desert in the calm of the night. This suite features a warm design and soothing lighting for unparalleled serenity in the heart of the hotel.",
        suite_price_label: "Price",
        suite_per_night: "Night",
        suite_book_btn: "BOOK THIS SUITE",
        rever_surtitle: "A tradition of alchemy",
        rever_title: "Soul revealers",
        rever_text_1: "For centuries, travelers have stopped in Tafilalet to explore the secrets of Errachidia. Golden Atlas is the refuge where every detail tells a story of welcome and sharing.",
        rever_text_2: "A collection of exceptional rooms and suites, designed to be your peaceful haven.",
        thanks_surtitle: "Gratitude & Recognition",
        thanks_title: "A word of thanks",
        thanks_p1: "We wish to express our most sincere thanks to the children and to all of you, our dear community, for the excellence of your visit and your wonderful exchanges.",
        thanks_p2: "Your kindness, warm smiles, and the quality of our relationship are the true wealth of our establishment.",
        meta_surtitle: "Contemplate, enchant:",
        meta_title: "Golden Atlas in metamorphosis",
        meta_quote: "« Everything must change so that nothing changes »",
        meta_p1: "Golden Atlas has a particular art of constantly reinventing itself without ever betraying its memory, always faithful to its singular identity.",
        meta_p2: "Restaurants unfold in an alchemy of multifaceted atmospheres, public places are sublimated.",
        explore_surtitle: "Dream, marvel, explore:",
        explore_title: "an unforgettable stay",
        explore_p1: "If the need to move arises, discover our equipped fitness room, our tennis courts, or the gardens.",
        explore_p2: "Spa and hammams await to take care of you.",
        explore_p4: "And then Errachidia is there, with its heart beating just outside the hotel doors.",
        explore_p5: "In minutes, you're facing the magnificent mosque, then in the buzzing square.",
        explore_p6: "To visit the essential places of the City - Gardens, palace... we will be delighted to organize your excursions.",
        inspire_title: "Inspired by you",
        footer_hotel: "Hotel",
        footer_rooms: "Accommodations",
        footer_dining: "Restaurants",
        footer_spa: "Spa & Wellness",
        footer_events: "Events",
        footer_gallery: "Photo gallery",
        footer_careers: "Careers",
        footer_press: "Press",
        menu_footer_century: "A CENTURY OF EXCELLENCE",
        menu_footer_contact: "CONTACT",
        vip_extra_service: "ADD EXTRA SERVICE",
        help_title: "NEED HELP?",
        popular_rooms_title: "Popular Rooms",
        book_now_btn: "BOOK NOW",
        footer_rights: "© 2026 Golden Atlas Errachidia. All rights reserved.",
        footer_legal: "Legal Notice",
        footer_privacy: "Privacy Policy",
        footer_sitemap: "Sitemap",
        cafe_tea_title: "Royal Mint Tea",
        cafe_tea_desc: "The traditional ritual, prepared with fresh mint and served with an assortment of fine Moroccan pastries.",
        gym_cardio_title: "Cardio Zone",
        gym_cardio_desc: "High-performance treadmills, bikes, and ellipticals.",
        gym_strength_title: "Strength & Conditioning",
        gym_strength_desc: "Guided weight machines and free weights for complete strengthening.",
        gym_yoga_title: "Yoga Studio",
        gym_yoga_desc: "A peaceful space dedicated to yoga, Pilates, and stretching.",
        gym_intro_title: "Balance & Performance",
        gym_intro_text: "Fully equipped with the latest Technogym technology.",
        suites_intro_title: "Spaces designed for wonder",
        hbt_intro_title: "The Art of the Absolute Stay",
        hbt_intro_text: "Golden Atlas has a particular art of constantly reinventing itself without ever betraying its memory.",
        riad_intro_title: "Your Private Haven of Peace",
        riad_intro_text: "Each Riad is a world of its own — a private residence nestled within Golden Atlas.",
        riad_amenity_pool: "Private Pool",
        riad_amenity_butler: "24/7 Butler",
        cafe_nousnous_title: "The \"Nous-Nous\"",
        cafe_nousnous_desc: "The perfect balance between intense espresso and creamy milk.",
        cafe_espresso_title: "Espresso",
        cafe_espresso_desc: "Pure coffee essence extracted under pressure.",
        spa_hammam_title: "The Hammams",
        spa_hammam_desc: "An ancestral ritual revisited in a sumptuous setting.",
        spa_massage_title: "The Massages",
        spa_massage_desc: "From gentle strokes to deep tissue massage.",
        spa_facials_title: "The Facials",
        spa_facials_desc: "Bespoke treatments with the best international brands.",
        spa_intro_title: "Care for Body & Soul",
        spa_intro_text: "Over 2500 m², the Golden Atlas Spa unfolds a refined world of well-being and beauty.",
        hbt_best_hotel: "Being distinguished several times as the best hotel in the world honors and commits us.",
        hbt_excellence: "Our excellence is the result of relentless work by our teams.",
        resto_intro_title: "Culinary Excellence",
        resto_intro_text: "Restaurants signed by world-renowned chefs.",
        resto_asian_title: "The Asian",
        resto_asian_desc: "Asian flavors of incredible finesse.",
        resto_italian_title: "The Italian",
        resto_italian_desc: "La dolce vita in all its splitting splendor.",
        resto_chef_jg: "by Jean-Georges Vongerichten",
        resto_chef_simone: "by Simone Zanoni",
        transport_hero_tag: "Exceptional Transfers",
        transport_hero_title: "The Art of Travel",
        transport_hero_desc: "Discover our private limousines and classic cars for your journeys.",
        transport_card1_title: "Private Chauffeur",
        transport_card1_desc: "Bilingual drivers trained to luxury hospitality standards.",
        transport_card2_title: "Vintage Collection",
        transport_card2_desc: "For your special events or weddings in the desert.",
        transport_contact_msg: "For any transport service, please inform us 48 hours before your arrival at 06 48 12 05 77.",
        loc_title: "Location & Access",
        loc_surtitle: "Destination Errachidia",
        loc_text: "Located in the heart of the imperial city, Golden Atlas is the perfect starting point to explore the treasures of Tafilalet. A prestigious location just steps from iconic landmarks.",
        loc_address: "Avenue Bab Jdid, 40040 Errachidia, Morocco",
        auth_req_title: "Login Required",
        auth_req_desc: "You must create an account or log in before making a reservation.",
        auth_req_login: "Login",
        auth_req_signup: "Sign Up",
        auth_req_cancel: "Cancel"
    },
    ES: {
        nav_login: "IDENTIFICARSE",
        hero_title: "Golden Atlas",
        hero_subtitle: "Palacio · Errachidia · Desde 1923",
        menu_home: "INICIO",
        menu_rooms: "ALOJAMIENTOS",
        menu_chambres: "Habitaciones",
        menu_suites: "Suites",
        menu_vip: "Habitaciones VIP",
        menu_riads: "Los Riads",
        menu_pavillon: "El Pabellón",
        menu_spa: "SPA Y BIENESTAR",
        menu_dining: "Gastronomía",
        menu_transport: "SERVICIO DE TRANSPORTE",
        footer_contact_title: "Contáctenos",
        contact_send: "ENVIAR",
        whatsapp: "WhatsApp",
        nav_admin: "LLAMAR DIRECTAMENTE",
        nav_reserve: "RESERVAR HABITACIÓN",
        discover: "Descubrir",
        discover_gym: "DESCUBRE EL FITNESS",
        discover_spa: "DESCUBRE EL SPA",
        rest_breakfast_hours: "7:00 - 10:30",
        rest_breakfast_title: "El Desayuno",
        rest_breakfast_sub: "Buffet Gourmet y Tradiciones",
        rest_breakfast_desc: "Comience su día con una celebración de frescura. Bollería crujiente, frutas de temporada bañadas por el sol y especialidades marroquíes auténticas.",
        rest_lunch_hours: "12:30 - 15:00",
        rest_lunch_title: "El Almuerzo",
        rest_lunch_sub: "Frescura y Sol",
        rest_lunch_desc: "Un paréntesis soleado bajo los arcos. Disfrute de ensaladas crujientes, pescado a la parrilla del día y carnes delicadamente especiadas.",
        rest_dinner_hours: "19:00 - 23:00",
        rest_dinner_title: "La Cena",
        rest_dinner_sub: "Elegancia Gastronómica",
        rest_dinner_desc: "Iluminada por la luz de las velas, la cena es una experiencia mística. Nuestro menú fusiona la herencia ancestral marroquí con técnicas culinarias modernas.",
        suites_intro: "Las suites del Golden Atlas son mucho más que una simple estancia; son amplios santuarios que combinan el arte tradicional con los más altos estándares del lujo internacional. Disfrute de vistas panorámicas y un servicio totalmente personalizado.",
        suite_celestial_desc: "Un horizonte más allá de la imaginación. Una suite real que ofrece infinitas vistas de las montañas del Atlas con una amplia terraza privada para cenar bajo las estrellas.",
        suite_palm_desc: "Entre palmeras y oro. Una suite de lujo rodeada por los jardines cantores del hotel, con un diseño interior que combina cobre martillado y seda natural.",
        suite_zellige_desc: "Una obra de arte en auténtico Zellige de Fez. Una suite que encarna el esplendor de la arquitectura marroquí con modernos toques reales y un confort que supera las expectativas.",
        suite_midnight_desc: "El encanto del desierto en el silencio de la noche. Esta suite presenta un diseño cálido e iluminación relajante para una serenidad inigualable en el corazón del hotel.",
        suite_price_label: "Precio",
        suite_per_night: "Noche",
        suite_book_btn: "RESERVAR ESTA SUITE",
        hotel_name: "GOLDEN ATLAS ERRACHIDIA",
        booking_title: "Reserve su estancia",
        form_name: "Nombre completo",
        form_arrival: "Fecha de llegada",
        form_departure: "Fecha de salida",
        form_guests: "Huéspedes",
        footer_since: "Desde 1923",
        footer_rights: "© 2026 Golden Atlas Errachidia. Todos los derechos reservados.",
        footer_legal: "Aviso Legal",
        footer_privacy: "Privacidad",
        footer_sitemap: "Mapa del sitio",
        cafe_tea_title: "Té de Menta Real",
        cafe_tea_desc: "El ritual tradicional preparado con menta fresca.",
        gym_cardio_title: "Zona Cardio",
        gym_cardio_desc: "Cintas de correr y vélos de alto rendimiento.",
        gym_strength_title: "Fuerza y Musculación",
        gym_strength_desc: "Equipos de carga guiada para un refuerzo completo.",
        gym_yoga_title: "Estudio de Yoga",
        gym_yoga_desc: "Un espacio tranquilo para yoga y Pilates.",
        gym_intro_title: "Equilibrio y Rendimiento",
        gym_intro_text: "Equipado con la última tecnología Technogym.",
        hbt_intro_title: "El Arte de la Estancia Absoluta",
        hbt_intro_text: "Golden Atlas posee un arte particular de reinventarse sin cesar.",
        riad_intro_title: "Su refugio privado de paz",
        riad_intro_text: "Cada Riad es un mundo aparte.",
        spa_intro_title: "Cuidado de cuerpo y alma",
        spa_intro_text: "El Spa del Golden Atlas ofrece un universo refinado de bienestar.",
        resto_intro_title: "Excelencia Culinaria",
        resto_intro_text: "Restaurantes firmados por chefs de renombre mundial.",
        transport_hero_title: "El Arte de Viajar",
        transport_hero_desc: "Limusinas privadas y coches clásicos para sus trayectos.",
        loc_title: "Ubicación y Acceso",
        loc_surtitle: "Destino Errachidia",
        loc_text: "Situado en el corazón de la ciudad imperial, Golden Atlas es el punto de partida perfecto para explorar los tesoros del Tafilalet. Una ubicación de prestigio a pocos pasos de los lugares emblemáticos.",
        loc_address: "Avenida Bab Jdid, 40040 Errachidia, Marruecos",
        auth_req_title: "Inicio de sesión requerido",
        auth_req_desc: "Debe crear una cuenta o iniciar sesión antes de realizar una reserva.",
        auth_req_login: "Iniciar sesión",
        auth_req_signup: "Regístrate",
        auth_req_cancel: "Cancelar"
    },
    AR: {
        nav_login: "تسجيل الدخول",
        hero_title: "غولدن أطلس",
        hero_subtitle: "قصر · الرشيدية · منذ 1923",
        hotel_name: "غولدن أطلس الرشيدية",
        booking_title: "احجز إقامتك",
        form_name: "الاسم الكامل",
        form_arrival: "تاريخ الوصول",
        form_departure: "تاريخ المغادرة",
        form_guests: "عدد المسافرين",
        intro_surtitle: "مرحباً بكم",
        intro_title: "في قلب أسطورتنا",
        intro_text: "وفياً لهويته الفريدة، يعيد غولدن أطلس ابتكار نفسه باستمرار في سحر دائم يجمع بين الأناقة والاستثناء. منذ عام 1923، تراث من الرقي لا يضاهى.",
        menu_home: "الرئيسية",
        menu_rooms: "أماكن الإقامة",
        menu_chambres: "الغرف",
        menu_suites: "الأجنحة",
        menu_vip: "غرف VIP",
        menu_riads: "الرياضات",
        menu_pavillon: "الجناح",
        menu_massage: "التدليك",
        menu_hammam: "الحمام",
        menu_spa: "السبا والرفاهية",
        menu_dining: "المطاعم",
        menu_bar: "البار",
        menu_pool: "المسبح",
        menu_mosquee: "المسجد الكبير",
        mosque_surtitle: "التراث والروحانية",
        mosque_title: "المسجد الكبير",
        menu_events: "قاعة الأفراح",
        menu_rest: "المطعم",
        menu_gym: "قاعة الرياضة",
        menu_cafe: "المقهى",
        menu_transport: "خدمة النقل",
        footer_since: "منذ 1923",
        footer_contact_title: "اتصل بنا",
        footer_contact_sub: "شاركنا انطباعاتك أو ملاحظاتك أو تشكراتك.",
        contact_placeholder: "اكتب رسالتك...",
        contact_send: "إرسال",
        nav_admin: "الإدارة",
        whatsapp: "واتساب",
        call_direct: "اتصال مباشر",
        nav_reserve: "حجز الغرف",
        discover: "اكتشف",
        discover_gym: "اكتشف مركز اللياقة",
        discover_spa: "اكتشف السبا",
        rest_breakfast_title: "فطور القصر الملكي",
        rest_breakfast_sub: "صحوة الحواس والتقاليد",
        rest_breakfast_desc: "احتفال صباحي بالنكهات الأصيلة.",
        rest_lunch_hours: "12:30 - 15:00",
        rest_lunch_title: "وليمة الشمس",
        rest_lunch_sub: "انتعاش، توابل وهدوء",
        rest_lunch_desc: "غداء راقي تحت ضياء الشمس.",
        rest_dinner_hours: "19:00 - 23:00",
        rest_dinner_title: "أوج الليل",
        rest_dinner_sub: "فن الطبخ المغربي الرفيع",
        rest_dinner_desc: "أناقة العشاء الأسطوري تحت النجوم.",
        suites_intro: "الأجنحة في فندق أطلس الذهبي هي أكثر من مجرد إقامة؛ إنها ملاذات واسعة تجمع بين الفن التقليدي وأعلى معايير الرفاهية العالمية. استمتع بإطلالات بانورامية وخدمة مخصصة بالكامل.",
        suite_celestial_desc: "أفق يتجاوز الخيال. جناح ملكي يوفر إطلالة لا متناهية على جبال الأطلس مع شرفة خاصة واسعة لتناول العشاء تحت النجوم.",
        suite_palm_desc: "بين النخيل والذهب. جناح فاخر محاط بجنيات الفندق الغناء، يتميز بتصميم داخلي يجمع بين النحاس المطروق والحرير الطبيعي.",
        suite_zellige_desc: "لوحة فنية من الزليج الفاسي الأصيل. جناح يجسد روعة الهندسة المغربية بلمسات ملكية عصرية وراحة تفوق التوقعات.",
        suite_midnight_desc: "سحر الصحراء في سكون الليل. يتميز هذا الجناح بتصميم دافئ وإضاءة هادئة تجعلك تشعر بسكينة لا مثيل لها فب قلب الفندق.",
        suite_price_label: "السعر",
        suite_per_night: "ليلة",
        suite_book_btn: "حجز هذا الجناح",
        rever_surtitle: "تقليد من الكيمياء",
        rever_title: "كاشفات الروح",
        rever_text_1: "منذ قرون، يتوقف المسافرون في تافيلالت لاستكشاف أسرار الرشيدية. فندق أطلس الذهبي هو الملاذ حيث تروي كل تفصيلة قصة ترحيب ومشاركة.",
        rever_text_2: "مجموعة من الغرف والأجنحة الاستثنائية، مصممة لتكون ملاذكم بسلام.",
        thanks_surtitle: "امتنان وتقدير",
        thanks_title: "كلمة شكر",
        thanks_p1: "نود أن نعرب عن خالص شكرنا للأطفال ولكم جميعاً، مجتمعنا العزيز، على رقي زيارتكم وتبادلاتكم الرائعة.",
        thanks_p2: "لطفكم، ابتساماتكم الدافئة وجودة علاقتنا هي الثروة الحقيقية لمؤسستنا.",
        meta_surtitle: "تأمل، انبهر:",
        meta_title: "أطلس الذهبي في تحول",
        meta_quote: "«يجب أن يتغير كل شيء حتى لا يتغير شيء»",
        meta_p1: "يمتلك أطلس الذهبي فناً خاصاً في إعادة ابتكار نفسه باستمرار دون أن يخون ذاكرته أبداً، وفياً دائماً لهويته الفريدة.",
        meta_p2: "تتوزع المطاعم في كيمياء من الأجواء متعددة الأوجه، والأماكن العامة تسمو بجمالها.",
        explore_surtitle: "احلم، انبهر، استكشف:",
        explore_title: "إقامة لا تنسى",
        explore_p1: "إذا شعرت بالحاجة إلى الحركة، اكتشف صالة اللياقة البدنية المجهزة، ملاعب التنس أو الحدائق.",
        explore_p2: "السبا والحمامات في انتظارك للاعتناء بك.",
        explore_p4: "ثم هناك الرشيدية، بقلبها النابض عند أبواب الفندق مباشرة.",
        explore_p5: "في دقائق قليلة، تجد نفسك أمام المسجد الكبير، ثم في الساحة النابضة بالحياة.",
        explore_p6: "لزيارة الأماكن الأساسية في المدينة - الحدائق، القصر... يسعدنا تنظيم رحلاتكم.",
        inspire_title: "مستوحى منكم",
        footer_hotel: "الفندق",
        footer_rooms: "الإقامة",
        footer_dining: "المطاعم",
        footer_spa: "السبا والرفاهية",
        footer_events: "الفعاليات",
        footer_gallery: "معرض الصور",
        footer_careers: "الوظائف",
        footer_press: "الصحافة",
        menu_footer_century: "قرن من التميز",
        menu_footer_contact: "اتصل بنا",
        vip_extra_service: "إضافة خدمة إضافية",
        help_title: "هل تحتاج إلى مساعدة؟",
        popular_rooms_title: "غرف مشهورة",
        book_now_btn: "احجز الآن",
        footer_rights: "© 2026 Golden Atlas Errachidia. جميع الحقوق محفوظة.",
        footer_legal: "إشعار قانوني",
        footer_privacy: "سياسة الخصوصية",
        footer_sitemap: "خريطة الموقع",
        cafe_tea_title: "شاي بالنعناع الملكي",
        cafe_tea_desc: "الطقس التقليدي، المحضر بالنعناع الطازج ويقدم مع تشكيلة من الحلويات المغربية الرفيعة.",
        gym_cardio_title: "منطقة الكارديو",
        gym_cardio_desc: "أجهزة المشي والدراجات وأجهزة التمارين المتعددة عالية الأداء.",
        gym_strength_title: "القوة وبناء الأجسام",
        gym_strength_desc: "أجهزة الوزن الموجهة والأوزان الحرة لتقوية كاملة.",
        gym_yoga_title: "استوديو اليوجا",
        gym_yoga_desc: "مساحة هادئة مخصصة لليوجا والبيلاتس والتمدد.",
        gym_intro_title: "توازن وأداء",
        gym_intro_text: "مجهزة بالكامل بأحدث تقنيات تكنوجيم.",
        suites_intro_title: "مساحات مصممة للدهشة",
        hbt_intro_title: "فن الإقامة المطلقة",
        hbt_intro_text: "يمتلك أطلس الذهبي فناً خاصاً في إعادة ابتكار نفسه باستمرار دون خيانة ذاكرته.",
        riad_intro_title: "ملاذكم الخاص للسلام",
        riad_intro_text: "كل رياض هو عالم بحد ذاته - منزل خاص يقع داخل أطلس الذهبي.",
        riad_amenity_pool: "مسبح خاص",
        riad_amenity_butler: "خادم مخصص 24/7",
        cafe_nousnous_title: "نص نص",
        cafe_nousnous_desc: "التوازن المثالي بين الإسبريسو القوي والحليب الكريمي.",
        cafe_espresso_title: "إسبريسو",
        cafe_espresso_desc: "الجوهر النقي للقهوة مستخلص تحت الضغط.",
        spa_hammam_title: "الحمامات",
        spa_hammam_desc: "طقس أصيل في ديكور فخم.",
        spa_massage_title: "المساج",
        spa_massage_desc: "من التدليك الخفيف إلى التدليك العميق.",
        spa_facials_title: "علاجات الوجه",
        spa_facials_desc: "عناية مخصصة بأفضل الماركات العالمية.",
        spa_intro_title: "عناية بالجسد والروح",
        spa_intro_text: "على مساحة 2500 متر مربع، يقدم سبا أطلس الذهبي عالماً راقياً من الرفاهية والجمال.",
        hbt_best_hotel: "تكريمنا كأفضل فندق في العالم عدة مرات يشرفنا ويلزمنا بمواصلة التميز.",
        hbt_excellence: "تميزنا هو ثمرة العمل الدؤوب لفرقنا.",
        resto_intro_title: "التميز في الطهي",
        resto_intro_text: "مطاعم تحمل توقيع طهاة عالميين.",
        resto_asian_title: "الآسيوي",
        resto_asian_desc: "نكهات آسيوية ببراعة مذهلة.",
        resto_italian_title: "الإيطالي",
        resto_italian_desc: "الحياة الجميلة بكل روعتها.",
        resto_chef_jg: "بواسطة Jean-Georges Vongerichten",
        resto_chef_simone: "بواسطة Simone Zanoni",
        transport_hero_tag: "انتقالات استثنائية",
        transport_hero_title: "فن السفر",
        transport_hero_desc: "اكتشف ليموزيننا الخاصة وسياراتنا الكلاسيكية لرحلاتكم.",
        transport_card1_title: "سائق خاص",
        transport_card1_desc: "سائقون يتحدثون لغتين مدربون على معايير الضيافة الفاخرة.",
        transport_card2_title: "مجموعة كلاسيكية",
        transport_card2_desc: "لمناسباتكم الخاصة أو حفلات الزفاف في الصحراء.",
        transport_contact_msg: "لأي خدمة نقل، يرجى إبلاغنا قبل 48 ساعة من وصولكم على 06 48 12 05 77.",
        loc_title: "الموقع والوصول",
        loc_surtitle: "وجهة الرشيدية",
        loc_text: "يقع فندق غولدن أطلس في قلب المدينة الإمبراطورية، وهو نقطة الانطلاق المثالية لاستكشاف كنوز تافيلالت. موقع مرموق على بعد خطوات قليلة من المعالم الأثرية.",
        loc_address: "شارع باب جديد، 40040 الرشيدية، المغرب",
        auth_req_title: "تسجيل الدخول مطلوب",
        auth_req_desc: "يجب عليك إنشاء حساب أو تسجيل الدخول قبل إجراء الحجز.",
        auth_req_login: "تسجيل الدخول",
        auth_req_signup: "إنشاء حساب",
        auth_req_cancel: "إلغاء"
    }
};

/**
 * UTILITIES
 */
function showToast(msg, bg = "var(--gold)", duration = 3000) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = msg;
    toast.style.background = bg;
    document.body.appendChild(toast);
    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
        setTimeout(() => toast.remove(), 500);
    }, duration);
}

function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const translation = translations[lang] ? translations[lang][key] : null;
        if (translation) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                el.textContent = translation;
            }
        }
    });
    // Handle Arabic Layout
    document.body.dir = lang === 'AR' ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-ar', lang === 'AR');
}

/**
 * INITIALIZATION
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log("Golden Atlas Script Initialized");

    // 0. QUICK LOGIN LISTENER (Higher Priority)
    const loginBtn = document.getElementById('btn-top-login');
    if (loginBtn) {
        loginBtn.onclick = (e) => {
            console.log("Login clicked");
            window.location.href = 'login-client.html';
        };
    }
    
    // 1. LANGUAGE & AUTH CHECK
    const savedLang = localStorage.getItem('ga_lang') || 'FR';
    const currentLangEl = document.getElementById('current-lang');
    if (currentLangEl) currentLangEl.textContent = savedLang;
    updateLanguage(savedLang);

    const currentUser = JSON.parse(localStorage.getItem('ga_current_user') || 'null');
    if (currentUser && loginBtn) {
        loginBtn.innerHTML = `
            <div id="user-profile-trigger" style="display:flex; align-items:center; gap:10px; cursor:pointer; position:relative;">
                <div style="width:32px; height:32px; background:var(--gold); color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.8rem;">
                    ${currentUser.name.charAt(0).toUpperCase()}
                </div>
                <div style="text-align:left; line-height:1.1;">
                     <span style="display:block; font-size:0.6rem; opacity:0.6; letter-spacing:1px;">MOHSIN</span>
                     <span style="display:block; font-size:0.75rem; font-weight:600; letter-spacing:1px;">BIENVENUE</span>
                </div>
                <ul id="user-dropdown" style="display:none; position:absolute; top:40px; right:0; background:#111; border:1px solid rgba(255,255,255,0.1); width:200px; padding:10px 0; list-style:none; z-index:2001; animation: fadeIn 0.3s ease;">
                    <li id="show-my-account" style="padding:12px 20px; font-size:0.7rem; letter-spacing:1px; cursor:pointer; transition:0.3s; border-bottom:1px solid rgba(255,255,255,0.05);">👤 MON COMPTE</li>
                    <li id="show-my-res" style="padding:12px 20px; font-size:0.7rem; letter-spacing:1px; cursor:pointer; transition:0.3s; border-bottom:1px solid rgba(255,255,255,0.05);">MES RÉSERVATIONS</li>
                    <li id="client-logout" style="padding:12px 20px; font-size:0.7rem; letter-spacing:1px; color:#ef4444; cursor:pointer; transition:0.3s;">DÉCONNEXION</li>
                </ul>
            </div>
        `;
        loginBtn.removeAttribute('data-i18n');
        loginBtn.style.background = 'none';
        loginBtn.style.border = 'none';
        loginBtn.style.padding = '0';
        loginBtn.style.boxShadow = 'none';

        // Dropdown toggle
        const trigger = document.getElementById('user-profile-trigger');
        const dropdown = document.getElementById('user-dropdown');
        trigger?.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
        });
        document.addEventListener('click', () => { if (dropdown) dropdown.style.display = 'none'; });

        // Mon Compte
        document.getElementById('show-my-account')?.addEventListener('click', () => {
            window.location.href = 'login-client.html';
        });

        // Logout
        document.getElementById('client-logout')?.addEventListener('click', () => {
            localStorage.removeItem('ga_current_user');
            location.reload();
        });

        // Show Reservations (Redirect to Dedicated Page)
        document.getElementById('show-my-res')?.addEventListener('click', () => {
            window.location.href = 'mes-reservations.html';
        });
    }

    async function loadUserReservations(email) {
        const listContainer = document.getElementById('user-res-list');
        if (!listContainer || !window.supabaseClient) return;

        const { data, error } = await window.supabaseClient
            .from('ga_reservations')
            .select('*')
            .eq('user_email', email)
            .order('created_at', { ascending: false });

        if (error || !data) {
            listContainer.innerHTML = '<p style="text-align:center; padding:20px;">Aucune donnée trouvée.</p>';
            return;
        }

        window.localReservations = data;
        listContainer.innerHTML = data.map(r => `
            <div style="border:1px solid rgba(255,255,255,0.1); padding:15px; margin-bottom:10px; border-radius:8px; display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.02);">
                <div>
                    <h4 style="color:var(--gold); margin-bottom:5px;">${r.room}</h4>
                    <p style="font-size:0.7rem; opacity:0.6; margin-bottom:4px;">Réf: #GA-${r.id.slice(0,8).toUpperCase()}</p>
                    <p style="font-size:0.75rem; opacity:0.8;">${r.arrival} — ${r.departure}</p>
                    <div style="margin-top:8px;">
                        <span style="font-size:0.6rem; padding:3px 10px; border-radius:50px; background:${r.status === 'Validée' ? 'rgba(34,197,94,0.15)' : 'rgba(201,168,76,0.15)'}; color:${r.status === 'Validée' ? '#22c55e' : '#c9a84c'}; font-weight:600; text-transform:uppercase; letter-spacing:1px;">
                            ${r.status || 'En attente'}
                        </span>
                    </div>
                </div>
                <div style="text-align:right;">
                ${r.status === 'Validée' ? `
                    <button class="btn-gold" style="padding:10px 18px; font-size:0.7rem; letter-spacing:1px; font-weight:600;" onclick="downloadReservationPDF('${r.id}')">TÉLÉCHARGER PDF</button>
                ` : '<p style="font-size:0.65rem; opacity:0.4; letter-spacing:1px;">VALIDATION EN COURS</p>'}
                </div>
            </div>
        `).join('') || '<p style="text-align:center; padding:20px; opacity:0.5;">Vous n\'avez pas encore effectué de réservation.</p>';
    }

    document.getElementById('btn-user-res-close')?.addEventListener('click', () => {
        document.getElementById('user-reservations-modal')?.classList.remove('active');
        document.getElementById('modal-overlay')?.classList.remove('active');
    });

    /**
     * ROOM PRICE MAP
     */
    const ROOM_PRICES = {
        'Chambre Supérieure Atlas': 3200, 'Chambre Deluxe Jardin': 3950,
        'Suite Junior Palmier': 4800, 'Suite Prestige Royale': 12000,
        'Suite Céleste': 12000, 'Suite des Palmiers': 15500,
        'Suite Zellige': 18000, 'Suite Midnight': 22000,
        'Riad Al Andalous': 18000, 'Riad Majorelle': 22000,
        'Riad des Jasmins': 16500, 'Riad Impérial': 25000,
        'Le Marocain': 950, "L'Asiatique": 1200, "L'Italien": 1100,
        'Le Churchill': 300, 'Bar Majorelle': 400, 'Le Pavillon': 850,
        'Les Hammams': 800, 'Les Massages': 1200, 'Les Soins Visage': 1500,
        'La Piscine & Sports': 600, 'VIP Presidential Suite': 15000,
        'VIP Royal Palace': 12000, 'Générique': 1500
    };
    function getRoomPrice(roomName) {
        if (!roomName) return 1500;
        const priceMap = {
            'Chambre Supérieure Atlas': 3200, 'Chambre Deluxe Jardin': 3950,
            'Suite Junior Palmier': 4800, 'Suite Prestige Royale': 12000,
            'Suite Céleste': 12000, 'Suite des Palmiers': 15500,
            'Suite Zellige': 18000, 'Suite Midnight': 22000,
            'Riad Al Andalous': 18000, 'Riad Majorelle': 22000,
            'Riad des Jasmins': 16500, 'Riad Impérial': 25000,
            'Le Marocain': 950, "L'Asiatique": 1200, "L'Italien": 1100,
            'Le Churchill': 300, 'Bar Majorelle': 400, 'Le Pavillon': 850,
            'Les Hammams': 800, 'Les Massages': 1200, 'Les Soins Visage': 1500,
            'La Piscine & Sports': 600, 'VIP Presidential Suite': 15000,
            'VIP Royal Palace': 12000, 'Générique': 1500
        };
        const exact = priceMap[roomName];
        if (exact) return exact;
        const partial = Object.keys(priceMap).find(k =>
            roomName.toLowerCase().includes(k.toLowerCase()) ||
            k.toLowerCase().includes(roomName.toLowerCase())
        );
        return partial ? priceMap[partial] : 1500;
    }

    function calculateNights(arrival, departure) {
        if (!arrival || !departure) return 1;
        const a = new Date(arrival);
        const d = new Date(departure);
        const diff = d - a;
        const nights = Math.ceil(diff / (1000 * 60 * 60 * 24));
        return nights > 0 ? nights : 1;
    }

    /**
     * PDF GENERATOR (with pricing & loyalty discount)
     */
    window.downloadReservationPDF = function(resId) {
        const reservations = window.localReservations;
        const res = reservations?.find(r => r.id == resId);
        if (!res) return;

        const resIndex = reservations.indexOf(res);
        const totalRes = reservations.length;
        const resNumber = totalRes - resIndex;

        const pricePerUnit = getRoomPrice(res.room);
        const nights = (res.room.includes('Chambre') || res.room.includes('Suite') || res.room.includes('Riad')) 
            ? calculateNights(res.arrival, res.departure) 
            : 1;
        const baseTotal = pricePerUnit * nights;
        
        const isDiscountedRes = (resNumber % 10 === 0);
        const discountAmount = isDiscountedRes ? Math.round(baseTotal * 0.25) : 0;
        const finalPrice = baseTotal - discountAmount;

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Header
        doc.setFillColor(15, 15, 15);
        doc.rect(0, 0, 210, 50, 'F');
        doc.setTextColor(201, 168, 76);
        doc.setFontSize(28);
        doc.text("GOLDEN ATLAS", 105, 25, { align: 'center' });
        doc.setFontSize(10);
        doc.setTextColor(150, 110, 50);
        doc.text("P A L A C E  ·  E R R A C H I D I A", 105, 33, { align: 'center' });
        doc.text("DEPUIS 1923", 105, 38, { align: 'center' });

        // Title
        doc.setTextColor(40, 40, 40);
        doc.setFontSize(20);
        doc.text("BON DE SEJOUR & FACTURE", 20, 68);
        doc.setDrawColor(201, 168, 76);
        doc.setLineWidth(1);
        doc.line(20, 73, 190, 73);

        // Meta
        doc.setFontSize(9);
        doc.setTextColor(120, 120, 120);
        doc.text("Dossier : GA-" + res.id.slice(0,8).toUpperCase(), 20, 82);
        doc.text("Emis le : " + new Date().toLocaleDateString('fr-FR'), 190, 82, { align: 'right' });
        doc.text("Reservation N : #" + resNumber, 20, 88);

        // Client & Stay
        doc.setFontSize(9);
        doc.setTextColor(120, 120, 120);
        doc.text("INFORMATIONS CLIENT", 20, 100);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        doc.text("Nom : " + res.name.toUpperCase(), 20, 108);
        doc.text("Email : " + (res.user_email || 'Non renseigne'), 20, 116);

        doc.setFontSize(9);
        doc.setTextColor(120, 120, 120);
        doc.text("DETAILS DE LA RESERVATION", 120, 100);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        doc.text("Article : " + res.room, 120, 108);
        doc.text("Date : " + res.arrival + (nights > 1 ? " (" + nights + " nuits)" : ""), 120, 116);

        // Summary Table
        const tableY = 135;
        doc.setFillColor(248, 245, 240);
        doc.rect(20, tableY, 170, 70, 'F');
        doc.setDrawColor(201, 168, 76);
        doc.rect(20, tableY, 170, 70, 'S');

        doc.setFontSize(10);
        doc.setTextColor(150, 110, 50);
        doc.text("DETAIL DU PRIX", 30, tableY + 12);

        doc.setTextColor(60, 60, 60);
        doc.text("Prix unitaire :", 30, tableY + 25);
        doc.setTextColor(0, 0, 0);
        doc.text(pricePerUnit.toLocaleString() + " DH", 90, tableY + 25);

        doc.setTextColor(60, 60, 60);
        doc.text("Quantite :", 30, tableY + 35);
        doc.setTextColor(0, 0, 0);
        doc.text(nights.toString(), 90, tableY + 35);

        doc.setTextColor(60, 60, 60);
        doc.text("Sous-total :", 30, tableY + 45);
        doc.setTextColor(0, 0, 0);
        doc.text(baseTotal.toLocaleString() + " DH", 90, tableY + 45);

        if (isDiscountedRes) {
            doc.setTextColor(34, 139, 34);
            doc.text("REDUCTION FIDELITE (10e) :", 30, tableY + 55);
            doc.text("- 25% (-" + discountAmount.toLocaleString() + " DH)", 110, tableY + 55);

            doc.setDrawColor(201, 168, 76);
            doc.line(30, tableY + 59, 180, tableY + 59);

            doc.setTextColor(0, 0, 0);
            doc.setFontSize(13);
            doc.text("NET A PAYER :", 30, tableY + 65);
            doc.setTextColor(201, 168, 76);
            doc.text(finalPrice.toLocaleString() + " DH", 110, tableY + 65);
        } else {
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(12);
            doc.text("TOTAL A PAYER :", 30, tableY + 65);
            doc.setTextColor(201, 168, 76);
            doc.text(baseTotal.toLocaleString() + " DH", 110, tableY + 65);
        }

        // Footer & Progress
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text("Golden Atlas Errachidia - Avenue Mohammed V, Errachidia", 105, 270, { align: 'center' });
        doc.save("Recu_GoldenAtlas_" + res.name.replace(' ','_') + ".pdf");
    };

    // 2. SCROLL EFFECTS (Header & Revelations)
    const header = document.getElementById('main-header');
    const isSubPage = header?.classList.contains('header-dark');

    window.addEventListener('scroll', () => {
        if (!header) return;
        if (window.scrollY > 80) {
            header.classList.add('scrolled');
            header.classList.remove('header-dark');
        } else {
            header.classList.remove('scrolled');
            if (isSubPage) header.classList.add('header-dark');
        }
    });

    // Intersection Observer for Reveal
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.05 });

    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('visible');
        }
        revealObserver.observe(el);
    });

    // 3. UI COMPONENTS (Menu, Lang, Theme)
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const megaMenu = document.getElementById('mega-menu');

    menuBtn?.addEventListener('click', () => {
        megaMenu?.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    closeBtn?.addEventListener('click', () => {
        megaMenu?.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Highlight Current Menu Page
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#mega-menu .sub-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.style.color = 'var(--gold)';
        }
    });
    
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('ga_theme') || 'light';
    if (savedTheme === 'dark') document.body.classList.add('dark-mode');

    themeToggle?.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('ga_theme', isDark ? 'dark' : 'light');
        const sun = document.getElementById('sun-icon');
        const moon = document.getElementById('moon-icon');
        if (sun && moon) {
            sun.style.display = isDark ? 'block' : 'none';
            moon.style.display = isDark ? 'none' : 'block';
        }
    });

    // Lang Dropdown
    document.getElementById('lang-selector')?.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelector('.lang-dropdown')?.classList.toggle('active');
    });
    document.querySelectorAll('.lang-dropdown li').forEach(li => {
        li.addEventListener('click', () => {
            const lang = li.dataset.lang;
            localStorage.setItem('ga_lang', lang);
            location.reload(); 
        });
    });
    document.addEventListener('click', () => document.querySelector('.lang-dropdown')?.classList.remove('active'));

    // 4. MODAL MANAGEMENT
    const resvModal = document.getElementById('reservation-modal');
    const authModal = document.getElementById('auth-modal');
    const overlay = document.getElementById('modal-overlay');

    window.openModalGlobal = function() {
        resvModal?.classList.add('active');
        overlay?.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    function closeAllModals() {
        resvModal?.classList.remove('active');
        authModal?.classList.remove('active');
        overlay?.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.getElementById('modal-close')?.addEventListener('click', closeAllModals);
    document.getElementById('auth-modal-close')?.addEventListener('click', closeAllModals);
    overlay?.addEventListener('click', closeAllModals);

    // Dynamic Room Selection
    document.querySelectorAll('.btn-room-reserver, .btn-reserver-trigger').forEach(btn => {
        btn.addEventListener('click', () => {
            const roomName = btn.dataset.room;
            const modalRoom = document.getElementById('modal-room-name');
            if (modalRoom && roomName) {
                modalRoom.textContent = roomName;
                modalRoom.style.display = 'block';
            }
            window.openModalGlobal();
        });
    });

    // 5. RESERVATION FORM — Auto-fill from logged-in user
    const bookingForm = document.getElementById('booking-form');
    const bookingNameInput = document.getElementById('booking-name');

    // Pre-fill name if user is logged in
    if (currentUser && bookingNameInput) {
        bookingNameInput.value = currentUser.name || '';
        bookingNameInput.style.background = 'rgba(197,160,89,0.08)';
        bookingNameInput.setAttribute('title', 'Rempli depuis votre compte');
    }

    bookingForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const arr = document.getElementById('booking-arrival')?.value || document.getElementById('booking-date')?.value;
        const dep = document.getElementById('booking-departure')?.value || ""; 
        const name = document.getElementById('booking-name')?.value;
        const guests = document.getElementById('booking-guests')?.value;
        const room = document.getElementById('modal-room-name')?.textContent || 'Générique';

        if (!window.supabaseClient) {
            showToast("Err: Supabase not ready.");
            return;
        }

        const { error } = await window.supabaseClient.from('ga_reservations').insert([{
            name, arrival: arr, departure: dep, guests, room, status: 'En attente',
            user_email: currentUser ? currentUser.email : null
        }]);

        if (error) {
            showToast("Erreur lors de l'envoi.");
        } else {
            showToast("Réservation confirmée ! <br><button onclick=\"location.href='login-client.html'\" style='margin-top:10px; background:#000; color:var(--gold); border:1px solid var(--gold); padding:5px 10px; cursor:pointer; font-size:0.6rem;'>VOIR MES RÉSERVATIONS</button>", "var(--gold)", 6000);
            closeAllModals();
        }
    });

    // 6. FEEDBACK FORM
    document.getElementById('feedback-form')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const msg = document.getElementById('feedback-msg')?.value;
        if (!msg || !window.supabaseClient) return;

        const { error } = await window.supabaseClient.from('ga_feedback').insert([{
            message: msg, sender: currentUser ? currentUser.name : 'Client Anonyme', status: 'Nouveau'
        }]);

        if (!error) {
            showToast("Merci pour votre message !");
            e.target.reset();
        }
    });

    // 7. SPA MODAL GALLERY LOGIC
    const spaRoomData = {
        "Les Hammams": {
            desc: "Plongez dans l'héritage des bains marocains. Nos hammams offrent une expérience de purification profonde utilisant le savon noir à l'eucalyptus, le gant kessa traditionnel et le ghassoul des montagnes de l'Atlas.",
            features: ["Gommage traditionnel", "Bain de vapeur", "Enveloppement au Ghassoul", "Espace relaxation"],
            images: [
                "assets/les massages/Luxury_Moroccan_hammam_spa_202606152317.jpeg",
                "assets/les massages/Luxury_Moroccan_hammam_interior_202606152341.jpeg",
                "assets/les massages/Luxury_hammam_relaxation_area_202606152341.jpeg"
            ]
        },
        "Les Massages": {
            desc: "Une symphonie de gestes pour libérer les tensions. Du massage suédois relaxant au deep tissue tonifiant, nos experts utilisent des huiles d'argan bio et des essences rares pour votre bien-être.",
            features: ["Deep Tissue", "Massage Atlas Signature", "Aromathérapie", "Pierres Chaudes"],
            images: [
                "assets/les massages/Luxury_spa_massage_suite_202606152341.jpeg",
                "assets/les massages/Therapist_performing_massage_spa_202606152341.jpeg",
                "assets/les massages/Deep_tissue_massage_luxury_center_202606152341_2.jpeg"
            ]
        },
        "Les Soins Visage": {
            desc: "Révélez l'éclat de votre peau avec nos soins experts. Nous combinons technologie moderne et ingrédients naturels marocains pour des résultats visibles et une relaxation totale.",
            features: ["Hydratation Intense", "Soin Anti-Âge", "Détente Oculaire", "Diagnostic de Peau"],
            images: [
                "assets/les massages/Luxury_facial_treatment_room_202606152341.jpeg",
                "assets/les massages/Facial_mask_treatment_in_spa_202606152341.jpeg",
                "assets/les massages/Man_receiving_facial_treatment_202606152317.jpeg"
            ]
        },
        "La Piscine & Sports": {
            desc: "Un équilibre parfait entre effort et réconfort. Notre centre comprend une piscine intérieure chauffée à 28°C, une salle de fitness high-tech et des espaces de sauna traditionnel.",
            features: ["Piscine Chauffée", "Fitness High-Tech", "Sauna & Hammam Sec", "Coaching Privé"],
            images: [
                "assets/les massages/Moroccan_spa_with_fountains_202606152341.jpeg",
                "assets/les massages/Luxury_spa_relaxation_lounge_men_202606152317.jpeg",
                "assets/les massages/Man_relaxing_in_wooden_sauna_202606152317.jpeg"
            ]
        }
    };

    const gymRoomData = {
        "Zone Cardio": {
            desc: "Équipée par Technogym, notre zone cardio propose une vue inspirante et des machines de dernière génération pour votre endurance.",
            features: ["Tapis de course", "Vélos elliptiques", "Écrans connectés", "Suivi performance"],
            images: [
                "assets/fitness/cardio1.jpg",
                "assets/fitness/cardio2.jpg",
                "assets/fitness/cardio3.jpg"
            ]
        },
        "Musculation": {
            desc: "Un espace dédié à la force brute et au renforcement musculaire, avec des équipements ergonomiques pour tous les niveaux.",
            features: ["Poids libres", "Charges guidées", "Bancs réglables", "Espace fonctionnel"],
            images: [
                "assets/fitness/muscu1.jpg",
                "assets/fitness/muscu2.jpg",
                "assets/fitness/muscu3.jpg"
            ]
        },
        "Studio Yoga": {
            desc: "Retrouvez la paix intérieure dans notre studio de yoga baigné de lumière, idéal pour le Pilates, la méditation et la souplesse.",
            features: ["Tapis premium", "Accessoires fournis", "Ambiance zen", "Sessions privées"],
            images: [
                "https://images.unsplash.com/photo-1518611012118-29621e65e60d?w=1000",
                "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1000",
                "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1000"
            ]
        }
    };

    let currentGalleryIndex = 0;
    let currentGalleryImages = [];

    function updateGallery() {
        const track = document.getElementById('modal-gallery-track');
        const dots = document.getElementById('modal-gallery-dots');
        if (!track || !dots) return;

        track.innerHTML = currentGalleryImages.map(img => `<div class="modal-gallery-slide"><img src="${img}" alt="Gallery image"></div>`).join('');
        dots.innerHTML = currentGalleryImages.map((_, i) => `<div class="modal-dot ${i === currentGalleryIndex ? 'active' : ''}" data-index="${i}"></div>`).join('');
        
        track.style.transform = `translateX(-${currentGalleryIndex * 100}%)`;
    }

    document.querySelectorAll('.service-card, .btn-gold[data-room]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            const roomName = el.dataset.room;
            const data = spaRoomData[roomName] || gymRoomData[roomName];
            if (!data) return;

            // Fill modal
            const roomNameEl = document.getElementById('modal-room-name');
            const roomDescEl = document.getElementById('modal-room-desc');
            const featuresEl = document.getElementById('modal-room-features');

            if (roomNameEl) roomNameEl.textContent = roomName;
            if (roomDescEl) roomDescEl.textContent = data.desc;
            if (featuresEl) {
                featuresEl.innerHTML = data.features.map(f => `<span>${f}</span>`).join('');
            }

            currentGalleryImages = data.images;
            currentGalleryIndex = 0;
            updateGallery();

            // Set modal layout and reveal
            const detailsView = document.getElementById('modal-details-view');
            const bookingView = document.getElementById('modal-booking-view');
            if (detailsView) detailsView.style.display = 'grid';
            if (bookingView) bookingView.style.display = 'none';

            if (resvModal) {
                resvModal.classList.add('active');
            }
            if (overlay) overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    document.getElementById('modal-prev')?.addEventListener('click', () => {
        currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
        updateGallery();
    });

    document.getElementById('modal-next')?.addEventListener('click', () => {
        currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryImages.length;
        updateGallery();
    });

    document.getElementById('btn-show-booking')?.addEventListener('click', () => {
        document.getElementById('modal-details-view').style.display = 'none';
        document.getElementById('modal-booking-view').style.display = 'block';
    });

    document.getElementById('btn-back-details')?.addEventListener('click', () => {
        document.getElementById('modal-details-view').style.display = 'block';
        document.getElementById('modal-booking-view').style.display = 'none';
    });

    document.getElementById('btn-details-close')?.addEventListener('click', closeAllModals);

    // 8. EFFECTS (Hero & Menu Animation)
    if (typeof THREE !== 'undefined') {
        initHeroEffect();
        initMenuAnimation();
    }
});

/**
 * THREE.JS BACKGROUND EFFECTS
 */
function initHeroEffect() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i=0; i<1500; i++) { vertices.push((Math.random()-0.5)*15, (Math.random()-0.5)*15, (Math.random()-0.5)*15); }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const material = new THREE.PointsMaterial({ size: 0.04, color: 0xc5a059, transparent: true, opacity: 0.6 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    function animate() {
        requestAnimationFrame(animate);
        points.rotation.y += 0.001;
        renderer.render(scene, camera);
    }
    animate();
}

function initMenuAnimation() {
    const canvas = document.getElementById('menu-canvas');
    if (!canvas) return;
    
    // Configuration luxury Golden Plexus
    const color = 0xc5a059; // Gold
    const numParticles = 140;
    const maxConnectionDistance = 3.5;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    const container = canvas.parentElement;
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth/container.clientHeight, 0.1, 100);
    camera.position.z = 18;

    const positions = new Float32Array(numParticles * 3);
    const velocities = [];

    for (let i = 0; i < numParticles; i++) {
        positions[i*3] = (Math.random() - 0.5) * 35;
        positions[i*3 + 1] = (Math.random() - 0.5) * 35;
        positions[i*3 + 2] = (Math.random() - 0.5) * 15;

        velocities.push({
            x: (Math.random() - 0.5) * 0.03,
            y: (Math.random() - 0.5) * 0.03,
            z: (Math.random() - 0.5) * 0.03
        });
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
        color: color,
        size: 0.18,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending
    });
    
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    const lineMaterial = new THREE.LineBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.25,
        blending: THREE.AdditiveBlending
    });
    
    const lineGeometry = new THREE.BufferGeometry();
    // Pre-allocate large enough buffer for all possible line connections
    const linePositions = new Float32Array(numParticles * numParticles * 6);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    let angle = 0;
    
    // Mouse Interaction Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const megaMenu = document.getElementById('mega-menu');

    document.addEventListener('mousemove', (event) => {
        if (!megaMenu || !megaMenu.classList.contains('active')) return;
        const windowHalfX = container.clientWidth / 2;
        const windowHalfY = container.clientHeight / 2;
        // Calculate normalized mouse coordinates (-1 to +1 scale roughly)
        mouseX = (event.clientX - windowHalfX) * 0.02;
        mouseY = (event.clientY - windowHalfY) * 0.02;
    });

    // Link Hover Interaction (Burst effect)
    const menuLinks = document.querySelectorAll('.sub-links a');
    menuLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            // Accelerate particles momentarily
            for (let i = 0; i < numParticles; i++) {
                velocities[i].x *= 1.8;
                velocities[i].y *= 1.8;
                velocities[i].z *= 1.8;
            }
            // Flash the lines to a stronger golden glow
            lineMaterial.opacity = 0.55;
            lineMaterial.color.setHex(0xffffff); // Flash white-gold
            setTimeout(() => lineMaterial.color.setHex(color), 300);
        });
        link.addEventListener('mouseleave', () => {
            // Restore normal opacity
            lineMaterial.opacity = 0.25;
        });
    });

    let isActive = true;

    function animate() {
        if(isActive) requestAnimationFrame(animate);

        let vertexPos = 0;
        let numConnected = 0;
        const posAttr = particleGeometry.attributes.position;
        const linePosAttr = lineGeometry.attributes.position;

        // Apply friction to restore normal speed after burst
        for (let i = 0; i < numParticles; i++) {
            // Base speed limits
            const speedLimit = 0.04;
            if(Math.abs(velocities[i].x) > speedLimit) velocities[i].x *= 0.95;
            if(Math.abs(velocities[i].y) > speedLimit) velocities[i].y *= 0.95;
            if(Math.abs(velocities[i].z) > speedLimit) velocities[i].z *= 0.95;

            posAttr.array[i*3] += velocities[i].x;
            posAttr.array[i*3 + 1] += velocities[i].y;
            posAttr.array[i*3 + 2] += velocities[i].z;

            // Bounce on edges
            if (Math.abs(posAttr.array[i*3]) > 20) velocities[i].x *= -1;
            if (Math.abs(posAttr.array[i*3 + 1]) > 20) velocities[i].y *= -1;
            if (Math.abs(posAttr.array[i*3 + 2]) > 10) velocities[i].z *= -1;

            // Connect nearest nodes
            for (let j = i + 1; j < numParticles; j++) {
                const dx = posAttr.array[i*3] - posAttr.array[j*3];
                const dy = posAttr.array[i*3 + 1] - posAttr.array[j*3 + 1];
                const dz = posAttr.array[i*3 + 2] - posAttr.array[j*3 + 2];
                const distSq = dx*dx + dy*dy + dz*dz;

                if (distSq < maxConnectionDistance * maxConnectionDistance) {
                    linePosAttr.array[vertexPos++] = posAttr.array[i*3];
                    linePosAttr.array[vertexPos++] = posAttr.array[i*3 + 1];
                    linePosAttr.array[vertexPos++] = posAttr.array[i*3 + 2];

                    linePosAttr.array[vertexPos++] = posAttr.array[j*3];
                    linePosAttr.array[vertexPos++] = posAttr.array[j*3 + 1];
                    linePosAttr.array[vertexPos++] = posAttr.array[j*3 + 2];
                    numConnected++;
                }
            }
        }
        
        posAttr.needsUpdate = true;
        linePosAttr.needsUpdate = true;
        lineGeometry.setDrawRange(0, numConnected * 2);

        // Smooth Mouse Parallax Lerping
        targetX = mouseX;
        targetY = mouseY;
        scene.rotation.y += 0.05 * (targetX - scene.rotation.y);
        scene.rotation.x += 0.05 * (targetY - scene.rotation.x);

        // Continuous Cinematic Rotation added internally to the meshes
        angle += 0.001;
        particleSystem.rotation.y = Math.sin(angle) * 0.1;
        particleSystem.rotation.x = Math.cos(angle) * 0.1;
        linesMesh.rotation.y = Math.sin(angle) * 0.1;
        linesMesh.rotation.x = Math.cos(angle) * 0.1;

        renderer.render(scene, camera);
    }
    
    animate();

    const observer = new MutationObserver(() => {
        if(megaMenu && megaMenu.classList.contains('active')) {
            renderer.setSize(container.clientWidth, container.clientHeight);
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
        }
    });
    
    if(megaMenu) observer.observe(megaMenu, { attributes: true, attributeFilter: ['class'] });

    window.addEventListener('resize', () => {
        if (!megaMenu || !megaMenu.classList.contains('active')) return;
        renderer.setSize(container.clientWidth, container.clientHeight);
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
    });
}

/* === ATLAS CHAT BUTTON INJECTION — PREMIUM ANIMATED === */
document.addEventListener("DOMContentLoaded", () => {
    // Inject keyframes for Atlas Chat button animations
    const chatBtnStyles = document.createElement('style');
    chatBtnStyles.textContent = `
        @keyframes atlasChatPulse {
            0%, 100% { box-shadow: 0 4px 15px rgba(197,160,89,0.3), 0 0 0 0 rgba(197,160,89,0.4); }
            50% { box-shadow: 0 6px 25px rgba(197,160,89,0.45), 0 0 0 8px rgba(197,160,89,0); }
        }
        @keyframes atlasChatShimmer {
            0% { left: -100%; }
            100% { left: 200%; }
        }
        @keyframes atlasChatDots {
            0%, 60%, 100% { transform: translateY(0); }
            30% { transform: translateY(-3px); }
        }
        #btn-atlas-chat {
            position: relative;
            overflow: hidden;
            background: linear-gradient(135deg, #c5a059 0%, #ddc07a 40%, #a67c00 100%) !important;
            background-size: 200% 200% !important;
            border: 1px solid rgba(255,255,255,0.15) !important;
            color: #fff !important;
            margin-right: 15px;
            display: inline-flex !important;
            align-items: center;
            gap: 10px;
            font-weight: 700;
            padding: 11px 24px !important;
            border-radius: 50px !important;
            letter-spacing: 1.5px !important;
            font-size: 0.68rem !important;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
            animation: atlasChatPulse 3s ease-in-out infinite, gradShift 5s ease infinite !important;
            backdrop-filter: blur(10px);
            text-decoration: none;
        }
        #btn-atlas-chat::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 60%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
            transition: 0.5s;
            pointer-events: none;
        }
        #btn-atlas-chat:hover::before {
            animation: atlasChatShimmer 0.8s ease forwards;
        }
        #btn-atlas-chat:hover {
            transform: translateY(-3px) scale(1.06) !important;
            box-shadow: 0 12px 35px rgba(197,160,89,0.5), 0 0 0 0 rgba(197,160,89,0) !important;
            animation: none !important;
            background-size: 100% 100% !important;
            border-color: rgba(255,255,255,0.3) !important;
        }
        #btn-atlas-chat .chat-icon-wrap {
            display: flex;
            align-items: center;
            position: relative;
            width: 22px;
            height: 22px;
        }
        #btn-atlas-chat .chat-icon-wrap svg {
            width: 20px;
            height: 20px;
            filter: drop-shadow(0 2px 3px rgba(0,0,0,0.15));
            transition: transform 0.3s;
        }
        #btn-atlas-chat:hover .chat-icon-wrap svg {
            transform: scale(1.15) rotate(-5deg);
        }
        #btn-atlas-chat .chat-dots {
            position: absolute;
            bottom: 1px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 2px;
        }
        #btn-atlas-chat .chat-dots span {
            width: 3px;
            height: 3px;
            background: rgba(255,255,255,0.9);
            border-radius: 50%;
            animation: atlasChatDots 1.4s ease-in-out infinite;
        }
        #btn-atlas-chat .chat-dots span:nth-child(2) { animation-delay: 0.15s; }
        #btn-atlas-chat .chat-dots span:nth-child(3) { animation-delay: 0.3s; }
        #btn-atlas-chat .btn-text {
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            font-size: 0.68rem;
            text-shadow: 0 1px 3px rgba(0,0,0,0.15);
        }
    `;
    document.head.appendChild(chatBtnStyles);

    const headerRight = document.querySelector('.header-right');
    if(headerRight) {
        // Add Atlas Chat button
        const chatLink = document.createElement('a');
        chatLink.href = 'chat.html';
        chatLink.id = 'btn-atlas-chat';
        chatLink.innerHTML = `
            <div class="chat-icon-wrap">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
                <div class="chat-dots"><span></span><span></span><span></span></div>
            </div>
            <span class="btn-text">Atlas Chat</span>
        `;

        const loginBtn = document.getElementById('btn-top-login');
        if(loginBtn) {
            headerRight.insertBefore(chatLink, loginBtn);
        } else {
            headerRight.appendChild(chatLink);
        }
    }
});

// ── GLOBAL THREE.JS LUXURY GOLDEN DUST ANIMATION ────────────────────────────
(function initLuxuryGoldDust() {
    // Only run on non-mobile devices for performance, and check if not already loaded
    if (window.innerWidth < 768 || document.getElementById('luxury-dust-canvas')) return;

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.id = 'luxury-dust-canvas';
        Object.assign(canvas.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            zIndex: '9999', // Very high, but below modals potentially
            pointerEvents: 'none',
            mixBlendMode: 'screen',
            opacity: '0.6'
        });
        document.body.appendChild(canvas);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
        camera.position.z = 1000;

        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const particleCount = 400; // Number of floating gold dust 
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities = [];

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 3000;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 3000;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 1500;
            velocities.push({
                y: Math.random() * 0.5 + 0.1,
                x: (Math.random() - 0.5) * 0.2
            });
        }

        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        // Create a soft glowing gold material
        const canvasTexture = document.createElement('canvas');
        canvasTexture.width = 16;
        canvasTexture.height = 16;
        const ctx = canvasTexture.getContext('2d');
        const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, 'rgba(255, 230, 150, 1)');
        gradient.addColorStop(0.2, 'rgba(221, 192, 122, 0.8)');
        gradient.addColorStop(0.5, 'rgba(197, 160, 89, 0.4)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 16, 16);

        const material = new THREE.PointsMaterial({
            size: 20,
            map: new THREE.CanvasTexture(canvasTexture),
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            transparent: true,
            opacity: 0.8
        });

        const particleSystem = new THREE.Points(particles, material);
        scene.add(particleSystem);

        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - windowHalfX) * 0.5;
            mouseY = (event.clientY - windowHalfY) * 0.5;
        }, { passive: true });

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }, { passive: true });

        function animate() {
            requestAnimationFrame(animate);

            targetX = mouseX * 0.05;
            targetY = mouseY * 0.05;
            
            // Soft camera movement interacting with mouse
            camera.position.x += (mouseX * 0.2 - camera.position.x) * 0.02;
            camera.position.y += (-mouseY * 0.2 - camera.position.y) * 0.02;
            camera.lookAt(scene.position);

            const positions = particleSystem.geometry.attributes.position.array;
            for (let i = 0; i < particleCount; i++) {
                // Drift upwards
                positions[i * 3 + 1] += velocities[i].y;
                positions[i * 3] += velocities[i].x;

                // Reset particle to bottom if it goes too high
                if (positions[i * 3 + 1] > 1500) {
                    positions[i * 3 + 1] = -1500;
                    positions[i * 3] = (Math.random() - 0.5) * 3000;
                }
            }
            particleSystem.geometry.attributes.position.needsUpdate = true;
            particleSystem.rotation.y += 0.001;

            renderer.render(scene, camera);
        }
        animate();
    };
    document.head.appendChild(script);
})();

// ── GLOBAL AUTH CHECK FOR RESERVATIONS ────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Inject the luxury auth modal into the body
    const modalHTML = `
        <div id="luxury-auth-modal" style="display:none; position:fixed; z-index:9999; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.8); backdrop-filter:blur(10px); align-items:center; justify-content:center; opacity:0; transition:opacity 0.4s ease;">
            <div style="background: linear-gradient(145deg, #05070a, #0a0e17); border: 1px solid rgba(197,160,89,0.3); border-radius: 20px; padding: 45px 35px; max-width: 420px; width: 90%; text-align: center; box-shadow: 0 25px 60px rgba(0,0,0,0.9), 0 0 40px rgba(197,160,89,0.15); transform: scale(0.95); transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
                <div style="width:70px; height:70px; margin: 0 auto 25px; border-radius: 50%; background: rgba(197,160,89,0.05); display:flex; align-items:center; justify-content:center; border: 1px solid rgba(197,160,89,0.4); box-shadow: inset 0 0 20px rgba(197,160,89,0.1);">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary, #c5a059)" stroke-width="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></svg>
                </div>
                <h2 style="font-family: 'Playfair Display', serif; color: var(--primary, #c5a059); font-size: 1.8rem; margin-bottom: 12px; letter-spacing: 1px;" data-i18n="auth_req_title">Login Required</h2>
                <p style="font-family: 'Montserrat', sans-serif; color: #a1a1aa; font-size: 0.9rem; line-height: 1.6; margin-bottom: 35px;" data-i18n="auth_req_desc">You must create an account or log in before making a reservation.</p>
                <div style="display:flex; flex-direction:column; gap:12px;">
                    <button id="auth-modal-login-btn" style="background: linear-gradient(135deg, #c5a059, #a67c00); border: none; color: #fff; padding: 16px; font-weight: 700; letter-spacing: 3px; font-size: 0.8rem; text-transform: uppercase; border-radius: 8px; cursor: pointer; transition: 0.3s; box-shadow: 0 10px 20px rgba(197,160,89,0.3);" data-i18n="auth_req_login">Login</button>
                    <button id="auth-modal-signup-btn" style="background: transparent; border: 1px solid var(--primary, #c5a059); color: var(--primary, #c5a059); padding: 16px; font-weight: 700; letter-spacing: 3px; font-size: 0.8rem; text-transform: uppercase; border-radius: 8px; cursor: pointer; transition: 0.3s;" data-i18n="auth_req_signup">Sign Up</button>
                    <button id="auth-modal-cancel-btn" style="background: transparent; border: none; color: #71717a; padding: 12px; font-size: 0.75rem; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; transition: 0.3s; margin-top: 5px;" data-i18n="auth_req_cancel">Cancel</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const authModal = document.getElementById('luxury-auth-modal');
    const authModalContent = authModal.firstElementChild;
    const btnLogin = document.getElementById('auth-modal-login-btn');
    const btnSignup = document.getElementById('auth-modal-signup-btn');
    const btnCancel = document.getElementById('auth-modal-cancel-btn');

    function showAuthModal() {
        authModal.style.display = 'flex';
        setTimeout(() => {
            authModal.style.opacity = '1';
            authModalContent.style.transform = 'scale(1)';
        }, 10);
    }

    function closeAuthModal() {
        authModal.style.opacity = '0';
        authModalContent.style.transform = 'scale(0.95)';
        setTimeout(() => {
            authModal.style.display = 'none';
        }, 400);
    }

    btnLogin.addEventListener('mouseenter', () => { btnLogin.style.transform = 'translateY(-2px)'; btnLogin.style.boxShadow = '0 15px 30px rgba(197,160,89,0.4)'; });
    btnLogin.addEventListener('mouseleave', () => { btnLogin.style.transform = 'translateY(0)'; btnLogin.style.boxShadow = '0 10px 20px rgba(197,160,89,0.3)'; });

    btnSignup.addEventListener('mouseenter', () => { btnSignup.style.background = 'rgba(197,160,89,0.05)'; });
    btnSignup.addEventListener('mouseleave', () => { btnSignup.style.background = 'transparent'; });

    btnCancel.addEventListener('mouseenter', () => { btnCancel.style.color = '#fff'; });
    btnCancel.addEventListener('mouseleave', () => { btnCancel.style.color = '#71717a'; });

    btnLogin.addEventListener('click', () => window.location.href = 'login-client.html');
    btnSignup.addEventListener('click', () => window.location.href = 'creer-compte.html');
    btnCancel.addEventListener('click', closeAuthModal);
    
    // Intercept clicks
    document.addEventListener('click', function(e) {
        const target = e.target;
        const isBookingBtn = target.closest('.btn-room-reserver, .btn-ed-gold, #btn-pq-reserver, #btn-banner-reserver, #btn-show-booking, #btn-top-reserver2, .btn-riad, .card-cta');
        
        if(isBookingBtn) {
            const currentUser = JSON.parse(localStorage.getItem('ga_current_user') || 'null');
            if(!currentUser) {
                // User not logged in, stop the event and show our auth modal
                e.preventDefault();
                e.stopPropagation();
                showAuthModal();
            }
        }
    }, true); // useCapture = true is critical here to fire before regular bubbling events!
});

