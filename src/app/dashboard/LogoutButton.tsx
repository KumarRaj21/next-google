"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" }); // Redirects to /login after logout
  };

  return (
    <Button
      onClick={handleLogout}
      className="mt-4 bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-200"
    >
      Logout
    </Button>
  );
}
