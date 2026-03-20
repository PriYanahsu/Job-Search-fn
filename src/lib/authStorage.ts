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
  if (typeof window === "undefined") return null;

  const candidates = [
    localStorage.getItem("userId"),
    localStorage.getItem("userID"),
    localStorage.getItem("user_id"),
    localStorage.getItem("id"),
  ];

  for (const raw of candidates) {
    if (!raw) continue;
    const n = Number(raw);
    if (Number.isFinite(n)) return n;
  }

  return null;
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

