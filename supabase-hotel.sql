-- ============================================================
-- GOLDEN ATLAS · Module Gestion de l'Hôtel (Hébergements & Services)
-- Script SQL à exécuter dans Supabase → SQL Editor
-- ============================================================

-- 1. Créer la table ga_rooms (Éléments réservables)
CREATE TABLE IF NOT EXISTS ga_rooms (
    id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    type        TEXT NOT NULL,
    name        TEXT NOT NULL,
    price       INTEGER NOT NULL DEFAULT 0,
    capacity    INTEGER NOT NULL DEFAULT 1,
    description TEXT,
    img         TEXT,
    status      TEXT NOT NULL DEFAULT 'Disponible' CHECK (status IN ('Disponible', 'Occupée', 'En Maintenance')),
    created_at  TIMESTAMPTZ DEFAULT NOW(),
    updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- S'assurer que la colonne updated_at existe si la table existait déjà
ALTER TABLE ga_rooms ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

-- Supprimer les doublons éventuels par nom
DELETE FROM ga_rooms a USING ga_rooms b WHERE a.id < b.id AND a.name = b.name;

-- S'assurer que le nom est unique
ALTER TABLE ga_rooms DROP CONSTRAINT IF EXISTS ga_rooms_name_key;
ALTER TABLE ga_rooms ADD CONSTRAINT ga_rooms_name_key UNIQUE (name);

-- Index pour recherche rapide par nom
CREATE INDEX IF NOT EXISTS idx_rooms_name ON ga_rooms (name);
-- Index pour recherche rapide par statut
CREATE INDEX IF NOT EXISTS idx_rooms_status ON ga_rooms (status);

-- 2. Créer la table ga_services (Services de l'hôtel)
CREATE TABLE IF NOT EXISTS ga_services (
    id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name        TEXT NOT NULL,
    description TEXT,
    status      TEXT NOT NULL DEFAULT 'Actif' CHECK (status IN ('Actif', 'Inactif')),
    created_at  TIMESTAMPTZ DEFAULT NOW(),
    updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- S'assurer que la colonne updated_at existe si la table existait déjà
ALTER TABLE ga_services ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

-- Supprimer les doublons éventuels par nom
DELETE FROM ga_services a USING ga_services b WHERE a.id < b.id AND a.name = b.name;

-- S'assurer que le nom est unique
ALTER TABLE ga_services DROP CONSTRAINT IF EXISTS ga_services_name_key;
ALTER TABLE ga_services ADD CONSTRAINT ga_services_name_key UNIQUE (name);

-- Index pour recherche par statut
CREATE INDEX IF NOT EXISTS idx_services_status ON ga_services (status);

-- 3. Trigger pour mettre à jour automatiquement updated_at
CREATE OR REPLACE FUNCTION update_hotel_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_rooms_updated_at ON ga_rooms;
CREATE TRIGGER set_rooms_updated_at
    BEFORE UPDATE ON ga_rooms
    FOR EACH ROW
    EXECUTE FUNCTION update_hotel_timestamp();

DROP TRIGGER IF EXISTS set_services_updated_at ON ga_services;
CREATE TRIGGER set_services_updated_at
    BEFORE UPDATE ON ga_services
    FOR EACH ROW
    EXECUTE FUNCTION update_hotel_timestamp();

-- 4. Désactiver RLS (Row Level Security) pour simplifier le développement
ALTER TABLE ga_rooms DISABLE ROW LEVEL SECURITY;
ALTER TABLE ga_services DISABLE ROW LEVEL SECURITY;

-- 5. Droits d'accès généraux
GRANT ALL ON ga_rooms TO anon, authenticated;
GRANT ALL ON ga_services TO anon, authenticated;

-- 6. Insertion des éléments réservables par défaut
INSERT INTO ga_rooms (type, name, price, capacity, description, img, status)
VALUES
    ('Chambre Standard', 'Chambre Supérieure Atlas', 3200, 2, 'Vue panoramique sur l''Atlas.', 'assets/chambre_1.png', 'Disponible'),
    ('Chambre Deluxe', 'Chambre Deluxe Jardin', 3950, 2, 'Nichée au cœur de nos jardins chantants.', 'assets/chambre_2.png', 'Disponible'),
    ('Suite', 'Suite Junior Palmier', 4800, 3, 'Luxe soft et tradition marocaine.', 'assets/suites/suite1.jpg', 'Disponible'),
    ('Suite VIP Royale', 'Suite Prestige Royale', 12000, 4, 'Pour un séjour impérial inoubliable.', 'assets/suites/suite2.jpg', 'Disponible'),
    ('Suite', 'Suite Céleste', 12000, 4, 'Horizon au-delà de l''imagination.', 'assets/suite_1.jpg', 'Disponible'),
    ('Suite', 'Suite des Palmiers', 15500, 4, 'Entre palmes et parures d''or.', 'assets/suite_2.jpg', 'Disponible'),
    ('Suite', 'Suite Zellige', 18000, 4, 'Véritable chef-d''œuvre d''artisanat fassi.', 'assets/suite_3.jpg', 'Disponible'),
    ('Suite', 'Suite Midnight', 22000, 4, 'Magie du désert et douceur de la nuit.', 'assets/suite_4.jpg', 'Disponible'),
    ('Riad Privé', 'Riad Al Andalous', 18000, 6, 'Havre andalou sous le soleil d''Errachidia.', 'assets/riads/riad1.jpg', 'Disponible'),
    ('Riad Privé', 'Riad Majorelle', 22000, 6, 'Couleurs vibrantes et intimité totale.', 'assets/riads/riad2.jpg', 'Disponible'),
    ('Riad Privé', 'Riad des Jasmins', 16500, 6, 'Parfums enivrants et sérénité absolue.', 'assets/riads/riad3.jpg', 'Disponible'),
    ('Riad Privé', 'Riad Impérial', 25000, 8, 'Le fleuron de nos résidences privées.', 'assets/riads/riad4.jpg', 'Disponible'),
    ('Table (Restaurant/Café)', 'Le Marocain', 950, 4, 'Gastronomie traditionnelle marocaine revisitée.', 'assets/restaurant1.jpg', 'Disponible'),
    ('Table (Restaurant/Café)', 'L''Asiatique', 1200, 4, 'Saveurs d''Asie par le Chef Jean-Georges.', 'assets/restaurant2.jpg', 'Disponible'),
    ('Table (Restaurant/Café)', 'L''Italien', 1100, 4, 'Élégance de la dolce vita marocaine par Simone Zanoni.', 'assets/restaurant3.jpg', 'Disponible'),
    ('Table (Restaurant/Café)', 'Le Churchill', 300, 4, 'Atmosphère intimiste et feutrée historique.', 'assets/bar1.jpg', 'Disponible'),
    ('Table (Restaurant/Café)', 'Bar Majorelle', 400, 4, 'Cocktails signature au rythme du piano.', 'assets/bar2.jpg', 'Disponible'),
    ('Soin / Hammam (Spa)', 'Le Pavillon', 850, 4, 'Brunch ensoleillé sous les oliviers.', 'assets/pavillion.jpg', 'Disponible'),
    ('Soin / Hammam (Spa)', 'Les Hammams', 800, 2, 'Rituel de purification et gommage.', 'assets/spa-hammam.jpg', 'Disponible'),
    ('Soin / Hammam (Spa)', 'Les Massages', 1200, 2, 'Relâchement musculaire profond et huiles rares.', 'assets/spa-massage.jpg', 'Disponible'),
    ('Soin / Hammam (Spa)', 'Les Soins Visage', 1500, 2, 'Éclats et soins jeunesse d''exception.', 'assets/spa-facial.jpg', 'Disponible'),
    ('Piscine / Salle de Sport', 'La Piscine & Sports', 600, 2, 'Détente aquatique et tennis.', 'assets/pool.jpg', 'Disponible'),
    ('Suite VIP Royale', 'VIP Presidential Suite', 15000, 4, 'Le luxe absolu pour nos hôtes de marque.', 'assets/vip_president.jpg', 'Disponible'),
    ('Suite VIP Royale', 'VIP Royal Palace', 12000, 4, 'Une immersion dans la royauté marocaine.', 'assets/vip_royal.jpg', 'Disponible')
ON CONFLICT (name) DO UPDATE 
SET price = EXCLUDED.price, 
    capacity = EXCLUDED.capacity, 
    description = EXCLUDED.description, 
    img = EXCLUDED.img, 
    type = EXCLUDED.type;

-- 7. Insertion des services de l'hôtel par défaut
INSERT INTO ga_services (name, description, status)
VALUES
    ('Spa & Hammam Royal', 'Soins traditionnels, massages relaxants et piscine couverte.', 'Actif'),
    ('Transfert Aéroport Limousine', 'Véhicules de luxe avec chauffeur privé 24/7.', 'Actif'),
    ('Conciergerie VIP & Majordome', 'Organisation d''excursions et réservations exclusives.', 'Actif'),
    ('Chef Privé à Domicile', 'Un chef étoilé cuisine pour vous directement dans votre Riad.', 'Actif'),
    ('Babysitting & Garde d''Enfants', 'Garde d''enfants professionnelle pour votre sérénité.', 'Actif'),
    ('Lingerie & Blanchisserie Fine', 'Soin de vos vêtements les plus précieux.', 'Actif')
ON CONFLICT (name) DO UPDATE 
SET description = EXCLUDED.description;
