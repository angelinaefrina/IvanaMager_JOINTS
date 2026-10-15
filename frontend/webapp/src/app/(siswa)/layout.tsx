export default function SiswaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* TODO: Sidebar siswa + guard role=siswa */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
