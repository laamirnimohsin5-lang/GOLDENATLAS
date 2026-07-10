-- ============================================================
-- GOLDEN ATLAS · Authentication & Dashboard Schema
-- Run this in your Supabase SQL Editor
-- ============================================================

-- 1. Create PROFILES table
CREATE TABLE IF NOT EXISTS public.profiles (
    id          UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
    full_name   TEXT NOT NULL,
    email       TEXT UNIQUE NOT NULL,
    phone       TEXT,
    avatar_url  TEXT,
    created_at  TIMESTAMPTZ DEFAULT NOW(),
    updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create BOOKINGS table
CREATE TABLE IF NOT EXISTS public.bookings (
    id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id       UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    room          TEXT NOT NULL,
    check_in      DATE NOT NULL,
    check_out     DATE NOT NULL,
    guests        INTEGER NOT NULL DEFAULT 1,
    total_price   NUMERIC(12, 2) NOT NULL,
    status        TEXT NOT NULL DEFAULT 'Pending' CHECK (status IN ('Pending', 'Confirmed', 'Cancelled')),
    booking_date  TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Create COMPLAINTS table
CREATE TABLE IF NOT EXISTS public.complaints (
    id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id       UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    subject       TEXT NOT NULL,
    message       TEXT NOT NULL,
    status        TEXT NOT NULL DEFAULT 'Pending' CHECK (status IN ('Pending', 'Replied', 'Closed')),
    created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- Indexing for speedy lookups
CREATE INDEX IF NOT EXISTS idx_bookings_user_id ON public.bookings(user_id);
CREATE INDEX IF NOT EXISTS idx_complaints_user_id ON public.complaints(user_id);

-- 4. Enable Row Level Security (RLS) on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.complaints ENABLE ROW LEVEL SECURITY;

-- 5. Helper function & trigger to update 'updated_at' columns automatically
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_profiles_updated_at ON public.profiles;
CREATE TRIGGER set_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 6. Trigger for Automatic User Profile Creation
-- Whenever a user signs up (via Email or Google), a corresponding profile is created
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email, avatar_url, phone)
  VALUES (
    new.id,
    COALESCE(
      new.raw_user_meta_data->>'full_name',
      new.raw_user_meta_data->>'name',
      split_part(new.email, '@', 1)
    ),
    new.email,
    new.raw_user_meta_data->>'avatar_url',
    new.phone
  )
  ON CONFLICT (id) DO UPDATE
  SET
    full_name = EXCLUDED.full_name,
    email = EXCLUDED.email,
    avatar_url = COALESCE(EXCLUDED.avatar_url, profiles.avatar_url);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 7. SQL RLS Policies

-- PROFILES POLICIES
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
CREATE POLICY "Users can view their own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

-- BOOKINGS POLICIES
-- Allow selects only if the booking belongs to the user, OR if user is admin
DROP POLICY IF EXISTS "Users can view their own bookings" ON public.bookings;
CREATE POLICY "Users can view their own bookings" ON public.bookings
    FOR SELECT USING (
        auth.uid() = user_id 
        OR (auth.jwt() ->> 'email') = 'admin@goldenatlas.com'
        OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
    );

-- Allow insertions only for the logged-in user
DROP POLICY IF EXISTS "Users can insert their own bookings" ON public.bookings;
CREATE POLICY "Users can insert their own bookings" ON public.bookings
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Allow updates of own bookings (e.g. cancellation) or if user is admin
DROP POLICY IF EXISTS "Users can update their own bookings" ON public.bookings;
CREATE POLICY "Users can update their own bookings" ON public.bookings
    FOR UPDATE USING (
        auth.uid() = user_id
        OR (auth.jwt() ->> 'email') = 'admin@goldenatlas.com'
        OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
    );

-- COMPLAINTS POLICIES
-- Allow user or admin to view complaints
DROP POLICY IF EXISTS "Users can view their own complaints" ON public.complaints;
CREATE POLICY "Users can view their own complaints" ON public.complaints
    FOR SELECT USING (
        auth.uid() = user_id
        OR (auth.jwt() ->> 'email') = 'admin@goldenatlas.com'
        OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
    );

-- Allow insertion of own complaints
DROP POLICY IF EXISTS "Users can insert their own complaints" ON public.complaints;
CREATE POLICY "Users can insert their own complaints" ON public.complaints
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Allow update of complaints (for replied/closed status) by user or admin
DROP POLICY IF EXISTS "Users can update complaints" ON public.complaints;
CREATE POLICY "Users can update complaints" ON public.complaints
    FOR UPDATE USING (
        auth.uid() = user_id
        OR (auth.jwt() ->> 'email') = 'admin@goldenatlas.com'
        OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
    );

-- 8. Grant Privileges
GRANT ALL ON public.profiles TO anon, authenticated;
GRANT ALL ON public.bookings TO anon, authenticated;
GRANT ALL ON public.complaints TO anon, authenticated;
