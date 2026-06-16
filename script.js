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
        rest_dinner_desc: "L'élégance mystique d'un dîner sous les étoiles."
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
        rest_dinner_desc: "Lit by candlelight, dinner at Golden Atlas is a mystical experience. Our menu merges ancient Moroccan heritage with the most modern culinary techniques."
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
        rest_dinner_desc: "Iluminada por la luz de las velas, la cena es una experiencia mística. Nuestro menú fusiona la herencia ancestral marroquí con técnicas culinarias modernas."
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
        rest_dinner_desc: "أناقة العشاء الأسطوري تحت النجوم."
    }
};

/**
 * UTILITIES
 */
function showToast(msg) {
    const toast = document.getElementById('toast-msg');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 4000);
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
            <div style="display:flex; align-items:center; gap:10px;">
                <div style="width:32px; height:32px; background:var(--gold); color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.8rem;">
                    ${currentUser.name.charAt(0).toUpperCase()}
                </div>
                <div style="text-align:left; line-height:1.1;">
                     <span style="display:block; font-size:0.6rem; opacity:0.6; letter-spacing:1px;">BIENVENUE</span>
                     <span style="display:block; font-size:0.75rem; font-weight:600; letter-spacing:1px;">${currentUser.name.split(' ')[0].toUpperCase()}</span>
                </div>
            </div>
        `;
        loginBtn.removeAttribute('data-i18n');
        loginBtn.style.background = 'none';
        loginBtn.style.border = 'none';
        loginBtn.style.padding = '0';
        loginBtn.style.boxShadow = 'none';
    }

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
    document.querySelectorAll('.btn-room-reserver').forEach(btn => {
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
            showToast("Réservation confirmée !");
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
    // ... Minimal plexus logic ...
}
