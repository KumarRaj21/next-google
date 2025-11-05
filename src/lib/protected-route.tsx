// src/lib/protected-route.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function requireAuth() {
  const token = (await cookies()).get("token");
  if (!token) redirect("/login");
}
