-- ============================================================
-- GOLDEN ATLAS · Auto-Confirmation Email Patch
-- A exécuter dans l'onglet SQL Editor de Supabase
-- ============================================================

-- 1. Confirmer rétroactivement tous les comptes existants qui attendent la confirmation
UPDATE auth.users 
SET email_confirmed_at = NOW() 
WHERE email_confirmed_at IS NULL;

-- 2. Créer une fonction de trigger pour confirmer automatiquement les futurs comptes
CREATE OR REPLACE FUNCTION public.auto_confirm_user_email()
RETURNS TRIGGER AS $$
BEGIN
    NEW.email_confirmed_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. Attacher le trigger à la table auth.users de Supabase
DROP TRIGGER IF EXISTS tr_auto_confirm_user_email ON auth.users;
CREATE TRIGGER tr_auto_confirm_user_email
    BEFORE INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.auto_confirm_user_email();

-- Message de confirmation dans les logs SQL
SELECT 'Succès ! Les e-mails des comptes existants ont été confirmés, et les prochains seront confirmés automatiquement.' AS resultat;
