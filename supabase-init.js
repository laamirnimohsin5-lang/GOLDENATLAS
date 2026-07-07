const SUPABASE_URL = 'https://dwvmunsmqkjmybjkhsvx.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3dm11bnNtcWtqbXliamtoc3Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NzAxMDMsImV4cCI6MjA2NTE0NjEwM30.Mvqb6r5muBCfzBjnDFrFTrU2-W4NhLJtX5o8i9JEMNs';

// Clear stale session if a new OAuth token is incoming (prevents 401 conflicts)
if (window.location.hash && window.location.hash.includes('access_token=')) {
    localStorage.removeItem('sb-dwvmunsmqkjmybjkhsvx-auth-token');
}

window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
    }
});



