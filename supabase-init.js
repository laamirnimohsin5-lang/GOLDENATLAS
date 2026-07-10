const SUPABASE_URL = 'https://dwvmunsmqkjmybjkhsvx.supabase.co';
const SUPABASE_KEY = 'sb_publishable__jkxfz4r7q4qwWcl-wVbIw__kLHnxB7';
const SUPABASE_STORAGE_KEY = 'sb-dwvmunsmqkjmybjkhsvx-auth-token';

// ── Clear legacy/conflicting session tokens on first load ──
// This prevents stale tokens from a different key session causing 401 blocks.
(function clearStaleTokens() {
    try {
        const stored = localStorage.getItem(SUPABASE_STORAGE_KEY);
        if (!stored) return;

        const parsed = JSON.parse(stored);
        const now = Math.floor(Date.now() / 1000);

        // Check token expiry
        let expiry = parsed?.expires_at;
        if (!expiry && parsed?.access_token) {
            try {
                const payload = JSON.parse(atob(parsed.access_token.split('.')[1]));
                expiry = payload?.exp;
            } catch (_) {}
        }

        // Remove if expired
        if (expiry && expiry < now) {
            localStorage.removeItem(SUPABASE_STORAGE_KEY);
            localStorage.removeItem('ga_current_user');
            console.info('[Auth] Expired session token removed.');
        }
    } catch (e) {
        // Malformed — remove it
        localStorage.removeItem(SUPABASE_STORAGE_KEY);
    }
})();

// ── If OAuth hash is incoming, clear old session first ──
if (window.location.hash && window.location.hash.includes('access_token=')) {
    localStorage.removeItem(SUPABASE_STORAGE_KEY);
}

// ── Initialize Supabase client ──
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        storageKey: SUPABASE_STORAGE_KEY
    }
});

console.info('[Supabase] Client initialized (supabase-js v2 / JWT anon key).');
