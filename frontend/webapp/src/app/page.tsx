import { redirect } from "next/navigation";

// Root: redirect sesuai role pengguna
export default function RootPage() {
  // TODO: Periksa sesi & role pengguna (siswa -> /beranda, bk -> /bk/dashboard, unauthenticated -> /login)
  redirect("/login");
}
