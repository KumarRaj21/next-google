// src/lib/auth.ts
"use server";

import { cookies } from "next/headers";

export const loginUser = async (email: string, password: string) => {
  // simulate auth call (replace with Express API)
  if (email === "admin@test.com" && password === "123456") {
    (await cookies()).set("token", "mock-token", { httpOnly: true, path: "/" });
    return { success: true };
  }
  return { success: false, error: "Invalid credentials" };
};

export const signupUser = async (email: string, password: string) => {
  // placeholder - call your real API here
  return { success: true };
};

export const logoutUser = async () => {
  (await cookies()).delete("token");
};
