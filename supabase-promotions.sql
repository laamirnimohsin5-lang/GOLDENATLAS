-- ============================================================
-- GOLDEN ATLAS · Module Offres Spéciales & Promotions
-- Script SQL à exécuter dans Supabase → SQL Editor
-- ============================================================

-- 1. Créer la table ga_promotions
CREATE TABLE IF NOT EXISTS ga_promotions (
    id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title         TEXT NOT NULL,
    description   TEXT NOT NULL,
    discount_pct  INTEGER DEFAULT 0,
    active        BOOLEAN DEFAULT true,
    created_at    TIMESTAMPTZ DEFAULT NOW(),
    updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Index pour recherche par statut actif
CREATE INDEX IF NOT EXISTS idx_promotions_active
    ON ga_promotions (active);

-- 3. Trigger pour mettre à jour updated_at automatiquement
CREATE OR REPLACE FUNCTION update_promotions_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_promotions_updated_at ON ga_promotions;
CREATE TRIGGER set_promotions_updated_at
    BEFORE UPDATE ON ga_promotions
    FOR EACH ROW
    EXECUTE FUNCTION update_promotions_timestamp();

-- 4. Désactiver RLS pour simplifier le développement
ALTER TABLE ga_promotions DISABLE ROW LEVEL SECURITY;

-- 5. Droits d'accès généraux
GRANT ALL ON ga_promotions TO anon, authenticated;
