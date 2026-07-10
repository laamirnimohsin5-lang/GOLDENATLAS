-- ============================================================
-- GOLDEN ATLAS · Fix Table ga_users + Permissions
-- Exécuter dans Supabase → SQL Editor
-- ============================================================

-- 1. Créer la table ga_users si elle n'existe pas encore
CREATE TABLE IF NOT EXISTS ga_users (
    id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name       TEXT NOT NULL,
    email      TEXT UNIQUE NOT NULL,
    cin        TEXT,
    phone      TEXT,
    status     TEXT NOT NULL DEFAULT 'Validée',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. S'assurer que les colonnes optionnelles existent (migration safe)
ALTER TABLE ga_users ADD COLUMN IF NOT EXISTS phone TEXT;
ALTER TABLE ga_users ADD COLUMN IF NOT EXISTS cin TEXT;

-- 3. DÉSACTIVER RLS complètement (mode développement)
ALTER TABLE ga_users DISABLE ROW LEVEL SECURITY;

-- 4. Supprimer toutes les anciennes policies (si RLS était activé avant)
DROP POLICY IF EXISTS "Allow anon select" ON ga_users;
DROP POLICY IF EXISTS "Allow anon insert" ON ga_users;
DROP POLICY IF EXISTS "Allow anon update" ON ga_users;
DROP POLICY IF EXISTS "Enable read access for all users" ON ga_users;
DROP POLICY IF EXISTS "Enable insert for all users" ON ga_users;

-- 5. Accorder tous les droits aux rôles anon et authenticated
GRANT ALL ON ga_users TO anon, authenticated;

-- 6. Vérification finale : afficher les utilisateurs existants
SELECT id, name, email, cin, phone, status, created_at
FROM ga_users
ORDER BY created_at DESC
LIMIT 20;
