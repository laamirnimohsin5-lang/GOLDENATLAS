-- ╔══════════════════════════════════════════════════════════════╗
-- ║  GOLDEN ATLAS · SETUP COMPLET BASE DE DONNÉES               ║
-- ║  Exécuter ENTIÈREMENT dans Supabase → SQL Editor             ║
-- ║  Ce script est idempotent (peut être relancé sans danger)    ║
-- ╚══════════════════════════════════════════════════════════════╝


-- ════════════════════════════════════
-- 1. TABLE: profiles
--    Liée à auth.users (Supabase Auth)
-- ════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.profiles (
    id          UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    full_name   TEXT NOT NULL DEFAULT '',
    email       TEXT UNIQUE NOT NULL,
    phone       TEXT,
    avatar_url  TEXT,
    created_at  TIMESTAMPTZ DEFAULT NOW(),
    updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ════════════════════════════════════
-- 2. TABLE: ga_users (clients manuels)
--    Déjà existante → on s'assure juste
--    qu'elle a les bonnes colonnes
-- ════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.ga_users (
    id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name       TEXT NOT NULL,
    email      TEXT UNIQUE NOT NULL,
    cin        TEXT,
    phone      TEXT,
    status     TEXT DEFAULT 'En attente',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ════════════════════════════════════
-- 3. TABLE: ga_reservations
-- ════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.ga_reservations (
    id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name       TEXT NOT NULL,
    email      TEXT,
    user_email TEXT,
    room       TEXT NOT NULL,
    arrival    DATE,
    departure  DATE,
    guests     TEXT,
    status     TEXT DEFAULT 'En attente',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ════════════════════════════════════
-- 4. TABLE: ga_reclamations
-- ════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.ga_reclamations (
    id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    room_number  TEXT,
    client_name  TEXT NOT NULL,
    client_email TEXT NOT NULL,
    problem_type TEXT NOT NULL,
    description  TEXT NOT NULL,
    status       TEXT DEFAULT 'Ouvert',
    created_at   TIMESTAMPTZ DEFAULT NOW(),
    updated_at   TIMESTAMPTZ DEFAULT NOW()
);

-- ════════════════════════════════════
-- 5. TABLE: ga_feedback
-- ════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.ga_feedback (
    id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    sender     TEXT NOT NULL,
    user_email TEXT,
    message    TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ════════════════════════════════════
-- 6. TABLE: ga_rooms
-- ════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.ga_rooms (
    id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name        TEXT NOT NULL UNIQUE,
    price       NUMERIC(10,2) NOT NULL DEFAULT 0,
    description TEXT,
    category    TEXT,
    image_url   TEXT,
    available   BOOLEAN DEFAULT true,
    created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ════════════════════════════════════
-- 7. TABLE: ga_services
-- ════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.ga_services (
    id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name        TEXT NOT NULL,
    price       NUMERIC(10,2) NOT NULL DEFAULT 0,
    category    TEXT,
    description TEXT,
    available   BOOLEAN DEFAULT true,
    created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ════════════════════════════════════
-- 8. TABLE: ga_employees
-- ════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.ga_employees (
    id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name       TEXT NOT NULL,
    role       TEXT,
    gender     TEXT,
    cin        TEXT,
    phone      TEXT,
    email      TEXT,
    salary     NUMERIC(10,2),
    hire_date  DATE,
    address    TEXT,
    photo_url  TEXT,
    username   TEXT UNIQUE,
    password   TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ════════════════════════════════════
-- 9. TABLE: ga_promotions
-- ════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.ga_promotions (
    id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title        TEXT NOT NULL,
    description  TEXT NOT NULL,
    discount_pct INTEGER DEFAULT 0,
    active       BOOLEAN DEFAULT true,
    created_at   TIMESTAMPTZ DEFAULT NOW(),
    updated_at   TIMESTAMPTZ DEFAULT NOW()
);


-- ════════════════════════════════════════════════
-- 10. TRIGGERS: updated_at automatique
-- ════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- profiles
DROP TRIGGER IF EXISTS trg_profiles_updated_at ON public.profiles;
CREATE TRIGGER trg_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ga_reclamations
DROP TRIGGER IF EXISTS trg_reclamations_updated_at ON public.ga_reclamations;
CREATE TRIGGER trg_reclamations_updated_at
    BEFORE UPDATE ON public.ga_reclamations
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ga_promotions
DROP TRIGGER IF EXISTS trg_promotions_updated_at ON public.ga_promotions;
CREATE TRIGGER trg_promotions_updated_at
    BEFORE UPDATE ON public.ga_promotions
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


-- ════════════════════════════════════════════════
-- 11. TRIGGER: Création automatique du profil
--     quand un utilisateur s'inscrit via Auth
-- ════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, full_name, email, phone, avatar_url)
    VALUES (
        NEW.id,
        COALESCE(
            NEW.raw_user_meta_data->>'full_name',
            NEW.raw_user_meta_data->>'name',
            split_part(NEW.email, '@', 1)
        ),
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'phone', NEW.phone),
        NEW.raw_user_meta_data->>'avatar_url'
    )
    ON CONFLICT (id) DO UPDATE SET
        full_name  = EXCLUDED.full_name,
        email      = EXCLUDED.email,
        avatar_url = COALESCE(EXCLUDED.avatar_url, profiles.avatar_url),
        updated_at = NOW();

    -- Aussi créer/màj dans ga_users pour compatibilité admin
    INSERT INTO public.ga_users (name, email, phone, status)
    VALUES (
        COALESCE(
            NEW.raw_user_meta_data->>'full_name',
            NEW.raw_user_meta_data->>'name',
            split_part(NEW.email, '@', 1)
        ),
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'phone', NEW.phone),
        'Validé'
    )
    ON CONFLICT (email) DO UPDATE SET
        status = 'Validé';

    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();


-- ════════════════════════════════════════════════
-- 12. RLS — Row Level Security
-- ════════════════════════════════════════════════

-- Activer RLS sur les tables sensibles
ALTER TABLE public.profiles       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ga_reservations DISABLE ROW LEVEL SECURITY;  -- admin lit tout
ALTER TABLE public.ga_reclamations DISABLE ROW LEVEL SECURITY;  -- admin lit tout
ALTER TABLE public.ga_users        DISABLE ROW LEVEL SECURITY;  -- admin lit tout
ALTER TABLE public.ga_feedback     DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.ga_rooms        DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.ga_services     DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.ga_employees    DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.ga_promotions   DISABLE ROW LEVEL SECURITY;

-- Policies sur profiles
DROP POLICY IF EXISTS "profiles_select_own" ON public.profiles;
CREATE POLICY "profiles_select_own" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

DROP POLICY IF EXISTS "profiles_update_own" ON public.profiles;
CREATE POLICY "profiles_update_own" ON public.profiles
    FOR UPDATE USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "profiles_insert_own" ON public.profiles;
CREATE POLICY "profiles_insert_own" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id);


-- ════════════════════════════════════════════════
-- 13. GRANTS — accès public aux tables
-- ════════════════════════════════════════════════
GRANT ALL ON public.profiles        TO anon, authenticated;
GRANT ALL ON public.ga_users        TO anon, authenticated;
GRANT ALL ON public.ga_reservations TO anon, authenticated;
GRANT ALL ON public.ga_reclamations TO anon, authenticated;
GRANT ALL ON public.ga_feedback     TO anon, authenticated;
GRANT ALL ON public.ga_rooms        TO anon, authenticated;
GRANT ALL ON public.ga_services     TO anon, authenticated;
GRANT ALL ON public.ga_employees    TO anon, authenticated;
GRANT ALL ON public.ga_promotions   TO anon, authenticated;


-- ════════════════════════════════════════════════
-- 14. INDEX utiles
-- ════════════════════════════════════════════════
CREATE INDEX IF NOT EXISTS idx_ga_res_user_email ON public.ga_reservations(user_email);
CREATE INDEX IF NOT EXISTS idx_ga_res_email      ON public.ga_reservations(email);
CREATE INDEX IF NOT EXISTS idx_ga_rec_email      ON public.ga_reclamations(client_email);
CREATE INDEX IF NOT EXISTS idx_ga_users_email    ON public.ga_users(email);
CREATE INDEX IF NOT EXISTS idx_profiles_email    ON public.profiles(email);


-- ════════════════════════════════════════════════
-- FIN ✓ Tout est prêt !
-- ════════════════════════════════════════════════
