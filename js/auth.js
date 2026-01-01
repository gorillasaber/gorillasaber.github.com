export function getSession() {
  const raw = localStorage.getItem("gs_session");
  if (!raw) return null;
  try {
    const s = JSON.parse(raw);
    if (!s.expires_at || Date.now() > s.expires_at) {
      localStorage.removeItem("gs_session");
      return null;
    }
    return s;
  } catch {
    localStorage.removeItem("gs_session");
    return null;
  }
}
export function logout() {
  localStorage.removeItem("gs_session");
}
