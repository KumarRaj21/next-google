import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LogoutButton from "./LogoutButton"; // import the client component

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-amber-50 to-orange-100">
      <h1 className="text-3xl font-bold text-amber-700">
        Welcome, {session.user?.name}
      </h1>
      <p className="text-gray-600 mt-2">{session.user?.email}</p>

      {/* Logout button */}
      <div className="mt-6">
        <LogoutButton />
      </div>
    </div>
  );
}
