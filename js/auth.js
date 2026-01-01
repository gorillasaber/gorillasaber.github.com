const STORAGE_KEY = "gs_session";
export const WORKER_ORIGIN = "https://gs-proxy.gorillasaber.partymonkervgt.workers.dev";
function parseJwtPayload(token) {
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  let b64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
  b64 += "=".repeat((4 - (b64.length % 4)) % 4);
  try {
    return JSON.parse(atob(b64));
  } catch {
    return null;
  }
}
export function getSession() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    const { token } = JSON.parse(raw);
    if (!token) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    const payload = parseJwtPayload(token);
    if (!payload?.exp) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    if (Date.now() > payload.exp * 1000) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return { token, payload };
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}
export function isLoggedIn() {
  return !!getSession();
}
export function isAdmin() {
  const s = getSession();
  return !!s?.payload?.admin;
}
export function logout() {
  localStorage.removeItem(STORAGE_KEY);
}
export function loginWithDiscord() {
  location.href = `${WORKER_ORIGIN}/auth/discord/login`;
}
export function saveTokenFromHash() {
  const hash = new URLSearchParams(location.hash.replace(/^#/, ""));
  const token = hash.get("token");
  if (!token) return false;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ token }));
  history.replaceState(null, "", location.pathname);
  return true;
}
