-- ============================================================
-- GOLDEN ATLAS · PATCH COMPLET v3
-- ⚠️  Les tables EXISTENT DÉJÀ — Ce script ajoute uniquement
--     les colonnes manquantes sans toucher aux données.
-- ► Exécutez CE FICHIER EN ENTIER dans Supabase SQL Editor
-- ============================================================

-- ┌─────────────────────────────────────────────────────────┐
-- │  PARTIE 1 · ga_reclamations                             │
-- └─────────────────────────────────────────────────────────┘

-- Ajouter TOUTES les colonnes manquantes (IF NOT EXISTS = sans erreur)
ALTER TABLE ga_reclamations
    ADD COLUMN IF NOT EXISTS room_number       TEXT,
    ADD COLUMN IF NOT EXISTS client_name       TEXT,
    ADD COLUMN IF NOT EXISTS client_email      TEXT,
    ADD COLUMN IF NOT EXISTS problem_type      TEXT,
    ADD COLUMN IF NOT EXISTS description       TEXT,
    ADD COLUMN IF NOT EXISTS status            TEXT DEFAULT 'En attente',
    ADD COLUMN IF NOT EXISTS assigned_employee TEXT,
    ADD COLUMN IF NOT EXISTS reservation_id    UUID,
    ADD COLUMN IF NOT EXISTS created_at        TIMESTAMPTZ DEFAULT NOW(),
    ADD COLUMN IF NOT EXISTS updated_at        TIMESTAMPTZ DEFAULT NOW();

-- Index
CREATE INDEX IF NOT EXISTS idx_reclamations_client_email
    ON ga_reclamations (client_email);
CREATE INDEX IF NOT EXISTS idx_reclamations_status
    ON ga_reclamations (status);
CREATE INDEX IF NOT EXISTS idx_reclamations_employee
    ON ga_reclamations (assigned_employee);

-- Trigger updated_at
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
    FOR EACH ROW EXECUTE FUNCTION update_reclamations_timestamp();

-- Sécurité
ALTER TABLE ga_reclamations DISABLE ROW LEVEL SECURITY;
GRANT ALL ON ga_reclamations TO anon, authenticated;

-- ┌─────────────────────────────────────────────────────────┐
-- │  PARTIE 2 · ga_employees                                │
-- └─────────────────────────────────────────────────────────┘

-- Ajouter TOUTES les colonnes potentiellement manquantes
ALTER TABLE ga_employees
    ADD COLUMN IF NOT EXISTS name       TEXT,
    ADD COLUMN IF NOT EXISTS position   TEXT,
    ADD COLUMN IF NOT EXISTS username   TEXT,
    ADD COLUMN IF NOT EXISTS password   TEXT,
    ADD COLUMN IF NOT EXISTS email      TEXT,
    ADD COLUMN IF NOT EXISTS phone      TEXT,
    ADD COLUMN IF NOT EXISTS cin        TEXT,
    ADD COLUMN IF NOT EXISTS gender     TEXT,
    ADD COLUMN IF NOT EXISTS dob        DATE,
    ADD COLUMN IF NOT EXISTS hire_date  DATE,
    ADD COLUMN IF NOT EXISTS salary     NUMERIC(10,2),
    ADD COLUMN IF NOT EXISTS photo      TEXT,
    ADD COLUMN IF NOT EXISTS address    TEXT,
    ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW();

-- Sécurité
ALTER TABLE ga_employees DISABLE ROW LEVEL SECURITY;
GRANT ALL ON ga_employees TO anon, authenticated;

-- ┌─────────────────────────────────────────────────────────┐
-- │  PARTIE 3 · Insérer les employés (si table vide)        │
-- └─────────────────────────────────────────────────────────┘
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM ga_employees LIMIT 1) THEN
        INSERT INTO ga_employees
            (name, position, username, password, email, phone, cin, gender, hire_date, salary, address)
        VALUES
            ('Ahmed Alaoui',    'Technicien Plombier',      'ahmed.alaoui',    'emp123',
             'ahmed.alaoui@goldenatlas.ma',    '+212 611-223344', 'JB123456', 'Homme', '2022-01-10', 6500.00, 'Rue Hassan II, Errachidia'),

            ('Fatima Benali',   'Réceptionniste',           'fatima.benali',   'emp456',
             'fatima.benali@goldenatlas.ma',   '+212 622-334455', 'K345678',  'Femme', '2023-03-15', 5500.00, 'Av. Moulay Ismail, Errachidia'),

            ('Youssef Idrissi', 'Technicien Électricien',   'youssef.idrissi', 'emp789',
             'youssef.idrissi@goldenatlas.ma', '+212 633-445566', 'LE987654', 'Homme', '2020-06-01', 7000.00, 'Quartier Oasis, Errachidia'),

            ('Sara Mansouri',   'Technicienne Entretien',   'sara.mansouri',   'emp101',
             'sara.mansouri@goldenatlas.ma',   '+212 644-556677', 'G456123',  'Femme', '2024-02-20', 5000.00, 'Hay Riad, Errachidia'),

            ('Technicien Chef', 'Chef Équipe Technique',    'admin',           'emp000',
             'chef.technique@goldenatlas.ma',  '+212 655-667788', 'U112233',  'Homme', '2018-09-01', 10000.00, 'Avenue de la Marche Verte, Errachidia');

        RAISE NOTICE '✅ 5 employés insérés.';
    ELSE
        RAISE NOTICE 'ℹ️  ga_employees non vide — aucun INSERT effectué.';
    END IF;
END $$;

-- ┌─────────────────────────────────────────────────────────┐
-- │  VÉRIFICATION FINALE                                    │
-- └─────────────────────────────────────────────────────────┘
SELECT
    table_name,
    column_name,
    data_type,
    column_default
FROM information_schema.columns
WHERE table_name IN ('ga_reclamations', 'ga_employees')
  AND table_schema = 'public'
ORDER BY table_name, ordinal_position;
