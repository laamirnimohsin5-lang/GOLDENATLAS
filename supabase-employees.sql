-- ============================================================
-- GOLDEN ATLAS · Module Gestion des Employés
-- Script SQL à exécuter dans Supabase → SQL Editor
-- ============================================================

-- 1. Créer la table ga_employees
CREATE TABLE IF NOT EXISTS ga_employees (
    id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name        TEXT NOT NULL,
    username    TEXT NOT NULL UNIQUE,
    password    TEXT NOT NULL,
    photo       TEXT, -- URL de la photo ou chaîne base64
    dob         DATE, -- Date de naissance
    gender      TEXT CHECK (gender IN ('Homme', 'Femme')),
    cin         TEXT NOT NULL UNIQUE,
    phone       TEXT,
    address     TEXT,
    email       TEXT,
    hire_date   DATE,
    position    TEXT,
    salary      NUMERIC(12, 2), -- Salaire
    created_at  TIMESTAMPTZ DEFAULT NOW(),
    updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Index pour recherche rapide
CREATE INDEX IF NOT EXISTS idx_employees_username ON ga_employees (username);
CREATE INDEX IF NOT EXISTS idx_employees_name ON ga_employees (name);

-- Trigger pour mettre à jour automatiquement updated_at
CREATE OR REPLACE FUNCTION update_employees_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_employees_updated_at ON ga_employees;
CREATE TRIGGER set_employees_updated_at
    BEFORE UPDATE ON ga_employees
    FOR EACH ROW
    EXECUTE FUNCTION update_employees_timestamp();

-- Désactiver RLS pour simplifier le développement
ALTER TABLE ga_employees DISABLE ROW LEVEL SECURITY;

-- Droits d'accès généraux
GRANT ALL ON ga_employees TO anon, authenticated;

-- Insertion des employés par défaut
INSERT INTO ga_employees (name, username, password, photo, dob, gender, cin, phone, address, email, hire_date, position, salary)
VALUES
    ('Ahmed Alaoui', 'ahmed.alaoui', 'emp123', '', '1990-05-15', 'Homme', 'JB123456', '+212 611-223344', 'Rue Hassan II, Errachidia', 'ahmed.alaoui@goldenatlas.ma', '2022-01-10', 'Technicien Plombier', 6500.00),
    ('Fatima Benali', 'fatima.benali', 'emp456', '', '1993-08-22', 'Femme', 'K345678', '+212 622-334455', 'Av. Moulay Ismail, Errachidia', 'fatima.benali@goldenatlas.ma', '2023-03-15', 'Réceptionniste / Standardiste', 5500.00),
    ('Youssef Idrissi', 'youssef.idrissi', 'emp789', '', '1988-11-02', 'Homme', 'LE987654', '+212 633-445566', 'Quartier Oasis, Errachidia', 'youssef.idrissi@goldenatlas.ma', '2020-06-01', 'Technicien Électricien', 7000.00),
    ('Sara Mansouri', 'sara.mansouri', 'emp101', '', '1995-12-10', 'Femme', 'G456123', '+212 644-556677', 'Hay Riad, Errachidia', 'sara.mansouri@goldenatlas.ma', '2024-02-20', 'Agente d''entretien', 5000.00),
    ('Technicien Chef', 'admin', 'emp000', '', '1985-04-30', 'Homme', 'U112233', '+212 655-667788', 'Avenue de la Marche Verte, Errachidia', 'chef.technique@goldenatlas.ma', '2018-09-01', 'Chef d''Équipe Technique', 10000.00)
ON CONFLICT (username) DO UPDATE
SET name = EXCLUDED.name,
    password = EXCLUDED.password,
    photo = COALESCE(NULLIF(EXCLUDED.photo, ''), ga_employees.photo),
    dob = EXCLUDED.dob,
    gender = EXCLUDED.gender,
    cin = EXCLUDED.cin,
    phone = EXCLUDED.phone,
    address = EXCLUDED.address,
    email = EXCLUDED.email,
    hire_date = EXCLUDED.hire_date,
    position = EXCLUDED.position,
    salary = EXCLUDED.salary;
