-- ============================================================
-- GOLDEN ATLAS · Module Réclamations
-- Script SQL à exécuter dans Supabase → SQL Editor
-- ============================================================

-- 1. Créer la table ga_reclamations
CREATE TABLE IF NOT EXISTS ga_reclamations (
    id                UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    room_number       TEXT NOT NULL,
    client_name       TEXT NOT NULL,
    client_email      TEXT,
    problem_type      TEXT NOT NULL,
    description       TEXT,
    status            TEXT DEFAULT 'En attente' CHECK (status IN ('En attente', 'En cours', 'Résolu')),
    assigned_employee TEXT,
    reservation_id    UUID,
    created_at        TIMESTAMPTZ DEFAULT NOW(),
    updated_at        TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Index pour recherche rapide par email client
CREATE INDEX IF NOT EXISTS idx_reclamations_client_email
    ON ga_reclamations (client_email);

-- 3. Index pour recherche par statut
CREATE INDEX IF NOT EXISTS idx_reclamations_status
    ON ga_reclamations (status);

-- 4. Index pour recherche par employé assigné
CREATE INDEX IF NOT EXISTS idx_reclamations_employee
    ON ga_reclamations (assigned_employee);

-- 5. Trigger pour mettre à jour updated_at automatiquement
CREATE OR REPLACE FUNCTION update_reclamations_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_reclamations_updated_at ON ga_reclamations;
CREATE TRIGGER set_reclamations_updated_at
    BEFORE UPDATE ON ga_reclamations
    FOR EACH ROW
    EXECUTE FUNCTION update_reclamations_timestamp();

-- 6. Row Level Security (Option A : Désactiver RLS pour simplifier le développement)
ALTER TABLE ga_reclamations DISABLE ROW LEVEL SECURITY;

-- Option B : Si vous souhaitez garder RLS activé, exécutez plutôt ceci :
-- ALTER TABLE ga_reclamations ENABLE ROW LEVEL SECURITY;
-- 
-- CREATE POLICY "Permettre l'insertion publique" ON ga_reclamations FOR INSERT TO anon, authenticated WITH CHECK (true);
-- CREATE POLICY "Permettre la lecture publique" ON ga_reclamations FOR SELECT TO anon, authenticated USING (true);
-- CREATE POLICY "Permettre la modification publique" ON ga_reclamations FOR UPDATE TO anon, authenticated USING (true);
-- CREATE POLICY "Permettre la suppression publique" ON ga_reclamations FOR DELETE TO anon, authenticated USING (true);

-- 7. Droits d'accès généraux
GRANT ALL ON ga_reclamations TO anon, authenticated;

-- 8. Vérification : afficher la structure de la table
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'ga_reclamations'
ORDER BY ordinal_position;
