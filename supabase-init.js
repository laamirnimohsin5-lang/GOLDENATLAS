const SUPABASE_URL = 'https://dwvmunsmqkjmybjkhsvx.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3dm11bnNtcWtqbXliamtoc3Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NzAxMDMsImV4cCI6MjA2NTE0NjEwM30.Mvqb6r5muBCfzBjnDFrFTrU2-W4NhLJtX5o8i9JEMNs';
const SUPABASE_STORAGE_KEY = 'sb-dwvmunsmqkjmybjkhsvx-auth-token';

// ── Proactive stale token cleanup ──
// If an OAuth hash is incoming, clear old session to avoid 401 conflicts
if (window.location.hash && window.location.hash.includes('access_token=')) {
    localStorage.removeItem(SUPABASE_STORAGE_KEY);
}

// If stored token is clearly expired (JWT exp in past), remove it before Supabase
// tries to auto-refresh it (which causes the 401 network error in console)
try {
    const stored = localStorage.getItem(SUPABASE_STORAGE_KEY);
    if (stored) {
        const parsed = JSON.parse(stored);
        const expiry = parsed?.expires_at || parsed?.access_token && JSON.parse(atob(parsed.access_token.split('.')[1]))?.exp;
        if (expiry && expiry < Math.floor(Date.now() / 1000)) {
            localStorage.removeItem(SUPABASE_STORAGE_KEY);
            console.info('[Auth] Expired token removed from storage.');
        }
    }
} catch(e) {
    // Malformed token — remove it
    localStorage.removeItem(SUPABASE_STORAGE_KEY);
}

window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        storageKey: SUPABASE_STORAGE_KEY
    }
});



