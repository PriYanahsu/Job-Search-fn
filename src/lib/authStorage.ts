export function getAccessToken() {
  return typeof window !== "undefined" ? localStorage.getItem("token") : null;
}

export function setAccessToken(token: string) {
  localStorage.setItem("token", token);
}

export function clearAccessToken() {
  localStorage.removeItem("token");
}

export function getUserId() {
  const raw = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
  if (!raw) return null;
  const n = Number(raw);
  return Number.isFinite(n) ? n : null;
}

export function setUserId(userId: number) {
  localStorage.setItem("userId", String(userId));
}

export function clearUserId() {
  localStorage.removeItem("userId");
}

export type AuthRole = "owner" | "user";

export function getRole(): AuthRole | null {
  const raw = typeof window !== "undefined" ? localStorage.getItem("role") : null;
  if (raw === "owner" || raw === "user") return raw;
  return null;
}

export function setRole(role: AuthRole) {
  localStorage.setItem("role", role);
}

export function clearRole() {
  localStorage.removeItem("role");
}

export function isOwner() {
  return getRole() === "owner";
}

